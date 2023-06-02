/*
    Recursive Sort

    Given an array of numbers, write a function that returns a new array of numbers sorted from lowest to highest.

    console.log(sort([])) // prints []
    console.log(sort([9])) // prints [9]
    console.log(sort([5, 4, 3, 2, 1])) // prints [1, 2, 3, 4, 5]
    console.log(sort([14, 5, 10, 6, 3, 4, 21, 16, 9])); // prints [ 3, 4, 5, 6, 9, 10, 14, 16, 21 ]
*/

function sort(nums) {
    if (nums.length <= 1) {
      return nums;
       // Base case: Return the array when it has 0 or 1 element
    }

    const pivot = nums[0];
    // Choose the first element as the pivot
    const lesser = [];
    // Array to hold elements smaller than the pivot
    const greater = [];
    // Array to hold elements greater than the pivot

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < pivot) {
        lesser.push(nums[i]);
        // Add smaller elements to the `lesser` array
      } else {
        greater.push(nums[i]);
        // Add greater elements to the `greater` array
      }
    }

    const sortedLesser = sort(lesser);
    // Recursively sort the `lesser` array
    const sortedGreater = sort(greater);
     // Recursively sort the `greater` array

    return sortedLesser.concat(pivot, sortedGreater);
    // Concatenate the sorted sub-arrays
  }
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = sort;
} catch (e) {
    module.exports = null;
}
