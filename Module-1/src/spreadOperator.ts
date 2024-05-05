// spread operator
//rest operator
//distructuring
{
  const friends1: string[] = ["a", "b", "c"];
  const friends2: string[] = ["d", "e", "f"];

  friends2.push(...friends1);
  let AllFriends = [...friends1, ...friends2];

  // rest operator

  function sum(...sum: string[]) {
    return sum.forEach((summation: string) => console.log("hello", summation));
  }

  sum("abc", "def", "abcdef");
}
