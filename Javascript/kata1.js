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