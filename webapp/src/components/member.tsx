import KickMemberPopup from "./pop-up/kickPopup"
import RolePopup from "./pop-up/rolePopup"



export default function Member({memberName, role}:{memberName:string, role:string}) {

    return (

        <>
            <div className="mx-20 bg-white flex border-b p-5 items-center hover:bg-grey-100 "> 
                <div className="flex-1">
                    <p>{memberName}</p>
                </div>
                <div className="flex w-1/4">
                    <div className="mr-2.5 w-1/2">
                        <RolePopup name={memberName} role={role}/>
                    </div>
                    <div className="w-1/2">
                        <KickMemberPopup name={memberName}/>
                    </div>
                </div>
            </div>
        </>
        
    )

}