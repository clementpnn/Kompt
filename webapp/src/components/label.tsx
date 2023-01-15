import { LabelInterface } from '../interfaces/interfaces'



export default function Label({props} : {props : LabelInterface}) {

    function labelContent() {

        if(props.icon == undefined) {
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

    let balise

    if(props.style=="fill" && props.color=="primary") {
        balise = <label className="btn btn-primary font-os text-paragraph text-white normal-case w-full" htmlFor={props.htmlFor}>
            {labelContent()}
        </label>
    } else if(props.style=="outline" && props.color=="primary" && props.style=="outline") {
        balise = <label className="btn btn-outline btn-primary font-os text-paragraph normal-case w-full" htmlFor={props.htmlFor}>
            {labelContent()}
        </label>
    } else if(props.style=="undefined") {
        balise = <label className={"btn btn-secondary text-neutral-600 font-os text-paragraph normal-case"}>
            {labelContent()}
        </label>
    }

    return (
        <>
            {balise}      
        </>
    )
    
}