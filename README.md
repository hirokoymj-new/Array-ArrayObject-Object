# Array

# Array of Object

- JavaScript is **no associative array** so to use `Array of object` to make associative array.

### Iterators

| Iterator                                         | Return Value                                          | description                                               |
| ------------------------------------------------ | ----------------------------------------------------- | --------------------------------------------------------- |
| Array.forEach(value, index)                      | NO return values                                      |                                                           |
| Array.map(value, index)                          | Returns new array                                     | Creating a result for every array element.                |
| Array.filter(value, index)                       | Returns new array                                     | Creating a result that is only passed a test in callback. |
| Array.find()                                     | Returns the FIRST matched **VALUE** <br />(NOT array) |                                                           |
| Array.reduce((acc, currentVal) =>{}, initialVal) | Returns new array **OR** value                        |                                                           |

### Methods

| Function   | Syntax                 | Description                                                                               |
| ---------- | ---------------------- | ----------------------------------------------------------------------------------------- |
| Sort       | Array.sort()           |                                                                                           |
| Find Index | Array.indexOf('a')     | ALWAYS Compare with **-1**<br />`Array.indexOf('a') === -1` <br>`Array.indexOf('a') > -1` |
| Add        | Array.push()           | returns new length.                                                                       |
| Merge      | Array.concat()         | returns new array.<br> array1.concat(array2)                                              |
| Copy       | Array.slice(start,end) | The original array does **NOT modified**.                                                 |
| Delete     | Array.splice(index, 1) | The original array **changes**!                                                           |
| Find       | Array.find()           | Find a value of the first match.                                                          |
