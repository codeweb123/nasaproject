//return opposite num

function opposite(number) {
    if (number > 0){
      return -Math.abs(number)
      } else {
        return Math.abs(number) 
      }
    //your code here
  }

  //return str without first and last char

  function removeChar(str){
    return str.slice(1, -1)
    //You got this!
  };

  //filter out friend names that have 4 letters

  function friend(friends){
    return friends.filter(n => n.length === 4)
    //your code here
  }

  class String
  def toJadenCase
    self.split.map(capitalize).join(" ")
  end
end

function calcAverageHumanAge(ages) {
  let humanAge = ages.map(age => (age <= 2 ? age * 2:16 + age * 4))
  let adults = humanAge.filter(age => age >= 18)
  let averageAge = adults.reduce((acc, curr) => acc + curr, 0) / adults.length 
  return averageAge
  }

const avg1 = calcAverageHumanAge([5,2,4,1,15,8,3]) 
console.log(avg1)

// delete every nth occurance
function deleteNth(arr, n){
  new = []
  

}


//Sum of numbers given starting int and ending int
//use recursion to call function on ints
function getSum( a, b) {
  if(a == b) {
    return a 
  } else if (a < b) {
    return a + getSum(a +1, b)
  } else {
    return a + getSum(a-1, b)
  }
}
//example:
(1,3)

getSum(1,3)
1 + getSum(2,3)
 1 + 2 + getSum(3,3)
  1 + ( 2 + (3))

  

  function findNeedle(haystack) {
    // a place to store the index
    let index;
    //iterate over the array
    for (let i = 0; i < haystack.length; i++){
      
      const currentValue = haystack[i]
      if (currentValue === 'needle') {
        index = i
        break
      }
    }
    return `found the needle at position ${index}`
  }

