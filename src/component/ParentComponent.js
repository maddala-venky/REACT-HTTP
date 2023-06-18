import React, { useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = () => {
    setAge(age + 1);
  };

  const incrementSalary = () => {
    setSalary(salary + 1000);
  };

  return (
    <div>
      <Title />
      <Count text="Age" Count={age} />
      <Button handleClick={incrementAge}>IncrementAge</Button>
      <Count text="Salary" Count={salary} />
      <Button handleClick={incrementSalary}>IncrementSalary</Button>
    </div>
  );
}

export default ParentComponent;
