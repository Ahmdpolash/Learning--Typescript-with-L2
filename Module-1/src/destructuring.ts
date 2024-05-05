//destructuring

{
  const person = {
    name: "John",
    roll: 5,
    age: 25,
    address: {
      city: "New York",
      state: "NY",
    },
  };

  const {
    roll,
    address: { city },
  } = person;

  console.log(city);
}
