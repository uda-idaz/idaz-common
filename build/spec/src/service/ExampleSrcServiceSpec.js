define(['../../../src/service/ExampleSrcService'], function (_ExampleSrcService) {
  'use strict';

  describe("Jasmine tests of ExampleSrcService", function () {

    var exampleSrcService;

    beforeEach(function () {
      exampleSrcService = new _ExampleSrcService.ExampleSrcService();
    });

    it("debería de determinar si el valor del parámetro es un entero o no", function () {
      expect(exampleSrcService.isInteger(1234)).toBe(true);
    });
  });
});