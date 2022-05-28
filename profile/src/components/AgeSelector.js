import { useState } from "react";
import Picker from "react-mobile-picker-scroll";

export default function AgeSelector() {
  const myRange = (start, end) => {
    const length = end - start;
    return Array.from({ length }, (_, i) => start + i);
  };
  let myArray = myRange(1340, 1401);
  myArray.splice(31, 0, "؟");

  const [optionGroups] = useState({
    Year: myArray,
  });
  const [valueGroups, setvalueGroups] = useState({
    Year: "؟",
  });
  const handleChange = (name, value) => {
    console.log("name", name, "value", value);
    setvalueGroups({ ...valueGroups, [name]: value });
  };

  return (
    <div className="AgeSelector">
      {console.log("valuegroup", valueGroups)}

      <Picker
        optionGroups={optionGroups}
        valueGroups={valueGroups}
        onChange={handleChange}
      />
    </div>
  );
}
