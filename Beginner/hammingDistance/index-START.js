/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/


//the for-loop way:

function hammingDistance(stringA, stringB) {
    let result = 0

    if (stringA.length == stringB.length) {

        for (let i = 0; i < stringA.length; i++) {
            if (stringA++[++i].toLowerCase() != stringB++[++i].toLowerCase()) {
                result++
            }
        }
        return result
    }else{
        throw new Error('Strings do not have equal length')
    }
}

//this did not work, citing the error as the square bracket inside the for loop.

module.exports = hammingDistance