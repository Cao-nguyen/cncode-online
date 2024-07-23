const mongoose = require('mongoose')

module.exports.connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrParser: true,
            useUnifiedTopology: true
        }),
        console.log('Thành công')
    } catch (error) {
        console.log('Thất bại')
    }
}
