// const app = require('./app');

const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const compression = require('compression');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const swaggerUI = require('swagger-ui-express');
const createLocaleMiddleware = require('express-locale');
const config = require('./config/config');
const { successHandle, errorHandle } = require('./config/morgan');
const limiter = require('./middlewares/rateLimiter');
const errorHandler = require('./utils/errorHandler');
const AppError = require('./utils/appError');
const startPolyglot = require('./utils/startPolyglot');
const docs = require('../docs/swagger');
const routes = require('./routes');
const logger = require('./config/logger');
const connectDB = require('./config/db');
const serverless = require('serverless-http')
const app = express();
app.enable('trust proxy');
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(
  createLocaleMiddleware({
    priority: ['accept-language', 'default'],
    default: 'en_US'
  })
);
app.use(startPolyglot);
app.use(xss());
app.use(mongoSanitize());
app.use(cors());
app.options('*', cors());
app.use(compression());
app.disable('x-powered-by');
if (config.env === 'production') {
  app.use('/api', limiter);
}
app.get('/', (req, res) => {
  res.status(200).json({
    message: "App Start"
  })
})
app.use('/api', routes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));

// Connect to MongoDB
connectDB();

const serverPort = config.server.port;

const server = app.listen(serverPort, () => {
  console.log(`listening on port ${serverPort}`);
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});


module.exports = {
  handler: serverless(app)
}
