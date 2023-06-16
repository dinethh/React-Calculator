import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import './components/Button';
import Button from './components/Button';
import Input from './components/Input';


const App = () => {
  const [result, setResult] = useState("");

  const appendToResult = (val) => {
    setResult((prevResult) => prevResult + val);
  };

  const clearResult = () => {
    setResult('');
  };

  const calculate = () => {
    const input = eval(result);
    setResult(String(input));
  };

  return (
    <div className="App">
      <div className="container">
        <Input result={result} />
        <div className="row">
          <Button symbol="C" color="red" handleClick={clearResult} />
          <Button symbol="()" color="orange" handleClick={appendToResult} />
          <Button symbol="%" color="orange" handleClick={appendToResult} />
          <Button symbol="/" color="orange" handleClick={appendToResult} />
        </div>
        <div className="row">
          <Button symbol="7" handleClick={appendToResult} />
          <Button symbol="8" handleClick={appendToResult} />
          <Button symbol="9" handleClick={appendToResult} />
          <Button symbol="*" color="orange" handleClick={appendToResult} />
        </div>
        <div className="row">
          <Button symbol="4" handleClick={appendToResult} />
          <Button symbol="5" handleClick={appendToResult} />
          <Button symbol="6" handleClick={appendToResult} />
          <Button symbol="-" color="orange" handleClick={appendToResult} />
        </div>
        <div className="row">
          <Button symbol="1" handleClick={appendToResult} />
          <Button symbol="2" handleClick={appendToResult} />
          <Button symbol="3" handleClick={appendToResult} />
          <Button symbol="+" color="orange" handleClick={appendToResult} />
        </div>
        <div className="row">
          <Button symbol="+/-" handleClick={appendToResult} />
          <Button symbol="0" handleClick={appendToResult} />
          <Button symbol="." handleClick={appendToResult} />
          <Button symbol="=" backgroundColor="orange" handleClick={calculate} />
        </div>
      </div>
    </div>
  );
}

export default App;
