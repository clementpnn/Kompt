import { Outlet } from "react-router-dom"
import BreadCrumbs from "../components/breadcrumbs"
import Member from "../components/member"
import SideBarPopup from "../components/pop-up/sideBarPopup"
import LeaveGroupPopup from "../components/pop-up/leaveGroupPopup"
import LogoutPopup from "../components/pop-up/logoutPopup"


export default function GroupMember() {

            
    return (
        <>
            <SideBarPopup />
            <LeaveGroupPopup />
            <LogoutPopup />
            <div className="mb-5 mx-20 pt-28">
                <BreadCrumbs page="Members"/>   
            </div> 
            
            <div className=" mx-20 border-b py-5 text-title4 font-bold">
                <p>Members List</p>
            </div> 

{/* quand je clique sur kick en choisissant member 3, le nom afficher sera member1 -> A CORRIGER */}
{/* Idem pour role */}
            <Member memberName="Member1" role="admin"/>
            <Member memberName="Member2" role="user"/>
            <Member memberName="Member3" role="user"/>

            <Outlet />
        </>
    )
    
}

