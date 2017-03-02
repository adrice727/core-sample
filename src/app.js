const otCore = require('opentok-accelerator-core');
const config = require('./config.js');

const { dom } = otCore.util;

const init = () => {
  const start = () => {
    dom.id('mask').classList.add('hidden');
    otCore.startCall();
  };
  otCore.init(config);
  otCore.connect().then(dom.id('startCall').classList.remove('hidden'));
  dom.id('startCall').addEventListener('click', start);
};

document.addEventListener('DOMContentLoaded', init);
