const cloudinary = require('../../config/cloudinary');

const uploadImage = async (req, res, next) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }

    const imageFile = req.files.image;
    const result = await cloudinary.uploader.upload(imageFile.tempFilePath);

    req.imageUrl = result.secure_url;

    next();
  } catch (err) {
    next()
  }
};

module.exports = uploadImage;