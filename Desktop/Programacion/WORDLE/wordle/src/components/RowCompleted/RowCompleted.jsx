import '../Wordle/Wordle.css';
import Box from "../Box/Box"

export default function RowCompleted({word,solution}){

    const palabra=[{status:"absent"},{status:"absent"},{status:"absent"},{status:"absent"},{status:"absent"}]
    function checkLetter (word,i){
        const palabraPrueba = word.split("");
        const palabraPrueba2 = word.split("");
        const solucionReal = solution.split("");
        
        const hola = document.getElementById(palabraPrueba[i])
        hola.className="keyabsent"
        


        palabraPrueba.forEach((letter,index) =>{
            const exactLetter=letter===solucionReal[index];
            if (exactLetter){
                solucionReal[index]=""
                
                const hola = document.getElementById(palabraPrueba[index])
                hola.className="keycorrect"
                palabra[index].status="correct"
                palabraPrueba[index]="zz"
            }
        })
        palabraPrueba.forEach((letter,index) =>{
            const existLetter=solucionReal.includes(letter);
            if (existLetter){
                const pos = solucionReal.findIndex(l=>l===letter)
                solucionReal[pos]=""
                const hola = document.getElementById(palabraPrueba[index])
                hola.className="keypresent"
                palabra[index].status="present"
            }})
       
   ;
    
    return palabra[i].status;
}

    return <div >
        {Array.from(Array(5)).map ((_,i)=>(
            <Box key={i} letter ={word[i]} status ={checkLetter(word,i)}/>
        ))}
        
            </div>
}