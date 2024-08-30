const Product = require('../../models/productsModel')

// [GET] /search
module.exports.search = async(req, res) => {
    const keyword = req.query.keyword

    if(keyword) {
        const keywordRegex = new RegExp(keyword, "i")

        const products = await Product.find({
            name: keywordRegex,
            deleted: false
        })

        res.render('client/pages/search/index', {
            pageTitle: 'Kết quả tìm kiếm',
            keyword: keyword,
            products: products
        })
    }
}