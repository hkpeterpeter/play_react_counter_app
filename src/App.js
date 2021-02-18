import './App.css';
import { useState } from 'react';
import NumberView from './NumberView';
import MyButton from './MyButton';
import RepeatedItemView from './RepeatedItemView';
import SvgView from './SvgView';

function App() {

  const [count, setCount] = useState(30);

  return (
    <div className="App">
      <header className="App-header">
         <NumberView value={count} />
         <RepeatedItemView value={count} pattern="#" />
         <SvgView radius={count} />
         <br />
         <MyButton onClick={() => setCount(count+1) } text="Add+" />
         <br />
         <MyButton onClick={() => { if (count>0) setCount(count-1); } } text="Minus-" />
      </header>
     
    </div>
  );
}

export default App;
