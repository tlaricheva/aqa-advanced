const users = [
  { name: "Анна", email: "ann28@example.com", age: 25 },
  { name: "Олег", email: "oleg1981@example.com", age: 30 },
  { name: "Марія", email: "maria2001@example.com", age: 22 },
];

for (const { name, email, age } of users) {
  console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}
