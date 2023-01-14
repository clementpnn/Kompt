// import KickMemberPopup from "./pop-up/kickMemberPopup";
import RolePopup from "./pop-up/rolePopup";



export default function Member({memberName, role}:{memberName:string, role:string}) {

    return(
        <div className="mx-20 bg-white flex border-b p-5 items-center hover:bg-grey-100 "> 
            <div className="flex-1">
                <p>{memberName}</p>
            </div>
            {/* A CORRGIER : */}
            <div className="flex">
                <div className="mr-2.5">
                    <RolePopup name={memberName} role={role}/>
                </div>
                {/* <RolePopup /> */}
                {/* <KickMemberPopup name={memberName}/> */}
            </div>
        </div>
    )

}