const path = import('path');
const { parsed } = import('dotenv').config({
  path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`),
});

module.exports = {
  env: {
    ...parsed,
  },
};
