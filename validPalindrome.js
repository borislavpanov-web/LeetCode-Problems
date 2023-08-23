/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let newArr = s.split('');
    let f = newArr.reverse().join('');
    return s === f || f === "";
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("")); // true
console.log(isPalindrome("0P")); // false
console.log(isPalindrome("ab_a")); // true