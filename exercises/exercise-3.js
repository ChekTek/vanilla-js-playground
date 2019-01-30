/** Javascript Exercise 3
 * 
 * Pet Store Search
 * The user would like to find the closes pet store available to them. allStores are stored as an array of x,y coordinates
 * total restaurants is size of all locations
 * total distance is x^2 +y^2
 * user location is 0,0
 * return numStores Stores closest to user as x,y coordinates
 * 
 * Create a function that takes an integer totalStores, and an array of arrays allStores, 
 * and an integer num restaurants. 
 */

const totalStores = 7;
const allStores = [
    [4, 8],
    [-2, 7],
    [9, -10],
    [1, 3],
    [-4, -4],
    [1, 3],
    [3, 1]
];
const numStores = 3;

let findStores = (totalStores, allStores, numStores) => {

    allStores.sort((a, b) => {
        return calcDistance(a[0], a[1]) - calcDistance(b[0], b[1])
    })

    const result = allStores.splice(0, numStores);

    return result;
}

let calcDistance = (x, y) => {
    return (x * x) + (y * y);
}

let result = findStores(totalStores, allStores, numStores);

console.log({
    result
});