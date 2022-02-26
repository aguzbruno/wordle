import "./Howto.css";
import {useState} from 'react'
import imagenes from '../../img/imagenes'
import {useContext} from 'react'
import { HowToContext } from '../../Context/context';

export default function HowTo() {
    const [isHowToContext,setIsHowToContext] = useContext(HowToContext)

    function close (){
        setIsHowToContext(false);
    }
  return (
      (isHowToContext)?(
    <div className="modalViewContainer">
      <div className="modalContainer">
        <div className="top">
            <h2 style={{color: "37d034"}}>CÓMO JUGAR </h2>
            <button className="closes" onClick={close}  >X</button>
         </div>
         <p>Adivina la palabra oculta en seis intentos.</p>
         <p>Cada intento debe ser una palabra válida de 5 letras.</p>
         <p>Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra. </p>
        <h3>Ejemplos</h3>
        <img src={imagenes.img1} alt="" />
        <p>La letra G está en la palabra y en la posición correcta.</p>
        <img src={imagenes.img2} alt="" />
        <p>La letra C está en la palabra pero en la posición incorrecta.</p>
        <img src={imagenes.img3} alt="" />
        <p>La letra O no está en la palabra.</p>
        <p>Puede haber letras repetidas. Las pistas son independientes para cada letra. </p>
        <h3>WORDLE &nbsp; </h3>
        <a  style={{color:"#c9b458",fontSize:"20px"}} target="_blank" href="https://github.com/aguzbruno">by AGUZBRUNO</a>
        </div> 
    </div>
    ):null
  );
}