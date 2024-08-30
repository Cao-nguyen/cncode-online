const Category = require('../../models/categoryModel');
const createTree = require('../../helpers/createTree')

module.exports.category = async (req, res, next) => {
    const categories = await Category.find({
        deleted: false
    });

    const newCategory = createTree.tree(categories);

    res.locals.category = newCategory
}