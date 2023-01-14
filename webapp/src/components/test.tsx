
import { useAuthStore } from "../stores/connexionStore"


export default function Test(){
    const getJwt = useAuthStore(state => state.token)
    const delJwt = useAuthStore(state => state.deleteToken)
    return(
        <>
            <h1>{getJwt}</h1>
            <button onClick={delJwt}>Je supprime</button>
        </>
    )
}

