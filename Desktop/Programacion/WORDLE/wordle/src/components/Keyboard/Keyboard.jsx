import './Keyboard.css'
import Delete from '../Icons/delete'

export default function Keyboard ({keys,onKeyPressed}){

    function handleInput(e){
        onKeyPressed(e.target.textContent)
    }
    function handleEnter(e){      
        onKeyPressed('ENTER')
    }
    function handleDelete(e){
        onKeyPressed('BACKSPACE')
    }
    
    
    return <div className ="keyboardContainer">
        
        {Array.from(Array(10)).map((_,i)=>(
            <button key={i} id={keys[i]} className = {"key"} onClick ={handleInput}>
                {keys[i]}
            </button>
        ))}
        
        
         {Array.from(Array(10)).map((_,i)=>(
            <button key={i+10} id={keys[i+10]} className ={"key"} onClick ={handleInput}>
                {keys[i+10]}
            </button>
        ))}
     {
            <button className ="enterKey" onClick ={handleEnter}>
            {"ENVIAR"}
        </button>
        }
         {Array.from(Array(7)).map((_,i)=>(
            <button key={i+20} id={keys[i+20]} className ={"key"} onClick ={handleInput}>
                {keys[i+20]}
            </button>
        ))}
        {
          <Delete className ="deleteKey" onClick ={handleDelete}  width={40} heigth={20}/>
        
        }

    </div>


}