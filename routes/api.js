'use strict';

const Translator = require('../components/translator.js');
module.exports = function(app) {

  const translator = new Translator();

// TODO Complete the /api/translate route
  app.route('/api/translate').post((req, res) => {

  });
};
