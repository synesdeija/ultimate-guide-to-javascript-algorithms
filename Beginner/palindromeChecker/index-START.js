/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/



//'the intuitive approach' or the direct approach:

function palindromeChecker(text) {
    let reversedText = text.toLowerCase()
        .split('').reverse().join('')

    return text === reversedText 
}
//this direct equals returns a Boolean. it returns only whether or not reversedText is a palindrome.


//-----------------------------

//looping through and comparing characters. 

function palindromeChecker(text){
    let charArray = text.toLowerCase().split('')

    let result = charArray.every((letter, index) => {
        return letter === charArray[charArray.length - index - 1];
    })
    return result
}


//looping through and comparing characters (optimized) way (to fix the issue of the function above, where it does not stop looping through the array and hence repeats, wasting resources):
//the 'fix'
function palindromeChecker(text){
    let textLen = text.length;
    for (let i = 0; i < textLen/2; i++) {
        if (text[i] !== text[textLen - 1 - i]){
            return false;
        }
    }
    return true;

}
 

//the 'fixed' loop is the fastest. unfixed loop is 2nd, and intuitive way is slowest.

module.exports = palindromeChecker;