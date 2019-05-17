//Arrays.
const input = 'turpentine and turtles';
const vowels = ['a','e','i','o','u'];
let resultArray = [];
//loop to iterate through each letter of the input variable text.
for(let inputIndex = 0; inputIndex < input.length; inputIndex ++){
// console.log('i is ' + inputIndex);
  
//Nested for loop inside of the for loop previous created. Make the inner loop iterate through the vowels array each time the outer loop runs.   
for(let vowel = 0; vowel < vowels.length; vowel++ ){
  if(input[inputIndex] === vowels[vowel]){ 
     if(input[inputIndex] === 'e'){
         resultArray.push('ee')
     }
      else if(input[inputIndex] === 'u'){
      resultArray.push('uu');  
      }
      else {
         resultArray.push(input[inputIndex]);        }
    }
  }
}

console.log(resultArray.join('').toUpperCase());
