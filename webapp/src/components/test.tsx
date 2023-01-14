import { useBooleanStore, useJwtStore, useLoggedStore} from "../stores/connexionStore"


export function Chips(){
    const chips = useBooleanStore((state) => state.compteur)
    const increaseChips = useBooleanStore((state) => state.increase)
    return(
        <>
            <h1>{chips}</h1>
            <button onClick={increaseChips}>Augmente les chips</button>
        </>
    )
}

export function Paelas(){
    const paelas = useBooleanStore((state) => state.compteur)
    const increasePaelas = useBooleanStore((state) => state.increase)
    return(
        <>
            <h1>{paelas}</h1>
            <button onClick={increasePaelas}>Augmente les paelas</button>
        </>
    )
}

export function Jwt(){
    const jwt = useJwtStore(state => state.jwt)
    const setJwt = useJwtStore(state => state.setJwt)
    const logged = useLoggedStore(state => state.isLogged)

    console.log(jwt)
    return(
        <>  
            <h1>{jwt}</h1>
            <button onClick={() => setJwt("chips")}>Change state</button>
            
        </>
    )
}



export default function Test(){
    return(
        <>
            <Jwt/>
        </>
    )
}

// Dans un 1er store stocker le jwt à l'inscription et à la connexion
// Dans un autre store tu passes un state isLogged=false à true
