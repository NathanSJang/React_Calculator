import React, { useState } from "react";
import Display from "./Display";
import Digit from "./Digit";
import Decimal from "./Decimal";
import Operation from "./Operation";
import FunctionOperation from "./FunctionOperation";

import "./styles.css";

export default function App() {
  const OPERATIONS = {
    "+": (a, b) => a + b,
    "−": (a, b) => a - b,
    "÷": (a, b) => a / b,
    "×": (a, b) => a * b
  };

  const [number, setNumber] = useState({
    current: "",
    operator: "",
    previous: "",
    result: ""
  });

  function addNumber(num) {
    let newNumber = { ...number };
    let newCurrent = newNumber.current.concat(num);
    setNumber({
      current: newCurrent,
      operator: newNumber.operator,
      previous: newNumber.previous,
      result: ""
    });
  }

  function addOperator(operator) {
    let newNumber = { ...number };
    let newOperator = newNumber.operator.concat(operator);
    setNumber({
      current: "",
      operator: newOperator,
      previous: newNumber.current,
      result: newNumber.current
    });
  }

  function getResult(evt) {
    let newNumber = { ...number };
    if (!newNumber.previous) return;
    if (!newNumber.current) return;
    let a = parseFloat(newNumber.previous);
    let b = parseFloat(newNumber.current);
    let result = OPERATIONS[newNumber.operator];
    console.log(a);
    console.log(b);
    console.log(result(a, b));
    newNumber.result = result(a, b);

    setNumber({
      current: "",
      operator: "",
      previous: "",
      result: newNumber.result
    });
  }

  function addModuus(evt) {
    let newNumber = { ...number };
    let newCurrent = newNumber.current / 100;
    setNumber({
      current: newCurrent,
      operator: newNumber.operator,
      previous: newNumber.previous,
      result: newNumber.result
    });
  }

  function addSign() {
    let newNumber = { ...number };
    let newCurrent = newNumber.current * -1;
    setNumber({
      current: newCurrent,
      operator: newNumber.operator,
      previous: newNumber.previous,
      result: newNumber.result
    });
  }

  function addDemical(evt) {
    let newNumber = { ...number };
    if (newNumber.current.includes(evt)) return;
    let newCurrent = newNumber.current.concat(evt);
    setNumber({
      current: newCurrent,
      operator: newNumber.operator,
      previous: newNumber.previous,
      result: newNumber.result
    });
  }

  function clear() {
    setNumber({
      current: "",
      operator: "",
      previous: [],
      result: ""
    });
  }

  return (
    <div className="App">
      <h1>It's Calculator</h1>
      {number.previous}
      {number.operator}
      {number.current}
      <div className="cal-grid">
        <Display number={number} />
        <FunctionOperation
          clear={clear}
          addModuus={addModuus}
          addSign={addSign}
        />
        <Operation addOperator={addOperator} getResult={getResult} />
        <Digit number={number} addNumber={addNumber} />
        <Decimal addDemical={addDemical} />
      </div>
    </div>
  );
}
