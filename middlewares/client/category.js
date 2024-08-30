const Category = require('../../models/categoryModel');
const createTree = require('../../helpers/createTree')

// [GET] /category
module.exports.category = async (req, res, next) => {
    let find = { deleted: false };

    const categories = await Category.find(find);

    const newCategory = createTree.tree(categories);

    res.locals.category = newCategory

    next()
}