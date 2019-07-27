/** Javascript Exercise 5
 * 
 * The anagram problem
 * 
 * Create a function that takes in two strings and determines if they are anagrams of each other.
 *
 * ('hello', 'hlleo') true
 * ('tab', 'atb') true
 * ('xyz', 'tuv') false
 * ('abc','abcd') false
 * 
 */

let areAnagrams = (string1,string2) => {
    let sorted1 = Array.from(string1).sort(); //we could pass in how we would like to sort them,
    let sorted2 = Array.from(string2).sort(); // but the javascript default is fine because we dont really care 
    return sorted1.toString() === sorted2.toString();
}

console.log(areAnagrams('hello','hlleo'));
console.log(areAnagrams('xyz','hlleo'));
console.log(areAnagrams('tab','atb'));