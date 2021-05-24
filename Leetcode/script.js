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








