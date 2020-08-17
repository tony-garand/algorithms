// Given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
// Return the shuffled string.

// Example
// Input: s = "tac", indices = [2,1,0]
// Output: "cat"


const restoreString = (s, indices, str = []) => {   
  // declared array 'str'
  for (let i in s) str[indices[i]] = s[i];   // map the s string to the indices array in the str array with for(let in) ie: 
  // [ 'c', 'a', 't' ]
  return str.join(''); // join str and return it 
};
