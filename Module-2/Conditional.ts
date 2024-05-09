//conditional type s

type a1 = number;
type b1 = undefined;

type res = a1 extends null ? true : false;
type res2 = a1 extends null ? true : b1 extends undefined ? undefined : any;

type sheikh = {
  bike: string;
  car: string;
};

type hasVehicle<T> = T extends keyof sheikh ? true : false;

type hasCard = hasVehicle<"car">;
