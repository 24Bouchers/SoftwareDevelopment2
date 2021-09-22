
var countB = function
    countB(beans){
        stringlength = (beans.length)
        numB = 0
        for(counter = 0; counter < stringlength; counter = counter + 1){
            if(beans.charAt(counter) == "B"){
                numB = numB + 1
            }
        }
        return numB
    }

var countChar = function
countB(word,letter){
    stringlength = (word.length)
    numC = 0
    for(counter = 0; counter < stringlength; counter = counter + 1){
        if(word.charAt(counter) == letter){
            numC = numC + 1
        }
    }
    return numC
}

console.log(countB("BBBBBB"))
console.log(countChar("Wiggles",'g'))

