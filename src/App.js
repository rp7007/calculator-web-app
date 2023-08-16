import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNumChange = (e, numType) => {
    const value = e.target.value;
    if (numType === 'num1') {
      setNum1(value);
    } else {
      setNum2(value);
    }
  };

  const handleOperation = (op) => {
    setOperation(op);
    setErrorMessage('');
    setResult('');
  };

  const performCalculation = () => {
    if (num1 === '' || num2 === '') {
      setErrorMessage('Both numbers are required.');
      setResult('');
      return;
    }

    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
      setErrorMessage('Invalid number format.');
      setResult('');
      return;
    }

    let calculatedResult;
    switch (operation) {
      case '+':
        calculatedResult = parsedNum1 + parsedNum2;
        break;
      case '-':
        calculatedResult = parsedNum1 - parsedNum2;
        break;
      case '*':
        calculatedResult = parsedNum1 * parsedNum2;
        break;
      case '/':
        calculatedResult = parsedNum1 / parsedNum2;
        break;
      default:
        setErrorMessage('Invalid operation.');
        return;
    }

    setResult(`Result: ${calculatedResult}`);
    setErrorMessage('');
  };

  return (
    <div className="calculator">
    <h1>Calculator</h1>
      <div className="input-container">
        <input type="text" placeholder='Enter first number' value={num1} onChange={(e) => handleNumChange(e, 'num1')} />
        <input type="text" placeholder='Enter second number' value={num2} onChange={(e) => handleNumChange(e, 'num2')} />
      </div>
      <div className="button-container">
        <button onClick={() => handleOperation('+')}>+</button>
        <button onClick={() => handleOperation('-')}>-</button>
        <button onClick={() => handleOperation('*')}>*</button>
        <button onClick={() => handleOperation('/')}>/</button>
        <button onClick={performCalculation}>Click here to Calculate</button>
      </div>
      <div className="result-container">
        {errorMessage && <div className="error">{errorMessage}</div>}
        {result && <div className="success">{result}</div>}
      </div>
    </div>
  );
}

export default App;
