const cloudinary = require('cloudinary').v2;
const fs = require('fs');

// Configuration
const CLOUDINARY_CLOUD_NAME = 'dncz7an76';
const CLOUDINARY_API_KEY = 721857556485297;
const CLOUDINARY_SECRET_KEY = '6bmya-iqhA-ZP4nNLEqrVPnrySY';

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_SECRET_KEY
});

const uploadOnCloudinary = async (localFile) => {
    try {
        const response = await cloudinary.uploader.upload(localFile, { resource_type: "auto" });
        console.log("File upload successful on Cloudinary", response.url);
        fs.unlinkSync(localFile);
        return response;
    } catch (error) {
        fs.unlinkSync(localFile);
        console.log("Error in file upload on Cloudinary");
        return null;
    }
};

module.exports = { uploadOnCloudinary };
