// Receiving a sentence, a word in the sentence and a replacement for that word as arguments, perform a search and replace on the sentence using the arguments provided and return the new sentence. E.g

// searchReplace("He is Sleeping on the couch", "Sleeping", "sitting") 
// should return "He is Sitting on the couch"

// Note: Make sure to match the casing(capitalization) of the string to be replaced as shown above.


// the .replace() way:
function searchReplace(str, word, newWord) {
    if ( word[0] === word[0].toUpperCase() ) {
        newWord = newWord[0].toUpperCase() + newWord.slice(1)
    }
    return str.replace(word, newWord)
}

// the RegEx way:

function searchReplace(str, word, newWord){
    let regex = new RegExp(word, 'gi');
    if (/[A-Z]/.test(word[0])) {
        newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
    }
    return str.replace(regex, newWord)
}

//there are no tests to run on this module. the results on the tutorial state: 'From the result, we notice that the faster solution is the first approach where we simply replace the word 
// using **.replace()** ,
// while the regular expression method is approximately 72% slower.'