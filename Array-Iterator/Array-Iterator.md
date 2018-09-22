# Array - Iterator

## Array.forEach

**Array**
```js
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.forEach((e)=>{
  console.log(e);
})
```

**Array of object**
```js
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
```
<hr />

## Array.map vs Array.filter - what difference?
- Array.map is to create the result for every elements
- Array.fillter is to creaet the result only pass a test in callback function.

```js
const array1 = [1, 4, 9, 16];
const output1 = array1.map( element => element < 5);
console.log(output1); //[ true, true, false, false ]

const output2 = array1.filter(element => element > 5);
console.log(output2); //[9,16]
```

<hr />

## Array.map for array of object
```js
var myArray = [
	{'color':'red', 'name': 'redName'},
	{'color':'blue', 'name': 'blueName'},
	{'color':'green', 'name': 'greenName'},
	{'color':'yellow', 'name': 'yellowName'}
];

const colors = myArray.map( obj => obj.color);
console.log(colors); //[ 'red', 'blue', 'green', 'yellow' ]
```

**Q: Find color=blue in myArray and print the index number**

```js
let greenIndex = myArray.map(obj => obj.color).indexOf('green');
console.log(greenIndex); //2
```

<hr />




### References:
- https://medium.com/@c.mansour/the-difference-between-the-filter-and-map-array-methods-in-javascript-f8164f65fa5e