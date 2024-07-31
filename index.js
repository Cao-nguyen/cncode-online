const express = require('express')
const path = require('path')
const flash = require('express-flash')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const methodOverride = require('method-override')
const route = require('./routes/client/indexRoute')
const routeAdmin = require('./routes/admin/indexRoute')
const db = require('./config/database')
require('dotenv').config()
const app = express()
const port = process.env.PORT

// fix lỗi không hiển thị được json khi dùng POST
app.use(bodyParser.urlencoded({ 
    extended: false
}))
app.use(bodyParser.json())

// set pug
app.set('views', `${__dirname}/views`)
app.set('view engine', 'pug')
app.use(express.static(`${__dirname}/public`))

// set flash
app.use(cookieParser('WSweb'));
app.use(session({ cookie: { maxAge: 60000 }}));
app.use(flash())

// TinyMCE
app.use('/tinymce', express.static(path.join(__dirname, 'node_modules', 'tinymce')))

// set methodOverride
app.use(methodOverride('_method'))

// Routes
route(app)
routeAdmin(app)

// Kết nối database
db.connect()

// 404
app.get('*', (req, res) => {
    res.render('./client/pages/error/404', {
        pageTitle: 'Trang này không tồn tại'
    })
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})