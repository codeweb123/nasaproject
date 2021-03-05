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
    self.split.map(&:capitalize).join(" ")
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