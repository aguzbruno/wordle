import './App.css';
import Home from './components/Home/Home.jsx';
import Wordle from './components/Wordle/Wordle.jsx';
import {useState} from 'react';
import {HowToContext} from "./Context/context"

function App() {
const [isHowToContext,setIsHowToContext] = useState(false)
  return (
    <div className="App">
      <HowToContext.Provider value={[isHowToContext,setIsHowToContext]}>
        <Home/>
        <Wordle/>
  </HowToContext.Provider>
    </div>
  );
}

export default App;
