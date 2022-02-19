const Bunyan = require('bunyan');
const { default: create } = require('got/dist/source/create');

const bunyanOptions = {
  streams: [
    {
      type: 'file',
      path: './application.log',
    },
  ],
};

const createLogger = (name) => {
  return Bunyan.createLogger({ ...bunyanOptions, name });
};

module.exports = createLogger;