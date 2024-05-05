//union type

type GentleMan = "Polash" | "Ahmed";

let newGentleMan: GentleMan = "Ahmed";

type Patient = {
  name: string;
  age: number;
  email?: string;
  location: "dhaka" | "kurigram";
};

let newPatient: Patient = {
  name: "polash",
  age: 20,
  location: "dhaka",
};

// intersection type

type Person1 = {
  name: string[];
  age: number;
  skills: string;
};
type Person2 = {
  name: string[];
  age: number;
  skills: string;
  color: string;
};

type fullPerson = Person1 & Person2;

let newPerson: fullPerson = {
  name: ["polash", "akash"],
  age: 20,
  skills: "ss",
  color: "red",
};
