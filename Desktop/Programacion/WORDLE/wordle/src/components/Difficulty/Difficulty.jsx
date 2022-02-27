import "./Difficulty.css";
import {useState} from 'react'
import {useContext} from 'react'
import {DifficultyContext} from '../../Context/difficultycontext';



export default function Difficulty() {
const [difficultyLevel,setDifficultyLevel] = useContext(DifficultyContext);
const [difficulty, setDificulty] = useState(true);

  function easy(){
    setDifficultyLevel("FACIL")
    setDificulty(false);
  }
  function medium(){
    setDifficultyLevel("INTERMEDIO")
    setDificulty(false);
  }
  function hard(){
    setDifficultyLevel("DIFICIL")
    setDificulty(false);
  }

  return (
      (difficulty)?(
        <div className="modalViewContainer1">
        <div className="modalContainer1">
              <h2>Elige la dificultad</h2>      
              <div className="botonesDificultad">
           <button className="botonDificultad" onClick={easy}>Facil</button>
           <br />
           <button style={{backgroundColor: "#FDE74C", color:"grey"}} className="botonDificultad" onClick={medium}>Intermedio</button>
           <br />
           <button style={{backgroundColor: "#F71735"}} className="botonDificultad"  onClick={hard}>Dificil</button>
          </div> 
          </div>     
      </div>
    ):null
  );
}