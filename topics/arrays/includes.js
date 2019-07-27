/** The problem */
let array = [
    [1, 2],
    [3, 4],
    [5, 6]
];

let value = [1, 2];

//This is false...
let result = array.includes(value);

/** The clean solution */
const containsPair = function (array, pair) {
    return array.some(elem => elem[0] == pair[0] && elem[1] == pair[1]);
}

result = containsPair(array, value);

console.log({
    result
})








/** Solution 1 @deprecated */
const containsPairOld = function (array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] == value[0] && array[i][1] == value[1])
            return true
    }
    return false;
}

//This is true...
result = containsPairOld(array, value);