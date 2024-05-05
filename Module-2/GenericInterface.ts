//generics interface

interface Setup<T, M = null> {
  name: string;
  device: string;
  computer: {
    brand: string;
    model: string;
    ram: number;
  };
  monitor: T;
  mouse?: M;
}

type FirstMonitor = { brand: string; size: number };
type PoorMouse = { price: number; color: string };

const MySetup: Setup<FirstMonitor, PoorMouse> = {
  name: "polash",
  device: "laptop",
  computer: {
    brand: "hp",
    model: "pavilion",
    ram: 8,
  },
  monitor: {
    brand: "samsung",
    size: 15,
  },
  mouse: {
    price: 1000,
    color: "black",
  },
};

type MyMonitor = {
  brand: string;
  size: number;
  isBorder: boolean;
  isCurve: boolean;
};

type RichMouse = {
  price: number;
};

const RichSetup: Setup<MyMonitor, RichMouse> = {
  name: "polash",
  device: "laptop",
  computer: {
    brand: "hp",
    model: "pavilion",
    ram: 8,
  },
  monitor: {
    brand: "samsung",
    size: 15,
    isBorder: true,
    isCurve: true,
  },
  mouse: {
    price: 5000,
  },
};

//destructuring in ts
const {
  computer: { brand },
} = RichSetup;
