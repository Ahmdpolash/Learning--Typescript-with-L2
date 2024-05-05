// Reference type -- Object

let person: {
  company: "Google"; //literal type data , when creating a type manually its called literal type
  name: string;
  age?: number; // optional type ? that means  if not available this property then it will be undefined
  isMarried: boolean;
  address: string;
  readonly color: string;
} = {
  name: "John",
  color: "white",
  company: "Google",
  //   age: 30,
  isMarried: false,
  address: "dhaka",
};

// person.color = "black"; // its showing error cause we use readonly property instead of color proper
