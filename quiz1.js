const output = [
  {skill: "javascript", user: "Chad"},
  {skill: "javascript", user: "Bill"},
  {skill: "javascript", user: "Sue"}];

output.sort((a,b) => a.user > b.user ? -1 : 1);
console.log(output);