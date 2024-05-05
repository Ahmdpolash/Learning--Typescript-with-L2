{
  // Generics: কোনো function, type alias, interface, class ইত্যাদিতে টাইপ ডিফাইন করার সময় কোনো টাইপকে explicitly ডিফাইন না করে টাইপকে ভ্যারিয়েবল আকারে রিসিভ করে function, type alias, interface, class ইত্যাদি ডিফাইন করাকে Generics বলে। extends কীওয়ার্ড দ্বারা Generics এ ব্যবহৃত টাইপ ভ্যারিয়েবলে কিছু বাধ্যবাধকতা বা শর্তারোপ করা যায়।

  //genercis vs interface

  //generics type

  //   type GenericsArray = Array<string>;
  //lets type dynamically generate
  type GenericsArray<T> = Array<T>;

  //const newNumber:number[] = [1,2,3,4,5,6,7]
  const newNumber: Array<number> = [1, 2, 3, 4, 5];

  //const newNumber:string[] = ["polash", "polash"];
  const newStrWord: GenericsArray<string> = ["polash", "polash"];

  //   const boolType: boolean[] = [true, false];
  //   const boolType: Array<boolean> = [true, false];
  const boolType: GenericsArray<boolean> = [true, false];

  //making array of object using generics

  const person: GenericsArray<{ name: string; age: number; role?: string }> = [
    {
      name: "polash",
      age: 20,
    },
    {
      name: "polash",
      age: 19,
      role: "manager",
    },
  ];

  //making Tuple  using generics

  //   type GenericsTuple<X, Y> = [X, Y];

  //   const genTuple: GenericsTuple<string, string> = ["hello", "world"];

  //   const userWithId: GenericsTuple<string, { name: string }> = [
  //     "hello",
  //     { name: "world" },
  //     ];

  type GenericsTuple<X, Y, Z> = [X, Y, Z];

  const reverseTuple = <T extends GenericsTuple<any, any, any>>(
    tuple: T
  ): T => {
    const reversedTuple: T[0][] = [];

    for (let i = tuple.length - 1; i >= 0; i--) {
      reversedTuple.push(tuple[i]);
    }

    return reversedTuple as T;
  };

  const tupleWithThreeElements: GenericsTuple<string, number, boolean> = [
    "hello",
    123,
    true,
  ];
  const reversedTuple = reverseTuple(tupleWithThreeElements);

  console.log(reversedTuple); // Output: [true, 123, "hello"]
}
