{
  //assertion
  let something: unknown;
  let another = something as string;

  //genetics type

  type GenType<T> = Array<T>;
  const GenValue: GenType<number> = [1, 2, 3, 4];

  function Random<T>(val: T): T {
    if (typeof val === "string") {
      console.log("this is a string");
    } else if (typeof val === "number") {
      console.log("this is a number");
    } else {
      console.log("nothing");
    }
    return val;
  }

  console.log(Random(null));

  // push new element on object using type and interface
  type obj = {
    name: string;
    age: number;
  };

  type newObj = obj & { color: string }; // using intersection operator

  interface obj2 {
    isActive: boolean;
    color: string;
  }

  //dynamci value assign with interface

  interface Emni<T> {
    name: string;
    address: T;
  }

  const EmniValue: Emni<{ age: number }> = {
    name: "polash",
    address: {
      age: 20,
    },
  };

  const emniFunction = <T>(arg: T): T[] => {
    return [arg];
  };

  const Concat = <T>(val1: T[], val2: T[]): T[] => {
    return { ...val1, ...val2 };
  };

  const num1: number[] = [1, 2, 3, 4, 5];
  const num2: number[] = [6, 7, 8, 9, 10];

  const concatination: number[] = Concat(num1, num2);
  console.log(concatination);
}
