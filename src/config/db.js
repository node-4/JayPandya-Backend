const mongoose = require('mongoose');
const logger = require('./logger');
const config = require('./config');

/**
 * Connect To Database
 */
const connectDB = async () => {
  const DB = process.env.DATEBASE || "mongodb+srv://jaypanda:jaypanda@jay.uvoxkja.mongodb.net/?retryWrites=true&w=majority"

  mongoose.set('autoIndex', true);

  const con = await mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true
  });

  console.log(`MongoDB Connected: ${con.connection.host}.`);

  mongoose.connection.on('connecting', () => {
    console.log('Connecting to Database');
  });

  mongoose.connection.on('connected', () => {
    console.log('Mongoose Connected to Database');
  });

  mongoose.connection.on('error', (err) => {
    logger.error(err.message);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose Connection is Disconnected.');
  });

  process.on('SIGINT', async () => {
    await mongoose.connection.close();
    process.exit(0);
  });
};
module.exports =connectDB;
