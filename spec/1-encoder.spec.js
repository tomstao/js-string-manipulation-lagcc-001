'use strict';
const encoder = require("../lib/1-encoder")
const decoder = require("../lib/2-decoder")


describe('encoder', function() {

  describe('Encoding strings', function() {

    it('returns a value', function() {
      expect(encoder("Call me Ishmael")).not.toBeUndefined();
    });

    it('modifies the string', function() {
      expect(encoder("Call me Ishmael")).not.toEqual("Call me Ishmael");
    });

  });

});
