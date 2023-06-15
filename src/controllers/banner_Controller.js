const catchAsync = require('../utils/catchAsync');

// Services
const { BannerService } = require('../services/index');


const addBanner = catchAsync(async (req, res) => {
  // 1) Create new category
  const { type, message, statusCode, banner, } =
    await BannerService.createBanner(
      { description: req.body.description, image: req.body.image },
      //  req.file
    );

  // 2) Check if there is an error
  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: message
    });
  }

  // 3) If everything is OK, send data
  return res.status(statusCode).json({
    type,
    message: message,
    banner
  });
});


const getAllBanners = catchAsync(async (req, res) => {
  const { type, message, statusCode, banner, } = await BannerService.getAllBanner();
  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: message
    });
  }

  // 3) If everything is OK, send data
  return res.status(statusCode).json({
    type,
    message: message,
    banner
  });
})


const DeleteBanner = catchAsync(async (req, res) => {
  const { type, message, statusCode, banner, } = await BannerService.deleteBannerById(req.params.id)
  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: message
    });
  }

  // 3) If everything is OK, send data
  return res.status(statusCode).json({
    type,
    message: message,
    banner
  });
})


const BannerGetByID = catchAsync(async (req, res) => {
  const { type, message, statusCode, banner, } = await BannerService.BannerfindId(req.params.id)
  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: message
    });
  }

  // 3) If everything is OK, send data
  return res.status(statusCode).json({
    type,
    message: message,
    banner
  });
})
module.exports = { addBanner, getAllBanners, DeleteBanner, BannerGetByID };


