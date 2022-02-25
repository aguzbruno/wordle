import '../Wordle/Wordle.css';
import Box from "../Box/Box"

export default function RowCurrent({word}){

    return <div className="contenedor" >
        {word.split("").map((letter,i)=>(
            <Box key={i} letter ={letter} status ={"edit"}/>
        ))}
        {Array.from(Array(5-word.length)).map ((letter,i)=>(
            <Box key={i} letter ="" status ={"edit"}/>
        ))}

    </div>
}