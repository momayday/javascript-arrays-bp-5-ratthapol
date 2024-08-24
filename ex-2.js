const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];
// Start coding here
let alex = employees
console.log(employees[1].name)
let alexHobbies = employees
console.log(employees[1].hobbies)
let alexAge = employees[0].age
let jameAge = employees[1].age
let alexAndJamesAge = alexAge + jameAge
console.log(alexAndJamesAge)
