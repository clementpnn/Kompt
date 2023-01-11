
export default function Button({text, style, color, icon}:{text: string, style: string, color:string, icon?: string}) {
    function buttonContent(){
        if(icon == undefined){
            return text
        } else {
            return (
                <>
                    <img className="pr-2" src={icon} alt="icon button" />
                    {text}
                </>
            )
        }
    }
    let button;
    if(style=="fill"){
        button = <button className={`btn btn-${color} text-white`}>
            {buttonContent()}
        </button>
    } else if(style=="outline"){
        button = <button className={`btn btn-${style} btn-${color}`}>
            {buttonContent()}
        </button>
    } else if(style=="undefined"){
        button = <button className={"btn btn-secondary text-neutral-600"} >
            {buttonContent()}
        </button>
    }
    return (
        <>
            {button}      
        </>
    );
}
