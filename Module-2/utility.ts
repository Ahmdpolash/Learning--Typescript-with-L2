//utilities type

//pick

type obj = {
  name: string;
  age: number;
  home: number;
};

type newObj = Pick<obj, "name" | "home">; // PICK pick properties from object

type omitObj = Omit<obj, "home">; // OMIT -- remove the property from the object

type required = Required<obj>; // required all properties

type partial = Partial<obj>; // optional all properties

type ReadOnlyProps = Readonly<obj>; // cannot change those properties values

const NewPerson: ReadOnlyProps = {
  name: "NewPerson",
  age: 18,
  home: 8585,
};

type myObj = Record<string, string>;
const EmptyObj: Record<string, unknown> = {};

const MyObj1: myObj = {
  name: "polash",
  age: "19",
  home: "8585",
};
