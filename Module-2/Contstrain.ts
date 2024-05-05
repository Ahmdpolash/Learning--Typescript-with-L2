//contrains
{
  type FixedValue = {
    id: number;
    email: string;
    password: string;
  };

  const ConstraintFunction = <T extends FixedValue>(credintials: T) => {
    return { credintials };
  };

  const result = ConstraintFunction({
    id: 1,
    email: "dd@example.com",
    password: "dd",
  });
  const result2 = ConstraintFunction({
    id: 1,
    email: "dd@example.com",
    password: "dd",
    // house: "dd",
  });
}
