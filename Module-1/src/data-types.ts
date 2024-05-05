//lets learn data types of ts :

// 1. string

let yourName = "polash"; //implict - ts compiler assume string type automatically
let myName: string = "polash"; //explicit  - manually written

// 2. number

let age = 20; //implict - ts compiler assume number type automatically
let myAge: number = 20; //explicit  - manually written

// 3. boolean

let isMarried = true; //implict - ts compiler assume boolean type automatically
let myIsMarried: boolean = true; //explicit  - manually written

// 4. array

let hobbies = ["sports", "music"]; //implict - ts compiler assume array type automatically
let myHobbies: string[] = ["sports", "music"]; //explicit  - manually written

// 5. tuple

let Person: [string, number] = ["polash", 20]; //implict - ts compiler assume tuple type automatically
let myPerson: [string, number] = ["polash", 20]; //explicit  - manually written

// 6. enum

enum Color {
  Gray,
  Green,
  Blue,
}

let myColor: Color = Color.Gray; //implict - ts compiler assume enum type automatically 