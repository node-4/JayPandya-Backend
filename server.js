const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const compression = require('compression');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const swaggerUI = require('swagger-ui-express');
const createLocaleMiddleware = require('express-locale');
const config = require('./src/config/config');
const { successHandle, errorHandle } = require('./src/config/morgan');
const limiter = require('./src/middlewares/rateLimiter');
const errorHandler = require('./src/utils/errorHandler');
const AppError = require('./src/utils/appError');
const startPolyglot = require('./src/utils/startPolyglot');
const docs = require('./docs/swagger');
const routes = require('./src/routes');
const logger = require('./src/config/logger');
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
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://jaypanda:jaypanda@jay.uvoxkja.mongodb.net/?retryWrites=true&w=majority").then(() => {
  console.log("Db conneted succesfully");
}).catch((err) => {
  console.log(err);
});

const serverPort = config.server.port;
app.listen(serverPort, () => {
  console.log(`listening on port ${serverPort}`);
});
module.exports = {
  handler: serverless(app)
}
