define(['../../../app/component/ExampleAppService'], function (_ExampleAppService) {
  'use strict';

  describe("Tests de jasmine del módulo ExampleAppService", function () {

    var exampleAppService = void 0,
        body = void 0,
        span = void 0;
    var spanId = "spanTest1";

    beforeAll(function () {
      exampleAppService = new _ExampleAppService.ExampleAppService();
      body = document.getElementsByTagName("body")[0];
      span = document.createElement("SPAN");
      span.id = spanId;

      body.appendChild(span);
    });

    it("debería de asignar el valor a un elemento del DOM", function () {
      var text = "Texto de prueba";
      exampleAppService.setText("spanTest1", text);
      expect(document.getElementById(spanId).innerHTML).toBe(text);
    });
  });
});