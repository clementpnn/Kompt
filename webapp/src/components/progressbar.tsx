export default function ProgressBar({taille, value, max}:{taille:string, value:number, max:number }){
    return(
        <progress className={`progress static progress-primary ${taille}`} value={`${value}`} max={`${max}`}></progress>
    )
}