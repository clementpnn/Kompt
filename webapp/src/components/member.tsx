import KickMemberPopup from "./pop-up/KickMemberPopup";


export default function Member({memberName}:{memberName:string}) {

    return(
        <div className="mx-20 bg-white flex border-b p-5 items-center hover:bg-grey-100 "> 
            <div className="flex-1">
                <p>{memberName}</p>
            </div>
            <KickMemberPopup/>
        </div>
    )

}