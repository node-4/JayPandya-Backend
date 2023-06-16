const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const http = require('http');
const server = http.createServer(app);
const bodyparser = require("body-parser");
const serverless = require("serverless-http");
const docs = require('./docs/swagger');
const swaggerUI = require('swagger-ui-express');
const routes = require('./src/routes');
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 2006;
mongoose.connect("mongodb+srv://jaypanda:jaypanda@jay.uvoxkja.mongodb.net/?retryWrites=true&w=majority").then(() => {
  console.log("Db conneted succesfully");
}).catch((err) => {
  console.log(err);
});
app.use('/api', routes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));
app.get("/", (req, res) => {
  res.status(200).send({ msg: "Working App" });
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = {
  handler: serverless(app),
};