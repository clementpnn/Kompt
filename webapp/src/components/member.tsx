import { userStore } from "../stores/store"
import KickMemberPopup from "./pop-up/kickPopup"
import RolePopup from "./pop-up/rolePopup"



export default function Member({memberName, role}:{memberName:string, role:string}) {
    const getAdmin = userStore(state => state.admin)
    console.log(getAdmin)
    return (
        
        <>
            <div className="mx-20 bg-white flex border-b p-5 items-center hover:bg-grey-100 "> 
                <div className="flex-1">
                    <p>{memberName}</p>
                </div>
                {getAdmin == 1 && 
                <div className="flex">
                    <div className="mr-2.5">
                        <RolePopup name={memberName} role={role}/>
                    </div>
                    <KickMemberPopup name={memberName}/>
                </div>}
                
            </div>
        </>
        
    )

}