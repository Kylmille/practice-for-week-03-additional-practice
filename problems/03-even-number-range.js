/* Even Number Range

    Write a function that accepts two numbers.
    The function should return an array of all even numbers between the two arguments inclusively.

    console.log(evenNumberRange(-3, 2)); // prints [-2, 0, 2]
    console.log(evenNumberRange(22, 25)); // prints [22, 24]
    console.log(evenNumberRange(2, 0)); // prints []
*/
function evenNumberRange(num1, num2) {
    const range = [];
    // Create an empty array to store even numbers

    if (num1 > num2) {
      return range;
      // Return an empty array if num1 is greater than num2
    }

    const start = num1;
     // Assign the smaller number to start
    const end = num2;
     // Assign the larger number to end

    // Iterate from start to end (inclusive)
    for (let i = start; i <= end; i++) {
      if (i % 2 === 0) {
        range.push(i);
        // Add even numbers to the range array
      }
    }

    return range;
     // Return the array of even numbers within the specified range
  }
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = evenNumberRange;
} catch (e) {
    module.exports = null;
}
