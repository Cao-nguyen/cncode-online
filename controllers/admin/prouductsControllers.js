const Product = require('../../models/productsModel');
const { listmongoose } = require('../../util/mongoose');
const { onemongoose } = require('../../util/mongoose')

// [GET] /admin/products
module.exports.index = async (req, res, next) => {
    let find = {
        deleted: false
    }

    // search
    let keyword = ""

    if(req.query.keyword) {
        keyword = req.query.keyword

        const regex = new RegExp(keyword, "i")
        find.name = regex
    }

    // pagination
    let obJectPagination = {
        currentPage: 1,
        limitItem: 20
    }

    if(req.query.page) {
        obJectPagination.currentPage = parseInt(req.query.page)
    }

    obJectPagination.skip = (obJectPagination.currentPage -1) * obJectPagination.limitItem

    const countProducts = await Product.count(find)
    const totalPage = Math.ceil(countProducts/obJectPagination.limitItem)

    obJectPagination.totalPage = totalPage


    // Lấy dữ liệu in ra giao diện
    const products = await Product.find(find).limit(obJectPagination.limitItem).skip(obJectPagination.skip)

    res.render('admin/pages/products/products', { 
        pageTitle: 'Sản phẩm',
        products: listmongoose(products),
        keyword: keyword,
        pagination: obJectPagination
    })
}

// [DELETE] /admin/products/delete/:id
module.exports.deleteItem = async (req, res) => {
    const id = req.params.id
    await Product.updateOne({_id: id}, {
        deleted: true, 
        deletedAt: new Date()
    })
    req.flash('delete', 'Bạn đã xoá thành công sản phẩm này!')
    res.redirect('back')
}

// [GET] /admin/products/create
module.exports.create = async (req, res) => {
    res.render('admin/pages/products/create', { 
        pageTitle: 'Tạo mới sản phẩm',
    })
}

// [POST] /admin/products/create
module.exports.createPost = async (req, res) => {
    const { file } = req;
    const imageUrl = file.path;
    
    // if(!req.body.title) {
    //     req.flash('validate', 'Bạn chưa nhập dữ liệu')
    //     res.redirect('back')
    //     return
    // }
    req.body.image = imageUrl
    req.body.createdAt = new Date()
    const product = new Product(req.body)
    await product.save()
    req.flash('create', 'Bạn đã thêm sản phẩm thành công!')
    res.redirect('/admin/products/create')
}

// [GET] /admin/products/edit
module.exports.edit = async (req, res) => {
    const find = {
        deleted: false,
        _id: req.params.id
    }

    const product = await Product.findOne(find)

    res.render('admin/pages/products/edit', { 
        pageTitle: 'Chỉnh sửa sản phẩm',
        product: onemongoose(product)
    })
}

// [PATCH] /admin/products/edit
module.exports.editPatch = async (req, res) => {
    const imageUrl = req.imageUrl;

    req.body.updatedAt = new Date()
    
    try {
        await Product.updateOne({_id: req.params.id}, req.body)
        req.flash('create', 'Bạn đã chỉnh sửa sản phẩm thành công!')
    } catch (error) {
        req.flash('create', 'Đã xảy ra lỗi trong quá trình cập nhật sản phẩm!')
    }

    res.redirect('back')
}

// [GET] /admin/products/detail
module.exports.detail = async (req, res) => {
    const find = {
        deleted: false,
        _id: req.params.id
    }

    const product = await Product.findOne(find)

    res.render('admin/pages/products/detail', { 
        pageTitle: product.name,
        product: onemongoose(product)
    })
}