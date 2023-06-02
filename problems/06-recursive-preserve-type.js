/***********************************************************************
Write a recursive function `recursivePreserveType` which takes in an array of elements
that could be of any type and returns a function. The return function should
accept one string that could be any of the following types:

- 'object'
- 'number'
- 'string'
- 'boolean'
- 'undefined'

The return function should return a copy of the input array with only elements of the
specified type. Note that the returned function only filters elements of one type,
as opposed to the last problem which accepted any number of strings.

const preserveFunc = recursivePreserveType([1, 'one', 2, 'two', 3, 'three']);
console.log(preserveFunc('number')); // prints [1, 2, 3]
console.log(preserveFunc('string')); // prints ['one', 'two', 'three']

const preserveFunc2 = recursivePreserveType([2, undefined, 'world', { color: 'red' }, true, 3, [4, 5], 'hello', false]);
console.log(preserveFunc2('number')); // prints [2, 3]
console.log(preserveFunc2('object')); // prints [ { color: 'red' }, [4, 5] ]
console.log(preserveFunc2('boolean')); // prints [ true, false ]

Note: the mocha tests do not test that your solution is implemented recursively.
However, for bonus points try to solve it both with recursion and iteration.
*/
function recursivePreserveType(array) {
    // Return a function that filters the input array by the specified type
    return function(type) {
      // Helper function to recursively filter the array by type
      function filterByType(arr, t) {
        // Base case: Check if the array is empty
        if (arr.length === 0) {
          return [];
        }

        // Recursive case: Destructure the array into the first element and the rest of the elements
        const [first, ...rest] = arr;

        // Check type match: If the type of the first element matches the specified type
        if (typeof first === t) {
          // Return an array with the first element followed by the result of recursively filtering the rest of the array
          return [first, ...filterByType(rest, t)];
        }

        // Type mismatch: Return the result of recursively filtering the rest of the array
        return filterByType(rest, t);
      }

      // Invoke the filterByType helper function with the input array and the specified type
      return filterByType(array, type);
    };
  }


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = recursivePreserveType;
} catch (e) {
    module.exports = null;
}
