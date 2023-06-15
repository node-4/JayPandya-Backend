// Utils
const AppError = require('../utils/appError');

const restrictedTo =
  (...roles) =>
    (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return next(
          new AppError('You do not have permission to perform this action', 403)
        );
      }
      next();
    };

module.exports = restrictedTo;
