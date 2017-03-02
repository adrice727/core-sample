const config = {
  // A container can either be a query selector or an HTMLElement
  credentials: {
    apiKey: null,
    sessionId: null,
    token: null,
  },
  streamContainers: '#streams',
  controlsContainer: '#controls',
  packages: ['textChat', 'screenSharing'],
  screenSharing: {
    extensionID: 'plocfffmbcclpdifaikiikgplfnepkpo',
    dev: true,
  }
};


module.exports = config;