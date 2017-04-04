
/**
 * Modulo encargado de realizar las peticiones AJAX.
 *
 * @class
 * @module
 */
class XhrManager{

  /**
   * Mediante el contructor se facilita la inicialización del módulo con unas opciones globales a las siguientes invocaciones.
   *
   * @constructs XhrManager
   * @param {object} args Parámetros de configuración.
   */
  constructor(args){

    const defaults = {
      url : null,
      async : 'true',
      type : 'GET'
    }

    // TODO: https://github.com/ded/reqwest/blob/master/src/reqwest.js
    // TODO: https://github.com/dragfire/ajax-promise-es6/blob/master/index.js

    this.options = Object.assign(defaults, args);
    this.xmlHttpRequest = 'XMLHttpRequest';
    this.defaultHeaders = {
          'contentType': 'application/x-www-form-urlencoded',
          'requestedWith': this.xmlHttpRequest,
          'accept': {
              '*':  'text/javascript, text/html, application/xml, text/xml, */*',
              'xml':  'application/xml, text/xml',
              'html': 'text/html',
              'text': 'text/plain',
              'json': 'application/json, text/javascript',
              'js':   'application/javascript, text/javascript',
          }
      };

  }

  /**
  * Obtiene una respuesta JSON desde el servidor mediante una petición HTTP GET.
  *
  * @function
  * @param value - Valor a evaluar.
  * @return Devuelve si el parámetro es un entero o no
  *
  */
  getJSON(args){

    let options = Object.assign(this.options, args);

    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      request.open('GET', options.url, options.async);

      request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
          // Success!
          resolve(JSON.parse(request.response));

        } else {

          reject(new Error(request.statusText));
        }
      };

      request.onerror = function() {
        reject(new Error('Error al realizar la petición XHR'));
      };

      request.send();
    });
  }

  ajax(){
    let options = Object.assign(this.options, args);

    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      request.open('GET', options.url, options.async);

      request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
          // Success!
          resolve(request.response);

        } else {

          reject(new Error(request.statusText));
        }
      };

      request.onerror = function() {
        reject(new Error('Error al realizar la petición XHR'));
      };

      request.send();
    });
  }

}

export { XhrManager };
