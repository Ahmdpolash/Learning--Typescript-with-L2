"use strict";
//Functions
//normal Functions
// arrow Functions
{
    function sum(x, y) {
        return x + y;
    }
    const multiply = (x, y) => x * y;
    // object -- functions -- methods
    const user = {
        name: "polash",
        balance: 0,
        deposit(amount) {
            return this.balance + amount;
        }, // this is called method
    };
    //mapping
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    const newArr = arr.map((item) => item + 1);
}
