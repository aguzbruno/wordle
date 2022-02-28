import './Home.css'
import HowTo from '../HowtoPlay/Howto';
import {useContext} from 'react'
import { HowToContext } from '../../Context/context';
import Faq from '../Icons/faq';
import {DifficultyContext} from '../../Context/difficultycontext';

export default function Home(){
    const [isHowToContext,setIsHowToContext] = useContext(HowToContext)
    const [difficultyLevel,setDifficultyLevel] = useContext(DifficultyContext);
    function howtoplay(){
        setIsHowToContext(true);
    }
    return <div className="Home">
    {<HowTo/>}
        <div className="Line">
        <div className="Wordle">
        WORDLE
        <Faq onClick={howtoplay} className="Howto" width={20} heigth={20}/>
    </div>
        {/* <div className="levelDifficulty">
        Dificultad:<br/>
            {difficultyLevel}
        </div> */}
    UNLIMITED
    </div>
    <a style={{color:"#c9b458"}} href="https://github.com/aguzbruno">by Aguzbruno</a>
        
    </div>
}