{
  // generics constraing using keyof operetor
  type studet = {
    name: string;

    address: string;
  };

  type Newstudent = "name" | "address"; //using unior operator

  type newStudent2 = keyof studet;
  const student1: newStudent2 = "address";

  //write a function that will take object and return key of object
  const user = {
    name: "student1",
    role: "administ",
  };
  const user2 = {
    name: "student1",
    role: "administ",
  };

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const result1 = getPropertyValue(user2, "role");
  console.log(result1);
}
