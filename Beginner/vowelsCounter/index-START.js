/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

//an iterative approach to counting the number of vowels in a string of text:

const Vowels = ["a", "e", "i", "o", "u"]

function vowelsCounter(text) {
    //initialize counter
    let counter = 0;
    // loop thru text to test if each character is a vowel

    for (let letter of text.toLowerCase()) {
        if (vowelsCounter.includes(letter)) {
            counter++
        }
    }
    //return number of vowels
    return counter
}


// using RegEx to count the vowels:

function vowelsCounter(text) {
    //search the text with RegEx and store all matching instances:

    let matchingInstances = text.match(/[aeiou]/gi);

    //check if matching instances exist, then calculate again!

    if(matchingInstances) {
        //return number of vowels:
        return matchingInstances.length
    
    } else {
        return 0
    }
}

//RegEx method is 88% faster than iterating!


module.exports = vowelsCounter;
