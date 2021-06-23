//Maps
//Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
//Methods and properties are:

//new Map() – creates the map.
//map.set(key, value) – stores the value by the key.
//map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
//map.has(key) – returns true if the key exists, false otherwise.
//map.delete(key) – removes the value by the key.
//map.clear() – removes everything from the map.
//map.size – returns the current element count.

//Two Sum
[2, 1, 5, 3] Target = 4

var twoSum = function(nums, target) {
    let map = new Map();

    for(let i=0; i<nums.length; i++){
        if(map.has(target-nums[i])){
            return [map.get(target-nums[i]),i]
        }
        map.set(nums[i],i)
    }
};

[1,2,4,7] target = 3

//Roman numerals

baseRoman = (c) => {
    if(c=='I') return 1;
    if(c=='V') return 5;
    if(c=='X') return 10;
    if(c=='L') return 50;
    if(c=='C') return 100;
    if(c=='D') return 500;
    if(c=='M') return 1000;
}

romanToInt = (s) => {
    let res = 0
    let len = s.length
    for(let i = 0; i < len; i++)
        {
            if(baseRoman(s[i])<baseRoman(s[i+1]) )
            {
                let temp = baseRoman(s[i+1]) - baseRoman(s[i])
                res+=temp
                i++
            }
            else{
                res+=baseRoman(s[i])
            }
        }
        return res;
}


var longestCommonPrefix = function(strs) {
    let result = ""
    
    for(let i = 0; i <= strs[0].length - 1; i++){
    	const baseChar = strs[0][i]
      
      for(let j = 0; j < strs.length; j++){
        const comparedChar = strs[j][i]
               
        if(baseChar !== comparedChar){
        	return result
        }
      }
      
      result += baseChar
		}
    
    return result
};











