// map type

const arr: number[] = [1, 2, 1];

const arrOfString: string[] = arr.map((number) => number.toString());

console.log(arrOfString);

type areaNumber = {
  height: number;
  width: number;
};

type x = areaNumber["height"]; //look up type

type areaString<T> = {
  [key in keyof T]: T[key];
};

const area: areaString<{ width: string; height: number }> = {
  width: "100",
  height: 100,
};
