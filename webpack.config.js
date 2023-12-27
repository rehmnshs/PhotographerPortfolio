const path = require('path');

module.exports = {
  // ... other configurations ...

  resolve: {
    fallback: {
      process: require.resolve('process/browser'),
    },
  },
};
