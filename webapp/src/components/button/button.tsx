
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
    if(style=="fill" && color=="primary"){
        button = <button className="btn btn-primary text-white">
            {buttonContent()}
        </button>
    } else if(style=="outline" && color=="primary" && style=="outline"){
        button = <button className="btn btn-outline btn-primary">
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
