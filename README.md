# Array, Array of object

- JavaScript is **no associative array** so to use  `Array of object` to make associative array.

### Iterator for Array 

| Iterator | Returns | description
|---|---|---|
| Array.forEach(value, index) | Iterate only, no return. ||
| Array.map(value, index) | Returns new array | Creats result for every array element.|
| Array.filter(value, index) | Returns new array | Creat result for only pass a test in callback.|
| Array.reduce((acc, currentVal) =>{}, initialVal) | returns new array or value  ||


### Array methods

| Function  | Syntax  | Description | 
|---|---|---|
| Sort          |  Array.sort() | | 
| Find Index    |  Array.indexOf('a') | ALWAYS Compare with **-1**<br />`Array.indexOf('a') === -1` <br>`Array.indexOf('a') > -1` |
| Add an element     |  Array.push() | returns new length. |
| Merge two array     |  Array.concat() | returns new array.<br> array1.concat(array2) |
| Copy      |  Array.slice(start,end) | The original array does **NOT modified**.|
| Delete an element  | Array.splice(index, 1)  | The original array **changes**! |
| Find the value of the first match.  | Array.find() | |


<hr />

# Index
- [Array - Iterator](/Array-Iterator/Array-Iterator.md)
- [Array - Iterator - Quiz](/Array-Iterator/Array-Iterator_Quiz.md)
- [Array - Sort]()
- [Array - Sort - Quiz]()


