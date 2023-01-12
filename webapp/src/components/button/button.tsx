import { ButtonInterface } from '../../interfaces/interfaces'

export default function Button({props} : {props : ButtonInterface}) {
    // {text, style, color, icon}:{text: string, style: string, color:string, icon?: string}
    function buttonContent(){
        if(props.icon == undefined){
            return props.text
        } else {
            return (
                <>
                    <img className="pr-2" src={props.icon} alt="icon button" />
                    {props.text}
                </>
            )
        }
    }
    let balise;
    if(props.style=="fill" && props.color=="primary"){
        balise = <button className="btn btn-primary text-white">
            {buttonContent()}
        </button>
    } else if(props.style=="outline" && props.color=="primary" && props.style=="outline"){
        balise = <button className="btn btn-outline btn-primary">
            {buttonContent()}
        </button>
    } else if(props.style=="undefined"){
        balise = <button className={"btn btn-secondary text-neutral-600"} >
            {buttonContent()}
        </button>
    }
    return (
        <>
            {balise}      
        </>
    );
}
