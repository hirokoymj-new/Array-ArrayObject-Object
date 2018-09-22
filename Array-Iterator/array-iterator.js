console.log('===1===');
// [Array] - forEach
// Syntax: Array.forEach(value, index)
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.forEach((e)=>{
  console.log(e);
})

console.log('===2===');
// [Array of object] - forEach
// Syntax: array.forEach(value, index)
var employees = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];
employees.forEach((e)=>{
  console.log("Skill:",e.skill);
  console.log("User:", e.user);
})

console.log('===3===');
// [Array] - map
// evaluate every element
const array1 = [1, 4, 9, 16];
const output1 = array1.map( element => element < 5);
console.log(output1); //[ true, true, false, false ]

const output2 = array1.filter(element => element > 5);
console.log(output2); //[9,16]


console.log('===4===');
// [Array of object] - map
// Find the value color=green and print index number.
var myArray = [
	{'color':'red', 'name': 'redName'},
	{'color':'blue', 'name': 'blueName'},
	{'color':'green', 'name': 'greenName'},
	{'color':'yellow', 'name': 'yellowName'}
];

const colors = myArray.map( obj => obj.color);
console.log(colors); //[ 'red', 'blue', 'green', 'yellow' ]
let blueIndex = colors.indexOf('blue');
console.log(blueIndex); //1


let greenIndex = myArray.map(obj => obj.color).indexOf('green');
console.log(greenIndex); //2


console.log('===5===');
// Array.sort
// The default sort order is according to string Unicode code points.

