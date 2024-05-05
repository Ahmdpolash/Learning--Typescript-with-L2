//function with genetics
{
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGenetics = <T>(param: T): T[] => {
    return [param];
  };

  const result = createArray("hello");
  const result2 = createArrayWithGenetics<boolean>(true);
  const result3 = createArrayWithGenetics<{
    id: number;
    name: string;
  }>({ id: 1, name: "world" });

  const crateGenericWithTuple = <T, P>(param1: T, param2: P): [T, P] => {
    return [param1, param2];
  };

  const anotherResult = crateGenericWithTuple<string, boolean>("hello", true);

  const Course = <T>(arg: T) => {
    const name = "next level development";
    return {
      ...arg,
      name,
    };
  };

  const st1 = Course<{ name: string }>({
    name: "poalash",
  });




  
}
