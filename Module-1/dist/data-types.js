"use strict";
//lets learn data types of ts :
// 1. string
let yourName = "polash"; //implict - ts compiler assume string type automatically
let myName = "polash"; //explicit  - manually written
// 2. number
let age = 20; //implict - ts compiler assume number type automatically
let myAge = 20; //explicit  - manually written
// 3. boolean
let isMarried = true; //implict - ts compiler assume boolean type automatically
let myIsMarried = true; //explicit  - manually written
// 4. array
let hobbies = ["sports", "music"]; //implict - ts compiler assume array type automatically
let myHobbies = ["sports", "music"]; //explicit  - manually written
// 5. tuple
let Person = ["polash", 20]; //implict - ts compiler assume tuple type automatically
let myPerson = ["polash", 20]; //explicit  - manually written
// 6. enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Gray; //implict - ts compiler assume enum type automatically 
