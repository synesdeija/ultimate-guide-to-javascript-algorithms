/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function reverseString(text) {
    return text.split('').reverse().join('')
}

function reverseString(text) {
    return [...text].reverse().join('')
}

//chaining built-in methods way ES6

function reverseString(text) {
    let result = ''
    for (let i= text.length -1; i>=0; i--) {
        result += text[i]
    }
return result
}

//for loop way

function reverseString(text) {
    let result = ''
    for (let char of text) {
        result = char + result
    }
return result
}

//recursive way

function reverseString(text) {
    if (text === '') {
        return ''
    } else {
        return reverseString(text.substr(1)) + text[0]
    }

}

//.reduce() way

function reverseString(text){
    return text.split('').reduce((acc,char) => char + acc, '')
}


// and .reduce with spread operator:
function reverseString(text){
    return [...text].reduce((acc,char) => char + acc, '')
}

module.exports = reverseString