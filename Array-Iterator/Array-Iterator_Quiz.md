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





