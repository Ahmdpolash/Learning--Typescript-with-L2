type Details = {
  name: string;
  age: number;
  address: string;
  phone: number;
  email: string;
};

const details: Details = {
  name: "polash",
  age: 19,
  address: "kathmandu",
  phone: 9841236547,
  email: "polash@gmail.com",
};

type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2): number => num1 + num2;
