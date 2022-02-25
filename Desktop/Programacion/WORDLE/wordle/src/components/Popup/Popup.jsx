import "./Popup.css";
import {useState} from 'react'




export default function Popup({ type, completedWords, solution }) {
const [popUp, setPopup] = useState(true)

  function Square({ word, solution }) {
    function checkLetter(letter, pos) {
      if (solution.includes(letter)) {
        if (solution[pos] === letter) {
          return "🟩";
        } else {
          return "🟨";
        }
      } else {
        return "⬛";
      }
    }
    return (
      <div className="puzzleWord">
        {word.split("").map((letter, i) => (
          <div>{checkLetter(letter, i)}</div>
        ))}
      </div>
    );
  }
  function copiar(){
    let content = document.getElementById('puzzle')
    content.select();
    document.execCommand('copy');

    alert("Copiado!");
  }
  function cerrar(){
    setPopup(false);
  }

  return (
      (popUp)?(
    <div className="modalViewContainer">
      <div className="modalContainer">
          <button className="close" onClick={cerrar}>X</button>
        {type === "won" ? <h2 style={{color: "37d034"}}>¡GANASTE! </h2>: <h2 style={{color: "red"}}>¡PERDISTE! </h2>}
        {type === "won" ? <p>¡Felicitaciones! Has ganado la partida! </p>:<p>Lo sentimos, has perdido la partida</p> }
        <div className="word">
        <h3>La palabra era&nbsp; </h3> 
        <h3 style={{color: "green"}}>"{solution}"</h3>
        </div>
        <h3 style ={{marginBottom:0}}>¿Conoces la palabra?</h3>
        <h3>  <a style ={{color:"red",marginTop:0}} href={`https://dle.rae.es/${solution}`}  target="_blank" >Significado de "{solution}" segun la RAE</a></h3>
        <div className="autor">
        <h3>WORDLE &nbsp; </h3>
        <a  style={{color:"#c9b458",fontSize:"20px"}} target="_blank" href="https://github.com/aguzbruno">by AGUZBRUNO</a>
        </div>
        <h3>Tu partida:</h3>


        <div id="puzzle" className="puzzle">
          {
          completedWords.map((word, i) => (
              <div className="jugada">
                <p>({i+1})</p>
              <Square key={i} word={word} solution={solution} />
              </div>
          ))}
        </div>
        {/* <div className="contenedorCopy">
          <button className="copy" onClick={copiar}>Seleccionar y copiar</button>
          </div> */}
      </div>
    </div>
    ):null
  );
}