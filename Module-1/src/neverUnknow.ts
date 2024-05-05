{
  // nullable types

  function search(value: string | null) {
    if (value) {
      console.log("value available");
    } else {
      console.log("value not available");
    }
  }

  search("null");

  //unknown types

  const getUnknownType = (value: unknown) => {
    if (typeof value === "number") {
      const unknownValue = value * 50;
      console.log(unknownValue);
    } else if (typeof value === "string") {
      // const unknownValue = value.toUpperCase();
      const [result, unknownValue] = value.split(" ");
      const sum = value + parseFloat(result);
      console.log(sum);
    } else {
      console.log("wrong type: " + value);
    }
  };

  getUnknownType("10 this");
}
