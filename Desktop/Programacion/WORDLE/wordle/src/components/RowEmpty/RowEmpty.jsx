import '../Wordle/Wordle.css';
import Box from "../Box/Box"

export default function RowEmpty(){

    return <div className="contenedor">
        {Array.from(Array(5)).map ((_,i)=>(
            <Box key={i} letter ="" status ="empty"/>
        ))}
    </div>
}