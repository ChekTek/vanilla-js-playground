/** Javascript Exercise 2
 * 
 * Create a function that takes an array of integers and calculates the greatest common denominator.
 * 
 * Example: [4,8,12,24]
 * Result: 4
 * 
 */

let testArray = [8, 16, 24, 12, 100, 104, 6]; //expected result 2

let calculateGreatestCommonDenominator = function (intArray) {
    let lowest = Math.min.apply(Math, intArray);
    let length = intArray.length;
    let denominators = [];
    let result = 1;

    for (let i = 2; i <= lowest; i++) {
        if (lowest % i == 0) denominators.push(i);
    }

    let numberOfDenoms = denominators.length;
    for (let i = numberOfDenoms - 1; i >= 0; i--) {
        for (let j = 0; j < length; j++) {
            let test = intArray[j];
            let denom = denominators[i];
            if (test % denom != 0) break;
            if (j == length - 1) result = denom;
        }
        if (result != 1) break;
    }

    return result;
}

let result = calculateGreatestCommonDenominator(testArray);

console.log({
    result
});