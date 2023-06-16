import logo from './logo.svg';
import './App.css';
import './components/Button';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Button symbol={"C"} />
          <Button symbol={"()"}/>
          <Button symbol={"%"}/>
          <Button symbol={"/"}/>
        </div>
        <div className="row">
          <Button symbol={"7"}/>
          <Button symbol={"8"}/>
          <Button symbol={"9"}/>
          <Button  symbol={"*"}/>
        </div>
        <div className="row">
          <Button  symbol={"4"}/>
          <Button  symbol={"5"}/>
          <Button  symbol={"6"}/>
          <Button   symbol={"-"}/>
        </div>
        <div className="row">
          <Button  symbol={"1"}/>
          <Button  symbol={"2"}/>
          <Button  symbol={"3"}/>
          <Button  symbol={"+"}/>
        </div>
        <div className="row">
          <Button  symbol={"+/-"}/>
          <Button  symbol={"0"}/>
          <Button  symbol={"."}/>
          <Button  symbol={"="}/>
        </div>
      </div>
    </div>
  );
}

export default App;
