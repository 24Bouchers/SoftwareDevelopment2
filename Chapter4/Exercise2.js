numarray = []
var reverseArray = function
    reverseArray(numarray){
        newArray = []
        arraySize = numarray.length
        for(i = 0; (i < arraySize); i = i + 1){
        newArray[i] = numarray[arraySize-1-i]
    }
    return newArray
}
var reverseArrayinPlace = function
    reverseArrayinPlace(numarray){
        ogSize = numarray.length
        for(i = 0; (i < arraySize); i = i + 1){
           
        numarray.push(numarray[arraySize-1-i])
        }
        for(i = 0; (i < ogSize); i = i + 1){
            numarray.shift(i)
        }
        return numarray
    }
    numarray = [1,2,3,4,5,6]
    console.log(reverseArray(numarray))
    console.log(reverseArrayinPlace(numarray))