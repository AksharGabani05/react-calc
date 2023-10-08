import React, { useState, useEffect } from "react";

function Calculator() {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [value, setvalue] = useState("0");
  const [ans, setans] = useState(0);

 
  const calculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    switch (value) {
      case "+":
        setans(n1 + n2);
        break;
      case "-":
        setans(n1 - n2);
        break;
      case "*":
        setans(n1 * n2);
        break;
      case "/":
        setans(n1 / n2);
        break;
      default:
        setans(0);
    }
  };

  useEffect(() => {
    calculate();
  }, [num1, num2, value]);

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <div>
        <button onClick={() => setvalue("+")}>+</button>
        <button onClick={() => setvalue("-")}>-</button>
        <button onClick={() => setvalue("*")}>*</button>
        <button onClick={() => setvalue("/")}>/</button>
      </div>
      <p>ans: {ans}</p>
    </div>
  );
}

export default Calculator;

