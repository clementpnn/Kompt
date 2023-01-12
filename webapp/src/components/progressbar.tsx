export default function ProgressBar({value, max}:{value:number, max:number }){
    return(
        <progress className="progress progress-primary w-80" value={`${value}`} max={`${max}`}></progress>
    )
}