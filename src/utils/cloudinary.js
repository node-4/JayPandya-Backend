const cloudinary = require('cloudinary');
const config = require('../config/config');

// Setting The Cloudinary Configurations
cloudinary.v2.config({
  cloud_name: config.cloud.name,
  api_key: config.cloud.api_key,
  api_secret: config.cloud.api_secret
});

const destroyFile = (PublicID) =>
  cloudinary.v2.uploader.destroy(PublicID, (err, des) => des);
const uploadFile = (file, folderName, width) =>
  //console.log(folderName)
  //console.log("Cloud", file)
  cloudinary.v2.uploader.upload(file, {
    folder: `${config.cloud.project}/${folderName}`,
    width: width,
    crop: 'fit',
    format: 'webp'
  });
module.exports = { destroyFile, uploadFile };
