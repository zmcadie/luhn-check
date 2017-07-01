var assert = require("chai").assert;
var isLuhn = require("../check.js");

describe("Luhns", function() {
  it("should return true if a number passes luhn check", function() {
    var number = 79927398713;
    var result = isLuhn(number);
    assert.isTrue(result)
  });

  it("should return false if a number does not pass luhn check", function() {
    var number = 79927398717;
    var result = isLuhn(number);
    assert.isFalse(result)
  });
});