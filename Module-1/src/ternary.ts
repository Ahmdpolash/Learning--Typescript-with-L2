// ternary operator || nullish coalescing operator || optional chaining

{
  let age: number = 18;

  if (age >= 18) {
    console.log("adult age");
  } else {
    console.log("not adult ");
  }

  const isAdult =
    age >= 18 ? console.log("adult age") : console.log("not adult ");

  //nullish coalescing operator
  const isMarried = null;
  const res = isMarried ?? console.log("married");

  //optional chaining

  type Person = {
    name: string;
    location: {
      city: string;
      state: string;
      roadway: string;
      house?: string;
    };
  };

  const person: Person = {
    name: "John",
    location: {
      city: "San Francisco",
      state: "San Francisco",
      roadway: "San Francisco",
    },
  };

  const permanent = person?.location?.house ?? "no house avaial";
}
