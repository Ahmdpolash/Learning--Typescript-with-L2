// type assertions
// Type Assertion: যখন কোনো ভ্যারিয়েবলের টাইপ সম্পর্কে TypeScript এর কাছে পর্যাপ্ত তথ্য থাকে না এবং ডেভেলপার TypeScript কে forcefully ভ্যারিয়েবলের কোনো একটা নির্দিষ্ট টাইপ ধরে নিতে বলে তখন তাকে Type Assertion বলে।

//ts provide two ways to define type assertions`
// using angle brackets <>
//using as keyword

let userInput: unknown;

let userName = userInput as number;

let anything: any;

anything.type = "string";

let result = anything as number;

interface Student {
  name: string;
  age: number;
}

let student = <Student>{
  name: "polash",
  age: 20,
};

let code = "dd";

let students = code as string;
