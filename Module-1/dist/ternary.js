"use strict";
// ternary operator || nullish coalescing operator || optional chaining
var _a, _b;
{
    let age = 18;
    if (age >= 18) {
        console.log("adult age");
    }
    else {
        console.log("not adult ");
    }
    const isAdult = age >= 18 ? console.log("adult age") : console.log("not adult ");
    //nullish coalescing operator
    const isMarried = null;
    const res = isMarried !== null && isMarried !== void 0 ? isMarried : console.log("married");
    const person = {
        name: "John",
        location: {
            city: "San Francisco",
            state: "San Francisco",
            roadway: "San Francisco",
        },
    };
    const permanent = (_b = (_a = person === null || person === void 0 ? void 0 : person.location) === null || _a === void 0 ? void 0 : _a.house) !== null && _b !== void 0 ? _b : "no house avaial";
}
