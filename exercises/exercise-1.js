/** Javascript Exercise 1
 * 
 * Create a function that takes in an array of 1's and 0's and a number of iterations, 
 * and returns an array that runs the following rules once per iteration.
 * 
 * number before and after the current number is same, then the current number should be 0
 * number before and after the current number is different, then the current number should be 1
 * the number before the array and after the array assume to be 0
 * test data        [1,0,1,1,0,1,0,0]
 * for iteration 1  [0,0,1,1,0,0,1,0]
 * for iteration 2  [0,1,1,1,1,1,0,1]
 * for iteration 3  [1,1,0,0,0,1,0,0]
 */

const testArray = [1, 0, 1, 1, 0, 1, 0, 0];
const testIterations = 3;

let myFunc = function (testArray, iterations) {

    if (iterations == 0) return testArray;

    let newArray = Array.from(testArray);
    let length = testArray.length;

    for (let i = 0; i < length; i++) {
        let previous = 0;
        let next = 0;
        if (i > 0) previous = testArray[i - 1];
        if (i != length - 1) next = testArray[i + 1];

        if (previous == next) newArray[i] = 0;
        else newArray[i] = 1;
    }

    return myFunc(newArray, iterations - 1);

}

let result = myFunc(testArray, testIterations);

console.log({
    result
});