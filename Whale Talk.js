//Whate Talk.
const input = 'turpentine and turtles';
const vowels = ['a','e','i','o','u'];
let resultArray = [];
//loop to iterate through each letter of the input variable text
for(let inputIndex = 0; inputIndex < input.length; inputIndex ++){
// console.log('i is ' + inputIndex);
//Create a nested for loop inside of the for loop you just wrote.the inner loop iterate through the vowels array each time the outer loop runs.  
for(let vowel = 0; vowel < vowels.length; vowel++ ){
//code block that compares the input letter to every letter in the vowels array.
  if(input[inputIndex] === vowels[vowel]){ 
//if statement that checks if each letter in the input string is equal to 'e'. If so, .push() input[i] to the resultArray.
     if(input[inputIndex] === 'e'){
         resultArray.push('ee')
     }
//double the letter uRe-create the if statement, but modify it so it pushes the letter u a second time.
      else if(input[inputIndex] === 'u'){
      resultArray.push('uu');  
      }
      else {
         resultArray.push(input[inputIndex]);        }
    }
  }
}

console.log(resultArray.join('').toUpperCase());