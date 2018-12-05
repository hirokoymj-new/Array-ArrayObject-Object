//Sort an array in alphabetical order for user's name
const data = [
  { description: 'Rent', amount: 100, createdAt: 1000 },
  { description: 'Coffee', amount: 300, createdAt: -1000 },
  { description: 'Small Coffee', amount: 300, createdAt: -1000 },
];


const result = data.filter((d)=> d.description.toLowerCase().indexOf('rent') !== -1);
console.log(result); //[ { description: 'Rent', amount: 100, createdAt: 1000 } ]