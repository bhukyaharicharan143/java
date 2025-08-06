

const names = ["hari", "ram", "shyam", "siri"]

const people = [
  {
    name: "hari",
    age: 20,
    isEmployee: true,
    "hobbies" :["jelly", "cricket", "reading"]
  },
  {
    name: "ram",
    age: 40,
    isEmployee: false,
    
  },
  {
    name: "shyam",
    age: 50,
    isEmployee: true,

  },
  {
    name: "siri",
    age: 36,
    isEmployee: false
  }
];


people.forEach(person => {
  console.log(`Name: ${person.name}, Age: ${person.age}, Employee: ${person.isEmployee}`);
});
const jsonstring =JSON.stringify(people);
console.log(jsonstring) ;