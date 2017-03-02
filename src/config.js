const credentials = require('../credentials.js');

const config = {
  credentials,
  streamContainers: () => '#streams',
  controlsContainer: null,
  packages: ['textChat', 'screenSharing'],
  textChat: {
    alwaysOpen: true,
    name: `user ${Math.random() * 100 | 0}`,
  },
  screenSharing: {
    extensionID: 'plocfffmbcclpdifaikiikgplfnepkpo',
    dev: true,
  },
};


module.exports = config;
