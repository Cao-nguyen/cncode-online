const cloudinary = require('../../config/cloudinary');

const uploadImage = async (req, res, next) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }

    console.log('Files:', req.files);  // Kiểm tra file upload
    const imageFile = req.files.image;

    console.log('Uploading to Cloudinary...');
    const result = await cloudinary.uploader.upload(imageFile.tempFilePath);
    console.log('Upload result:', result);

    req.imageUrl = result.secure_url;
    next();
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).send('An error occurred while uploading the image.');
  }
};

module.exports = uploadImage;
