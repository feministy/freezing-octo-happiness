// SOLUTION
function fibonacciEvenSum(num) {
  var nums = fibonacci(num);
  nums = nums.filter(evenNum);
  return sum(nums);
}

function fibonacci(num) {
  var nums = [1, 2];
  while (nums[nums.length-1] < num) {
    var x = nums.pop();
    var y = nums.pop();
    var z = x + y;
    nums.push(y, x);
    if (z < num) { nums.push(z); }
  }
  return nums;
}

function evenNum(n) {
  return n % 2 === 0;
}

function sum(array) {
  return array.reduce(function(a, b) {
    return a + b;
  });
}

console.log(fibonacciEvenSum(4000000));

// TESTS
var should = require("should");

describe('fibonacci', function() {
  it('gets fibonacci numbers', function() {
    var arr = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
    fibonacci(90).should.eql(arr);
  })
})

describe('evenNum', function() {
  it('gets even numbers', function() {
    evenNum(2).should.be.true;
    evenNum(3).should.be.false;
  })
})

describe('sum', function() {
  it('adds up the array', function() {
    var arr = [1, 2, 3];
    sum(arr).should.eql(6);
  })
})

describe('fibonacciEvenSum', function() {
  it('works', function() {
    fibonacciEvenSum(90).should.eql(44);
  })
})

// REQUIREMENTS
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.