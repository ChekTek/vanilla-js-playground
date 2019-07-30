/** Javascript Exercise 6
 * 
 * The inner trim problem
 * 
 * Create a function that takes a string and removes the spaces from within, but leaving the surrounding spaces.
 *
 * '  hello hello hello  ' -> '  hellohellohello  '
 * ' hello    world      ' -> ' helloworld      '
 * '   testy test test te' -> '   testytesttestte'
 * 
 */

 //there may be a way to do this slightly more efficiently with a more complicated regex, but this is easily understood
let innerTrim = (testString) => {
    let trimmed = testString.trim();
    let noSpaces = trimmed.replace(/ /g,'');
    let result = testString.replace(trimmed,noSpaces);
    return result;
}

console.log(innerTrim('  hello hello hello  '));
console.log(innerTrim(' hello    world      '));
console.log(innerTrim('   testy test test te'));
