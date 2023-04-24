/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    return nums.reduce(function(accumulator, currentValue) {
      return fn(accumulator, currentValue);
    }, init);
  };
  
console.log(reduce([1,2,3,4], function sum(accum, curr){return accum + curr;}, 0));