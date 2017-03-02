const otCore = require('opentok-accelerator-core');
const config = require('./config.js');

const run  = () => {







  const init = () => {
    otCore.init(config);
    otCore.connect().then(orCore.startCall);
  }



  init();

}

document.addEventListener('DOMContentLoaded', run);