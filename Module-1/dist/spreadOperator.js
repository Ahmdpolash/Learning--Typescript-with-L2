"use strict";
// spread operator
//rest operator
//distructuring
{
    const friends1 = ["a", "b", "c"];
    const friends2 = ["d", "e", "f"];
    friends2.push(...friends1);
    let AllFriends = [...friends1, ...friends2];
    // rest operator
    function sum(...sum) {
        return sum.forEach((summation) => console.log("hello", summation));
    }
    sum("abc", "def", "abcdef");
}
