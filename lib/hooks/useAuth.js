import { useState } from "react"
import { useEffect } from "react"
import { onAuthStateChanged } from "@firebase/auth"
import { auth } from "../firebase"

function useAuth(){

    const [user, setUser] = useState(null)

    useEffect(()=>{
        // external code checking firebase user
        onAuthStateChanged(auth, (clientCredential)=>{
            if(clientCredential){
                setUser(clientCredential)
            } 
            else
            {
                setUser(null)
            }
        })
    })

    return user 
}

export {useAuth}