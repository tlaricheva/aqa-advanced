const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

person.email = "john.doe@example.com";

delete person.age;

console.log(person);
