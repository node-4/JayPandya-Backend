const { promisify }  = require('util');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const { User } = require('../models/index');
const protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies && req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  //   const authHeader = req.header.authorization;
  //   console.log(authHeader)
  //  // const token = authHeader && authHeader.split(' ')[1];
  console.log(token)
  // 2) Check if token does not exist
  if (!token) {
    return next(
      new AppError('You are not logged in! Please login to get access.', 401)
    );
  }

  // 3) Token verification
  const decoded = await promisify(jwt.verify)(token, config.jwt.secret);

  // 4) Extract user data from database
  const currentUser = await User.findById(decoded.sub);

  // 5) Check if user does not exist
  if (!currentUser) {
    return next(
      new AppError(
        'The user belonging to this token does no longer exist.',
        401
      )
    );
  }

  // 6) Check if user changed password after the token was issued
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError('User recently changed password! Please login again!', 401)
    );
  }

  req.user = currentUser;

  next();
});

module.exports = protect;
