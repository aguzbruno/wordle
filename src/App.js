import './App.css';
import Home from './components/Home/Home.jsx';
import Wordle from './components/Wordle/Wordle.jsx';
import {useEffect, useRef} from 'react';

function App() {
  return (
    <div className="App">
      
      <Home/>
      <Wordle/>
    </div>
  );
}

export default App;
