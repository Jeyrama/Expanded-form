/*
You will be given a number and 
you will need to return it as a string in Expanded Form.

Example:
  12 --> "10 + 2"
  45 --> "40 + 2"
  70304 --> "70000 + 300 + 4"

NOTE: All numbers will be whole numbers greater than 0.
*/


// Solution

const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");

// or

function expandedForm(num) {
  let arr = num.toString().split('').reverse();
  let result = [];
  for(let i = 0; i < arr.length; i++){
    arr[i] == 0 ? result.push() : result.push(arr[i] + ('0'.repeat(i)))
  }
  return result.reverse().join(' + ')
} 