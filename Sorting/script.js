//sorts in ascending order
function numberCompare(num1, num2) {
    return num1 - num2
}

[6,4,2,1,10,14].sort(numberCompare)

//sort by length 
function compareByLen(str1, str2) {
    return str2.length - str1.length
}

["Steele", "Colt"].sort(compareByLen)

//sorts alphabetically
const arr = ['a', 'b', 'x', 's', 'z', 'q', 'c']

arr.sort()