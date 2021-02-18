'use strict';

const log = () => {
  if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
    return false;
  }
  console.log(...arguments);
};

module.exports = log;
