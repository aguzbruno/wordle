import './Keyboard.css'

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
            <button className ="deleteKey" onClick ={handleDelete}>
          {<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-7 -7 40 40" stroke="currentColor" aria-hidden="true" class="h-6 w-6 ml-1"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"></path></svg>}
        </button>
        }

    </div>


}