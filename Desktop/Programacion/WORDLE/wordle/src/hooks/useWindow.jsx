import { useEffect } from "react";

export function useWindow (eventName, callback){
    useEffect(()=>{
        window.addEventListener(eventName,callback);
        return ()=>{
            window.removeEventListener(eventName,callback);
        }
    })
}