// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;


    const realAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const inputArray = input.toLowerCase().split("");
    const inputAlphabet = alphabet.toLowerCase().split("");
    
    const uniqueChars = inputAlphabet.filter(
      (item, index, self) => self.indexOf(item) === index
    );
    if (uniqueChars.length !== alphabet.length) return false;

    const encodeMessage = () => {
      let result = [];
      const encode = (char) => {
        const charIndex = realAlphabet.indexOf(char);
        const encodedChar = inputAlphabet[charIndex];
        result.push(encodedChar);
      };
      inputArray.forEach((char) => {
        
        char === " " ? result.push(" ") : encode(char);
      });
      return result.join("");
    };

    const decodeMessage = () => {
      let result = [];
      const decode = (char) => {
        const charIndex = inputAlphabet.indexOf(char);
        const decodedChar = realAlphabet[charIndex];
        result.push(decodedChar);
      };
      inputArray.forEach((char) => {
        char === " " ? result.push(" ") : decode(char);
      });
      return result.join("");
    };

    return encode ? encodeMessage() : decodeMessage();
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };