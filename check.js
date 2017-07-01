// From the rightmost digit moving left, double every second digit.
// If the result is greater than 9 add the digits of the product (e.g. 16 = 1 + 6 = 7)
// Take the sum of all the digits.
// If the total modulo 10 is  0 the number is valid; else it is not valid.

function check(number) {
  var sum = 0
  var secondDoubled = []
  var num = number.toString()
  for (var i = 1; i <= num.length; i++) {
    if (i % 2 === 0) {
      var n = num[num.length - i] * 2;
      if (n > 9) {
        n -= 9;
      };
      secondDoubled.unshift(n);
      continue;
    };
    secondDoubled.unshift(Number(num[num.length - i]))
  };
  sum = secondDoubled.reduce(function(a, b) {
    return a + b
  }, 0);
  return (sum % 10 === 0) ? true : false;
};

module.exports = check;