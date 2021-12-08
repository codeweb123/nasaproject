//Javascript Higher Order Array Methods
pets = [
  { name: "Bob", age: 4, yearBought: 1990, died: 1999 },
  { name: "Bill", age: 5, yearBought: 1984, died: 1988 },
  { name: "Sally", age: 1, yearBought: 1982, died: 1998 },
  { name: "Curt", age: 9, yearBought: 1983, died: 1998 },
  { name: "Ed", age: 6, yearBought: 1980, died: 1999 },
  { name: "Bo", age: 0, yearBought: 1981, died: 1995 },
];

const ages = [1, 2, 3, 5, 7, 8, 9, 6, 4, 3, 2, 3, 4, 5, 5, 4, 22];
const birthYear = [1980, 1981, 1999, 1951, 1952, 1982];

//for loop
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}
// forEach
pets.forEach((pet) => console.log(pet.name));

//filter creates NEW array
const buyPet = ages.filter((age) => age > 18);

const nameStartB = pets.filter((pet) => pet.name.indexOf("B") == 0);

//map method creates NEW ARRAY created
const testMap = pets.map((pet) => `${pet.name}`);

const agesSquare = ages.map((age) => Math.sqrt(age));

const ageMap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);

//sort
const sortedPets = pets.sort((a, b) => (a.yearBought < b.died ? 1 : -1));

const ages = [1, 2, 3, 5, 7, 8, 9, 6, 4, 3, 2, 3, 4, 5, 5, 4, 22];

const sortAges = ages.sort((a, b) => a - b);
