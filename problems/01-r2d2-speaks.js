/*
    Write a function r2d2Speaks that takes in a series of 0s and 1s.
    The function should console.log a 'beep' for a 0 followed by a pause of 400 ms and a 'boop' for a 1 followed by 800 ms.

    let code = [0, 1, 1, 0];
    r2d2Speaks(code);
        print 'beep'
        pause for 400ms
        print 'boop'
        pause for 800ms
        print 'boop'
        pause for 800ms
        print 'beep'
        pause for 400ms
*/

function r2d2Speaks(code) {
    let index = 0;

    function speak() {
      if (index >= code.length) {
        return; // Exit the function when all elements are processed
      }

      if (code[index] === 0) {
        console.log('beep');
        setTimeout(speak, 400); // Pause for 400ms before proceeding
      } else if (code[index] === 1) {
        console.log('boop');
        setTimeout(speak, 800); // Pause for 800ms before proceeding
      }

      index++; // Move to the next element
    }

    speak(); // Start the speaking process
  }
let code = [0, 1, 1, 0];
r2d2Speaks(code);

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = r2d2Speaks;
} catch (e) {
    module.exports = null;
}
