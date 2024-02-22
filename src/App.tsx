import React, { useState } from 'react';

function App() {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [operation, setOperation] = useState('+');
  const [operationChosen, setOperationChosen] = useState(false);
  const [result, setResult] = useState('');

  const handleOperation = ({ target }) => {
    setOperation(target.value);
    setOperationChosen(true);
  };
  const handleNumbers = ({ target }) =>
    operationChosen
      ? setSecond(second + target.value)
      : setFirst(first + target.value);
  const handleResult = () => {
    setResult(eval(`${first || 0} ${operation} ${second || 0}`));
  };
  const handleClear = () => {
    setFirst('');
    setSecond('');
    setOperation('+');
    setOperationChosen(false);
    setResult('');
  };

  return (
    <div>
      <h2>
        OPERATION: {first.length ? first : 0} {operation}{' '}
        {second.length ? second : 0}
      </h2>
      <h1>RESULT: {result}</h1>
      <div>
        {Array.from({ length: 10 }, (_, i) => (
          <button key={i} value={i} onClick={handleNumbers}>
            {i}
          </button>
        ))}
      </div>
      {['+', '-', '*', '/'].map((op) => (
        <button key={op} value={op} onClick={handleOperation}>
          {op}
        </button>
      ))}
      <button type="submit" onClick={handleResult}>
        SUBMIT
      </button>
      <button type="submit" onClick={handleClear}>
        CLEAR
      </button>
    </div>
  );
}
export default App;
