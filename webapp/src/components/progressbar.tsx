export default function ProgressBar({taille, value, max}:{taille:string, value:number, max:number }){

    return(
        <progress className={`progress progress-primary ${taille}`} value={`${value}`} max={`${max}`}></progress>
    )
}