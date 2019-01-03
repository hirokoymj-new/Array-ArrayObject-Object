# Quiz - Array Iterator

**Q1: Get an array in which desciption has 'Rent'**
```js
const data = [
  { description: 'Rent', amount: 100, createdAt: 1000 },
  { description: 'Coffee', amount: 300, createdAt: -1000 },
  { description: 'Small Coffee', amount: 300, createdAt: -1000 },
];
```

**Q1: Answer**
```js
const result = data.filter((d)=> d.description.toLowerCase().indexOf('rent') !== -1);
console.log(result);
//[ { description: 'Rent', amount: 100, createdAt: 1000 } ]
```
<hr />


**Q2: Create array in which has skill has 'javascript'**.
```js
var employees = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];
```

**Q2: Answer**
```js
const output2 = employees.filter(employee => employee.skill === 'javascript');
/*
[ { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'javascript', user: 'Sue' } ]
*/ 
```
<hr />

**Q3: Find `color=green` in myArray and print the number of index.**
```js
var myArray = [
	{'color':'red', 'name': 'redName'},
	{'color':'blue', 'name': 'blueName'},
	{'color':'green', 'name': 'greenName'},
	{'color':'yellow', 'name': 'yellowName'}
];
```

**Q3:Answer**

```js
var myArray = [
	{'color':'red', 'name': 'redName'},
	{'color':'blue', 'name': 'blueName'},
	{'color':'green', 'name': 'greenName'},
	{'color':'yellow', 'name': 'yellowName'}
];

let greenIndex = myArray.map(obj => obj.color).indexOf('green');
console.log(greenIndex); //2
```


**Q4: Create pagination**
```js
const data = [0,1,2,3,4,5,6,7,8,9]; //len 10
let pageSize = 3;
// Page-1: [ 0, 1, 2 ]
// Page-2: [ 3, 4, 5 ]
// Page-3: [ 6, 7, 8 ]
// Page-4: [ 9 ]
```

**Q4: Answer**
POINT

- The quotient for division returns float. So to be interger, it must use Math.floor();
  ```js
  1/2   // returns 0.5 in JavaScript
  ```

- The max page number is calculated with data length and page size.
- Use array.slice() because slice() does NOT modify the original array! 

```js
const data = [0,1,2,3,4,5,6,7,8,9]; //len 10
let pageSize = 3;
let max = Math.floor(data.length/3)+ data.length%3;

for(let i=0; i<max; i++){
  let begin = i*pageSize;
  let end = begin + pageSize;
  //console.log(`${begin}, ${end}`);
  console.log(data.slice(begin, end))
}
```


**Q5: How to check if array is empty**
```js
const data = [];
```
**Q5: How to check if array is empty**
```js
data.length === 0
```

**Q6: How to check if Object is empty**
```js
const data = {}
```
**Q6: How to check if Object is empty**
```js
Object.keys(obj).length === 0
```