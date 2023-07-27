/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let neededLetters = ransomNote.split('');
    let availableLetters = magazine.split('');
    for (let i = 0; i < neededLetters.length; i++) {
        if (availableLetters.includes(neededLetters[i])) {
            let index = availableLetters.indexOf(neededLetters[i]);
            availableLetters.splice(index, 1)
            neededLetters.splice(i, 1);
            i=-1
        }
    }
    return neededLetters.length === 0;
};


console.log(canConstruct('a', 'b'))