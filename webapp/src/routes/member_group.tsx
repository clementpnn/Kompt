import { Outlet } from "react-router-dom"
import BreadCrumbs from "../components/breadcrumbs"
import Member from "../components/member"
import SideBarPopup from "../components/pop-up/sideBarPopup"
import LeaveGroupPopup from "../components/pop-up/leaveGroupPopup"
import LogoutPopup from "../components/pop-up/logoutPopup"
import DeleteGroupPopup from "../components/pop-up/deleteGroupPopup"



export default function GroupMember() {

    return (
        <>
            <SideBarPopup />
            <LeaveGroupPopup />
            <LogoutPopup />
            <DeleteGroupPopup/>

            
            <div className="mb-5 mx-20 pt-28">
                <BreadCrumbs page="Members"/>   
            </div> 
            
            <div className=" mx-20 text-title4 font-bold bg-white border-y py-5 mb-14">
                <p>Members List</p>
            </div> 

            <Member memberName="Member1" role="admin"/>
            <Member memberName="Member2" role="user"/>
            <Member memberName="Member3" role="user"/>

            <Outlet />
        </>
    )
    
}

