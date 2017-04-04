define(['exports'], function (exports) {
  'use strict';

  /**
   * Servicio de ejemplo.
   * @class
   * @module
   */

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var ExampleSrcService = function () {

    /**
     * @constructs ExampleSrcService
     * @param args
     */
    function ExampleSrcService() {
      _classCallCheck(this, ExampleSrcService);
    }

    /**
    * Función de ejemplo
    * @function
    * @param value - Valor a evaluar.
    * @return Devuelve si el parámetro es un entero o no
    *
    */


    _createClass(ExampleSrcService, [{
      key: 'isInteger',
      value: function isInteger(value) {

        return Number.isInteger(value);
      }
    }]);

    return ExampleSrcService;
  }();

  exports.ExampleSrcService = ExampleSrcService;
});