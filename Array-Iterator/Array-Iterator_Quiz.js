console.log("1. Filter in which description has Rent");
const data = [
  { description: 'Rent', amount: 100, createdAt: 1000 },
  { description: 'Coffee', amount: 300, createdAt: -1000 },
  { description: 'Small Coffee', amount: 300, createdAt: -1000 },
];
const output = data.filter(d => d.description.toLowerCase().includes('rent'));
console.log(output);
console.log("==========");


console.log("2. Filter");
var employees = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];

// const output2 = employees.filter(employee => employee.skill === 'javascript');
// const output2Sort = output2.sort(compare);  
// console.log(output2);
// console.log(output2Sort);
// function compare(a, b) {
//   if (a.user < b.user) {
//     return -1;
//   }
//   if (a.user > b.user) {
//     return 1;
//   }
//   // a must be equal to b
//   return 0;
// }
//// Get data in which has skill has javascript.
const output2 = employees.filter(employee => employee.skill === 'javascript');
console.log(output2);
console.log("===============");

console.log("3. Sort in alphabetical order");
const output3 = employees.filter(employee => employee.skill === 'javascript')
  .sort((a,b)=>{
    return (a.user < b.user) ? -1 : 1; 
  });
console.log(output3);
console.log("===============");



console.log("4. Sort in descending order for user's name");
const output4 = employees.filter(employee => employee.skill === 'javascript')
  .sort((a,b)=>{
    return (a.user > b.user) ? -1 : 1; 
  });
console.log(output4);
console.log("===============");

/*
{skill: "javascript", user: "Sue"}
{skill: "javascript", user: "Chad"}
{skill: "javascript", user: "Bill"}
*/

