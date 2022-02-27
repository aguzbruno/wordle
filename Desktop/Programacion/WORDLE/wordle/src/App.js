import './App.css';
import Home from './components/Home/Home.jsx';
import Wordle from './components/Wordle/Wordle.jsx';
import {useState} from 'react';
import {HowToContext} from "./Context/context"
import {DifficultyContext} from "./Context/difficultycontext"

function App() {
const [isHowToContext,setIsHowToContext] = useState(false)
const [difficultyLevel,setDifficultyLevel] = useState("");
  return (
    <div className="App">
      <HowToContext.Provider value={[isHowToContext,setIsHowToContext]}>
      <DifficultyContext.Provider value ={[difficultyLevel,setDifficultyLevel]}>
        <Home/>
        <Wordle/>
      </DifficultyContext.Provider>
  </HowToContext.Provider>
    </div>
  );
}

export default App;
