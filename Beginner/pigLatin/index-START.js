/*
Translate the provided string to pig latin by following the rules below:
- For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g  
  - "pig" = "igpay"
- For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g  
  - "glove" = "oveglay"
-  For words that begin with vowel sounds, simply add "way" to the end of the word. E.g
  - "explain" = "explainway”
*/

//first: test if the first letter of the word is a consonant or a vowel.
    //if it's a vowel, easy! add 'way' to the end of the word.

    //if it's a consonant, though...we need to know whether the second letter is a vowel or a consonant that may form a cluster. like 'glove' => 'oveglay'
        //so we test the characters until we arrive at the first vowel, then we move those identified consonant(s) to the end of the word and then add 'ay'

// the imperative way (telling it how to complete your task, guiding it with steps):



function pigLatin(str) {
    // Convert string to lower case
    str = str.toLowerCase()
    // Initialize array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // Initialize vowel index to 0
    let vowelIndex = 0;

    if (vowels.includes(str[0])) {
        // If first letter is a vowel:
        return str + 'way';
    } else {
        // If the first letter is not a vowel:
      for (let char of str) {
        // Loop through until the first vowel is found
        if (vowels.includes(char)) {
            // Store the index at which the first vowel exists
            vowelIndex = str.indexOf(char);
            break;
        }
      }
      // Compose final string
      return str.slice(vowelIndex) + str.slice(0, vowelIndex) + 'ay';
    }
  }


// the declarative way (telling it to complete your task regardless of how it gets done):
  //we will combine .replace() with RegEx to transform the string

  function pigLatin(str) {
    return str
    .replace(/^([aeiouy])(._)/, '$1$2way')
    .replace(/^(_[_^aeiouy] + )(._)/, '$2$1ay')
  }
  

  //declarative approach SUCKS at 88% slower than iMPERATIVE. 
  module.exports = pigLatin;