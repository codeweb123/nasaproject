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
      
      const currVal = haystack[i]

      if (currVal === 'needle') {
        index = i
        break
      }
    }
    return `found the needle at position ${index}`
  }

  //.charAt(i) takes in index
  function getCount(str) {
    var vowelsCount = 0;
    for (let i = 0; i < str.length; i++) {
        if(str.charAt(i)=="a" || str.charAt(i)=="e" || str.charAt(i)=="i" || str.charAt(i)=="o" ||str.charAt(i)=="u") {
        vowelsCount++
      }
      }
    return vowelsCount;
  }

 //.replace() method on array and .split(".") 
 //splits at "," " " 
 function domainName(url){
  const noPrefix = url.replace("https://", "").replace("http://", "").replace("www.", "")
  const parts = noPrefix.split(".")
  return parts[0]
}


function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").join(" ")
}


function printerError(s) {
  let OK = "abcdefghijklm".split("")
  let count = 0
  
  s = s.split("")
    for (let i = 0; i < s.length; i++) {
      if(!OK.includes(s[i])) {
        count += 1; 
      }   
    }
  return (`${count}/${s.length}`)
}

function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

// reduce method
function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
 }

 function isValidWalk(walk) {
  let dx = 0
  let dy = 0
  let dt = walk.length

  for (let i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n': dy++; break
      case 's': dy--; break
      case 'w': dx--; break
      case 'e': dx++; break
    }
  }

  return dt === 10 && dx === 0 && dy === 0

  function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz"
      .split("").every(function(x){
        return string.indexOf(x) !== -1;
    });
  }

  let alpha = 'abcdefghijklmnopqrstuvwyz'
  string = string.toLowerCase()
  for (let i = 0; i < alpha.length; i++){
    if (string.indexOf(alpha.charAt(i)) === -1){
      return
    }
  }
//Algorithms
//naive string search

  function findMatch(long, short) {

    let count = 0
    
    for(var i = 0; i < long.length; i++){
      for(var j = 0; j < short.length; j++){
    
        if(short[j] !== long[i + j])
        break
        if(j === short.length - 1)
    
        count++
      }
    }
    return count
  }

  findMatch("lovie loled", "lol")

  //bubble sort- SWAPPING functionality
  function bubbleSort(arr){
    var noSwaps
    
    for(var i = arr.length; i > 0; i--){
      noSwaps = true

      for(var j = 0; j < i -1; j++){

        if(arr[j] > arr[j + 1]){

          var temp = arr[j];
          
          arr[j] = arr[j+1]
          arr[j + 1] = temp
          
          noSwaps = false
        }
      }
    }
  }

  //sort
  function compareByLen(str1, str2){
    return str2.length - str1.length;
  }
  ["Steele", "Colt"].sort(compareByLen)

  function numberCompare(num1 - num2){
    return num1 - num2;
  }
  [6,4,15,10].sort(numberCompare)

  //sort by numbers or empty array

  function solution(nums){
    return (nums || []).sort(function(num1, num2){
      return num1 - num2
    });
  }

  //Selection sort

  function selectionSort(arr){
    for(var i = 0; i < arr.length; i++){
      var lowest = i
      for(var j = i +1; j < arr.length; j++){
        if(arr[j] < arr[lowest]){
          lowest = j
        }
      }
      var temp = arr[i]
      arr[i] = arr[lowest]
      arr[lowest] = temp
      return arr 
    }
  }

  //merge sort- divide until single int and merge back sorted

  function mergeSort(arr){
    if(arr.length < = 1)
    return arr;
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right);
  }
  mergeSort([10, 24,76,73])

  //literally start at beginning and the 
  //next num place it where it needs to be inserted.
  function insertionSort(arr){
    for (var i = 1; i < arr.length; i++){
      var currentVal = arr[i]
      for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
        arr[j+1] = arr[j]
      }
      arr[j + 1] = currentVal;
      }
      return arr
    }
 }

 reverse(){
   let node = this.head;
   this.head = this.tail;
   this.tail = node;
   let next;
   let prev = null;
   
   for(let i = 0; i < this.length; i++){
     next = node.next;
     node.next = prev;
     prev = node;
     node = next;
   }
 }

 [5, 10, 60, 100]
 NODE
 //HEAD
 TAIL
 NODE


 //Hash Table
 function hash(key, arrayLen){
   let total = 0;
   for (let char of key) {
     let value = char.charCodeAt(0) - 96
     total = (total + value) % arrayLen;
   }
   return total;
 }

 class HashTable {
   constructor(size=53){
     this.keyMap = new Array(size);
   }

   _hash(key) {
     let total = 0;
     let WEIRD_PRIME = 31;
     for (let i = 0; i < Math.min(key.length, 100); i++){
       let char = key[i];
       let value = char.charCodeAt(0) - 96
       total = (total * WEIRD_PRIME + value) % this.keyMap.length;
     }
     return total;
   }

   set(key, value){
     let index = this._hash(key);
     if(!this.keyMap[index]){
       this.keyMap[index] = [];
     }
     this.keyMap[index].push([key, value]);
   }

   get(key){
    let index = this._hash(key);
    if(this.keyMap[index]){
      for(let i = 0; i < this.keyMap[index].length; i++){
        if(this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i]
        }
      }
    }
    return undefined;
   }
   keys(){
     let keysArr = [];
     for(let i = 0; i < this.keyMap.length; i++){
       if(this.keyMap[i]){
         for(let j = 0; j < this.keyMap[i].length; j++){
           if(!keysArr.includes(this.keyMap[i][j][0])){
             keysArr.push(this.keyMap[i][j][0])
           }
         }
       }
     }
     return keysArr;
   }
   values(){
     let valuesArr = [];
     for(let i = 0; i < this.keyMap.length; i++){
       if(this.keyMap[i]){
         for(let j = 0; j < this.keyMap[i].length; j++){
           if(!valuesArr.includes(this.keyMap[i][j][1])){
             valuesArr.push(this.keyMap[i][j][1])
           }
         }
       }
     }
     return valuesArr;
   }
 }

 let ht = new HashTable();
 ht.set("hello", "goodbye!!")
 ht.set("dogs", "are cool")

 //Codewars
 function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}

function likes(names) {
  if(names.length === 0) return "no one likes this";
  if(names.length === 1) return names[0] + " likes this";
  if(names.length === 2) return names[0] + " and " + names[1] + " like this";
  if(names.length === 3) return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
}

//Singly Linked List
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

//reverse a linked list
  reverse() {

    let node = this.head;
    this.head = this.tail;
    this.tail = node
    
    let next;
    let prev = null;
    
    for(var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev
      prev = node;
      node = next;
    }

    return this;
  
  }

T                   H
n     N                
0 -> 0 -> 0 -> 0 -> 0
p
//

function removeURLAnchor(url) {
  return url.split('#')[0];
}

//coupon code
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  //if enteredCode || correctCode are equal 
  if(enteredCode === correctCode){
    new Date(currentDate) <= (new Date(expirationDate))
    return true
  } else {
    return false 
  }
  //then check the dates for validity
  //coupon is valid 1 day after the expiration date 
}


function factorial(n){
  if (n === 0) 
    return 1
 
  if (n < 0 || n > 12) {
    throw new RangeError();
  } else {
    return n * factorial(n-1);
  }
}

// two sums
var twoSum = function(nums, target) {  
  let map = new Map();
  for(let i=0; i<nums.length; i++){
      map.set(nums[i], i);
  }
  for (let i=0; i < nums.length; i++){
      
      let compliment = target - nums[i];
      
      if (map.has(compliment)) {
          return [map.get(compliment), i]
      }
      map.set(nums[i], i);
  }
}

var isPalindrome = function(x) {
  return x === Number(x.toString().split("").reverse().join(""));
};




