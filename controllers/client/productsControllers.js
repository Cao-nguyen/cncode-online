const Product = require('../../models/productsModel');
const { listmongoose } = require('../../util/mongoose');
const { onemongoose } = require('../../util/mongoose')

// [GET] /products
module.exports.index = async (req, res, next) => {
    const products = await Product.find({ 
        deleted: false 
    })


    res.render('client/pages/products/products', { 
        pageTitle: 'Danh sách sản phẩm',
        products: listmongoose(products)
    })
}

// [GET] /admin/products/:slug
module.exports.show = async (req, res) => {
    const find = {
        deleted: false,
        slug: req.params.slug
    }

    const product = await Product.findOne(find)

    res.render('client/pages/products/show', { 
        pageTitle: product.name,
        product: onemongoose(product)
    })
}