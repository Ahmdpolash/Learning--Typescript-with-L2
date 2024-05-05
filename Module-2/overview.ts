// Type Assertion: যখন কোনো ভ্যারিয়েবলের টাইপ সম্পর্কে TypeScript এর কাছে পর্যাপ্ত তথ্য থাকে না এবং ডেভেলপার TypeScript কে forcefully ভ্যারিয়েবলের কোনো একটা নির্দিষ্ট টাইপ ধরে নিতে বলে তখন তাকে Type Assertion বলে।

// Interface: Interface হলো Type Alias এর মতোই টাইপ ডিফাইন করার একটি পদ্ধতি যেটার মাধ্যমে শুধুমাত্র non primitive Type এর স্ট্রাকচার ডিফাইন করা হয়।

// Interface vs Type Alias: Interface দ্বারা শুধুমাত্র non primitive টাইপ ডিফাইন করা যায় আর Type Alias দ্বারা primitive এবং non primitive উভয় ধরণের টাইপ ডিফাইন করা যায়। Interface কে এক্সটেন্ড করতে হয় extends keyword দ্বারা। অপরদিকে Type Alias কে এক্সটেন্ড করতে হয় ‘&’ অপারেটর দ্বারা।

// Generics: কোনো function, type alias, interface, class ইত্যাদিতে টাইপ ডিফাইন করার সময় কোনো টাইপকে explicitly ডিফাইন না করে টাইপকে ভ্যারিয়েবল আকারে রিসিভ করে function, type alias, interface, class ইত্যাদি ডিফাইন করাকে Generics বলে। extends কীওয়ার্ড দ্বারা Generics এ ব্যবহৃত টাইপ ভ্যারিয়েবলে কিছু বাধ্যবাধকতা বা শর্তারোপ করা যায়।

// Promise in TypeScript: TypeScript এ কোনো Promise এর রিজল্ভ ভ্যালুর ডাটা টাইপ ডিফাইন করা হয় রিজল্ভ ভ্যালুর টাইপকে জেনেরিক হিসেবে ভ্যারিয়েবল আকারে পাঠানোর মাধ্যমে। যেমন new Promise<string> ⇒ () {..}

// Conditional Type: Conditional Type হলো কোনো কন্ডিশনের ভিত্তিতে টাইপ ডিফাইন করা। extends কীওয়ার্ড এবং ternary অপারেটর ব্যবহার করে কনডিশনাল টাইপ ডিফাইন করা হয়।

// Mapped Types: index বা key ম্যাপ করার মাধ্যমে ডাইনামিক্যালি ডিফাইন করা Non primitive টাইপকে Mapped Types বলে।
// কয়েকটি Utility Type:

// Pertial<Type>: একটা Type এর সবগুলো প্রোপার্টির optional করে দিয়ে নতুন একটি টাইপ রিটার্ন করে।
// Required<Type>: একটা Type এর সবগুলো প্রোপার্টি required করে দিয়ে নতুন একটি টাইপ রিটার্ন করে। (এটা Pertial এর বিপরীত)।
// Readonly<Type>: একটা Type এর সবগুলো প্রোপার্টি readonly করে দিয়ে নতুন একটি টাইপ রিটার্ন করে।
// Record<Keys, Type>: কতগুলো Keys এবং একটা Type রিসিভ করে এবং এমন একটা অবজেক্ট টাইপ রিটার্ন করে যেটাতে Key গুলো প্রোপার্টি হিসেবে থাকে এবং এদের টাইপ হয় রিসিভ করা Type টি।
// Pick<Type, Keys>: একটা Type থেকে শুধুমাত্র নির্দিষ্ট Key গুলো নিয়ে নতুন একটি টাইপ রিটার্ন করে।
// Omit<Type, Keys>: একটা Type থেকে শুধুমাত্র নির্দিষ্ট Key গুলোকে বাদ দিয়ে নতুন একটি টাইপ রিটার্ন করে।
