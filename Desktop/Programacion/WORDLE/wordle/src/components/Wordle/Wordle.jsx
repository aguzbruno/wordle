import './Wordle.css'
import {useState} from 'react';
import RowCompleted from '../RowCompleted/RowCompleted'
import RowEmpty from '../RowEmpty/RowEmpty'
import RowCurrent from '../RowCurrent/RowCurrent'
import Popup from '../Popup/Popup'
import Keyboard from '../Keyboard/Keyboard'
import {useEffect} from 'react';
import { useWindow } from '../../hooks/useWindow';
import WORDS from "../../assets/words.json"

export default function Wordle(){
    const randomIndex = Math.floor(Math.random()*WORDS.length);
    const [wordOfTheDay,setWordOfTheDay]= useState(WORDS[randomIndex].toUpperCase());
    const [turn,setTurn]= useState(1);
    const [currentWord,setCurrentWord]= useState("");
    const [completedWords,setCompletedWords]= useState([]);
    const [GameStatus,setGameStatus]= useState("Playing");
    useWindow('keydown',handleKeyDown);

    function handleKeyDown(event){
        const letter = event.key.toUpperCase();
        onKeyPressed(letter);
    }

    function onKeyPressed(key){
        if(GameStatus !== "Playing"){
            return
        }
        if (key ==='BACKSPACE' && currentWord.length>0){
            onDelete();
            return;
        }
        if (key ==='ENTER' && currentWord.length===5){
            onEnter();
            return;
        }
        if (currentWord.length >=5){
            return;
        }

        if (allowCharacters.includes(key)){
            onInput(key)
            return;
        }

    }
    function onInput (letter){
        const newWord = currentWord +letter;
        setCurrentWord (newWord);
    }
    function onEnter (letter){
    if (WORDS.includes(currentWord.toLowerCase())){
     if (currentWord === wordOfTheDay){
         setCompletedWords([...completedWords,currentWord]);
         setGameStatus("Won");
         console.log("ganaste")
         return;
     }
     if (turn ===6){
        setCompletedWords([...completedWords,currentWord]);
        setGameStatus("Lost");
        return;
     }
     setCompletedWords([...completedWords,currentWord]);
     setTurn(turn+1);
     setCurrentWord("");
     return;  
    } else{
        alert("Ingrese una palabra correcta")
    } 
    }
    function onDelete (){
        const newWord = currentWord.slice(0,-1)
        setCurrentWord (newWord);
    }
    let allowCharacters = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Ñ","Z","X","C","V","B","N","M"];  
    return<> 
    {GameStatus === "Won" ? <Popup type="won" completedWords ={completedWords} solution={wordOfTheDay}/>: GameStatus === "Lost" ? <Popup type="lost" completedWords ={completedWords} solution={wordOfTheDay}/>:null}
    <div className="allBox">
        
        {completedWords.map((word,i)=>(
                <RowCompleted key={i} word ={word} solution ={wordOfTheDay}/>
            ))}
        {
        GameStatus === "Won"  || GameStatus ==="Lost" ? null:(
            <RowCurrent  word ={currentWord}/>
        )
        }
        
        {
            Array.from(Array(6-turn)).map((_,i) => (
                <RowEmpty key={i}/>
            ))
        }
        {<Keyboard keys={allowCharacters} onKeyPressed={onKeyPressed} word={currentWord} solution= {wordOfTheDay}/>}
    </div>
    </>
         }
         