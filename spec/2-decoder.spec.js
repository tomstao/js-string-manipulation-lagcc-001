'use strict';
const decoder = require("../lib/2-decoder")
const encoder = require("../lib/1-encoder")

describe('decoder', function() {

  describe('Decoding Strings', function() {

    it('decodes the encoded string \"Fourscore and seven years ago\"', function() {
      var encoded_value = encoder("Fourscore and seven years ago");
      expect(encoded_value).not.toEqual("Fourscore and seven years ago");
      expect(decoder(encoded_value)).toEqual("Fourscore and seven years ago");
    });

    it('decodes the encoded string \"I have a dream\"', function() {
      var encoded_value = encoder("I have a dream");
      expect(encoded_value).not.toEqual("I have a dream");
      expect(decoder(encoded_value)).toEqual("I have a dream");
    });

  });

});
