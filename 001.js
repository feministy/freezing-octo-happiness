// SOLUTION
function threeFiveSum(num) {
  var nums = selectMultiples(5, 3, num);
  return sum(nums);
}

function selectMultiples(x, y, num) {
  var nums = [];
  for (var i = 0; i < num; i++) {
    if (i % x === 0 || i % y === 0) {
      nums.push(i);
    }
  }
  return nums;
}

function sum(array) {
  return array.reduce(function(a, b) {
    return a + b;
  });
}

console.log(threeFiveSum(1000));

// TESTS
var assert = require("assert");

describe('sum', function() {
  it('adds up the array', function() {
    var arr = [1, 2, 3];
    assert.equal(sum(arr), 6);
  })
})

describe('selectMultiples', function() {
  it('selects multiples of 3 and 5', function() {
    assert.ok(selectMultiples(5, 3, 10), [0, 3, 5, 6, 9])
  })
})

describe('threeFiveSum', function() {
  it('works', function() {
    assert.equal(threeFiveSum(10), 23);
  })
})

// REQUIREMENTS
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.