// Interface: Interface হলো Type Alias এর মতোই টাইপ ডিফাইন করার একটি পদ্ধতি যেটার মাধ্যমে শুধুমাত্র non primitive Type এর স্ট্রাকচার ডিফাইন করা হয়।

// Interface vs Type Alias: Interface দ্বারা শুধুমাত্র non primitive টাইপ ডিফাইন করা যায় আর Type Alias দ্বারা primitive এবং non primitive উভয় ধরণের টাইপ ডিফাইন করা যায়। Interface কে এক্সটেন্ড করতে হয় extends keyword দ্বারা। অপরদিকে Type Alias কে এক্সটেন্ড করতে হয় ‘&’ অপারেটর দ্বারা।

//type

{
  //object
  type User1 = {
    name: string;
    roll: number;
  };

  interface User2 {
    name: string;
    roll: number;
  }

  type userWithRole = User1 & { role: string };

  interface userWithRole2 extends User2 {
    role: string;
    house: string;
  }

  const user: userWithRole2 = {
    name: "poalsh",
    roll: 15,
    role: "manager",
    house: "hh",
  };

  //? array

  type Number = number[];
  interface Number2 {
    [index: number]: number;
  }

  const number: Number = [1, 2, 3, 4, 5, 6, 7, 8];
}
