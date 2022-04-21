// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  function caesar(input, shift, encode = true) {
    // your solution code here
    if(!shift || shift < -25 || shift > 25 || shift === 0){
      return false;
    }
    if(!encode){
      shift = shift * -1;
    }
    input = input.toLowerCase();
    let finalMessage = "";
    for(let i = 0; i < input.length; i++){
      let letters = input[i];
     if(!alphabet.includes(letters)){
       finalMessage += letters;
     }
      for(let i = 0; i < alphabet.length; i++){
        if(alphabet[i] == letters){
          if(i + shift >= alphabet.length){
            finalMessage += alphabet[(i + shift) - alphabet.length]
          }
          else if(i + shift < 0){
            finalMessage += alphabet[26 + (i + shift)]
          }
          else{
            finalMessage += alphabet[i+shift];
          }
        }
      }
    }
    return finalMessage;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
