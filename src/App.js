import { useContext } from 'react';
import './App.css';
import { CounterContext } from './Counter'

 function App() {

  const { counter, setCounter } = useContext(CounterContext);


  return (
    <div className="App">
      <header className="App-header">
       <h1>{counter}</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="Context Api"
          target="_blank"
          rel="noopener noreferrer"
        >
          Context Api
        </a>
        <div className="buttonContext">
        <button
            onClick={() => {setCounter(counter - 1)}}
          >-</button>
          <button
            onClick={() => {setCounter(counter + 1)}}
          >+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
