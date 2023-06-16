const express = require('express');
// const helmet = require('helmet');
// const xss = require('xss-clean');
const compression = require('compression');
const cors = require('cors');
// const mongoSanitize = require('express-mongo-sanitize');
const swaggerUI = require('swagger-ui-express');
const env = require('dotenv');
const createLocaleMiddleware = require('express-locale');
// const startPolyglot = require('./src/utils/startPolyglot');
const docs = require('./docs/swagger');
const routes = require('./src/routes');
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
// app.use(startPolyglot);
// app.use(xss());
// app.use(mongoSanitize());
app.use(cors());
app.options('*', cors());
app.use(compression());
app.disable('x-powered-by');
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  if (err.status) {
      console.log(err);
      console.log('error middleware');
      return res.status(err.status).json({
          msg: err.message
      })

  } else {

      console.log(err);
      console.log('error middleware status not given');
      return res.status(500).json({
          msg: err.message
      })
  }

})



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

const serverPort = process.env.PORT;
app.listen(serverPort, () => {
  console.log(`listening on port ${serverPort}`);
});
module.exports = {
  handler: serverless(app)
}
