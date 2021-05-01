/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { parsed } = require('dotenv').config({
  path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`),
});

module.exports = {
  env: {
    ...parsed,
  },
};
