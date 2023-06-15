const DatauriParser = require('datauri/parser');

const parser = new DatauriParser();

// Data uri helper function

const dataUri = (file) => { console.log("File", file.buffer), parser.format('webp', file.buffer) };

module.exports = dataUri;
