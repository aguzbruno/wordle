import '../Wordle/Wordle.css';

export default function Box({letter,status}){
    
    return <div className ={status}>
        {letter}
    </div>
}