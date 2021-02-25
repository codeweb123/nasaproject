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
  
  