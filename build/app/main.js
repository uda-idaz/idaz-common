define(['./component/ExampleAppService'], function (_ExampleAppService) {
  'use strict';

  var exampleAppService = new _ExampleAppService.ExampleAppService();

  exampleAppService.setText('texto1', 'Texto de prueba 1');
  exampleAppService.setText('texto2', 'Texto de prueba 2');
});