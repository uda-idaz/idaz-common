'use strict';

import { XhrManager } from '../../../src/xhr/XhrManager';

describe('Jasmine tests of XhrManager', function() {

  var xhrManager;

  beforeEach(function() {
    xhrManager = new XhrManager();
  });

  it('debería de realizar correctamente una petición getJSON', function(done) {

    let successTest = function() {
        done();
    };

    xhrManager.getJSON({url:'/base/mock/json/xhr.json'})
      .then(successTest);
  });

  it('debería de realizar una petición errónea getJSON', function(done) {

    let failTest = function() {
        done();
    };

    xhrManager.getJSON({url:'/base/mock/json/xhr_noexist.json'})
      .catch(failTest);
  });
});
