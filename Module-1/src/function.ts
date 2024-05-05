//Functions
//normal Functions
// arrow Functions
{
  function sum(x: number, y: number): number {
    return x + y;
  }

  const multiply = (x: number, y: number): number => x * y;

  // object -- functions -- methods

  const user = {
    name: "polash",
    balance: 0,
    deposit(amount: number): number {      
      return this.balance + amount;
    }, // this is called method
  };

  //mapping

  const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  const newArr: number[] = arr.map((item: number): number => item + 1);
}
