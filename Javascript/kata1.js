/* Write a function that takes in a string of one or more words, 
and returns the same string, but with all five or more 
letter words reversed (like the name of this kata).

- Strings passed in will consist of only letters and spaces.
- Spaces will be included only when more than one word is present.*/

function spinWords(string){
    let word = "";
    arrayWords = string.split(" ");
    
    arrayWords.forEach(element => {
        if(element.length >= 5){
            element = element.split('').reverse().join('');
            console.log(element)
        }
        word += element + " ";
    });
    return word.trim();
}
//console.log(spinWords("Maldicion, va a ser un día hermoso"));

/*Usually when you buy something, you're asked whether your credit card number, phone number or answer 
to your most secret question is still correct. However, since someone could look over your shoulder, 
you don't want that shown on your screen. Instead, we mask it.
Your task is to write a function maskify, which changes all but the last four characters into '#'.*/


  // return masked string
function maskify(cc) {
  let mask = cc.split(''); 
  if (mask.length > 4){
      for (let i = 0; i < (mask.length -4); i++){
        mask[i] = '#'
      } 
  }
  return mask.join("");
}
//console.log(maskify('34961224'));

/*Your task is to make a function that can take any non-negative integer as an argument and return it with its digits
 in descending order. Essentially, rearrange the digits to create the highest possible number. */ 

function descendingOrder(n){


    if( n >= 0){
        return Number(n.toString().split('').sort((a, b) => b-a).join(""));
    }
    else{
        return "No es nu numero negativo";
    }  
}
//console.log(descendingOrder('5387419'));


/* In this little assignment you are given a string of space separated numbers,
   and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

function highAndLow(numbers){
    let arrayNumbers = numbers.split(" ");
    return Math.max(...arrayNumbers) + " " + Math.min(...arrayNumbers);
}

//console.log(highAndLow("5 9 2 2 0"));

/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arrayDiff(a, b) {
  b.forEach(element => {
      let idx = a.indexOf(element);
      while (idx != -1) {
          a.splice(idx, 1);
          idx = a.indexOf(element);
      };
  });
  return a;
}

//console.log(arrayDiff([1,2,5,4,2,1,3,1,2,6,1,5,6,2,3],[6,2,3]))

/* Most optimal solution:
  function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
}
*/


