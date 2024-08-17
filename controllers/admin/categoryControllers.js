const Category = require('../../models/categoryModel');
const createTree = require('../../helpers/createTree')
const { listmongoose } = require('../../util/mongoose');
const { onemongoose } = require('../../util/mongoose')

// [GET] /category
module.exports.category = async (req, res, next) => {
    try {
        let find = { deleted: false };

        const categories = await Category.find(find);

        const newCategory = createTree.tree(categories);

        res.render('admin/pages/category/category', { 
            pageTitle: 'Danh mục',
            category: newCategory
        });
    } catch (error) {
        next(error);
    }
}

// [GET] /category/create
module.exports.create = async (req, res, next) => {
    try {
        let find = { deleted: false };

        const categories = await Category.find(find);

        const newCategory = createTree.tree(categories);

        res.render('admin/pages/category/create', { 
            pageTitle: 'Tạo danh mục',
            category: newCategory
        });
    } catch (error) {
        next(error);
    }
};


// [POST] /admin/category/create
module.exports.createPost = async (req, res) => {
    try {
        const { file } = req;
        if (!file) {
            req.flash('create', 'File image is required!');
            return res.redirect('back');
        }
        
        const imageUrl = file.path;
        req.body.image = imageUrl;
        req.body.createdAt = new Date();

        if(req.body.position == "") {
            const count = await Category.count()
            req.body.position = count + 1
        } else {
            req.body.position = parseInt(req.body.position)
        }
        
        const category = new Category(req.body);
        await category.save();
        res.redirect('/admin/category');
    } catch (error) {
        console.log('Lỗi')
    }
}

// [GET] /admin/category/edit
module.exports.edit = async (req, res, next) => {
    try {
        let find = {
            deleted: false
        }

        const id = req.params.id;
        const data = await Category.findOne({
            _id: id,
            deleted: false
        })

        const categories = await Category.find(find)

        const newCategory = createTree.tree(categories);

        res.render('admin/pages/category/edit', { 
            pageTitle: 'Chỉnh sửa danh mục',
            data: data,
            category: newCategory
        });
    } catch (error) {
        res.redirect('/admin/category')
    }
}

// [PATCH] /admin/category/edit
module.exports.editPatch = async (req, res, next) => {
    try {
        let find = {
            deleted: false
        }

        const id = req.params.id;

        req.body.position = parseInt(req.body.position)

        await Category.updateOne({ _id: id }, req.body)
        
        res.redirect('back')

    } catch (error) {
        next(error);
    }
}
