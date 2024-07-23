module.exports = {

    listmongoose: function (mongoose) {
        return mongoose.map(mongoose => mongoose.toObject())
    },

    onemongoose: function(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose
    }

}