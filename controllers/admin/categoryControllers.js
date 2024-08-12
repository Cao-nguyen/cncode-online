const Category = require('../../models/categoryModel');
const { listmongoose } = require('../../util/mongoose');
const { onemongoose } = require('../../util/mongoose')

// [GET] /category
module.exports.category = async (req, res, next) => {
    let find = {
        deleted: false
    }

    // Lấy dữ liệu in ra giao diện
    const categories = await Category.find(find)

    res.render('admin/pages/category/category', { 
        pageTitle: 'Danh mục',
        category: listmongoose(categories)
    })
}

// [GET] /category/create
module.exports.create = async (req, res, next) => {
    try {
        let find = { deleted: false };

        const categories = await Category.find(find);
        console.log('Categories:', categories);  // In ra để kiểm tra

        function createTree(arr, parentId = "") {
            const tree = [];
            arr.forEach((item) => {
                if (item.parent_id === parentId) {
                    const newItem = { ...item._doc };  // Lấy đối tượng thô
                    const children = createTree(arr, item._id);
                    if (children.length > 0) {
                        newItem.children = children;
                    }
                    tree.push(newItem);
                }
            });
            return tree;
        }

        const newCategory = createTree(categories);
        console.log('Category Tree:', newCategory);  // In ra để kiểm tra

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