
import Table from "../components/table"
import HeaderGroup from '../components/headerGroup'
import HeaderUser from "../components/headerUser"
import { Outlet } from "react-router-dom"
import SideBarPopup from "../components/pop-up/sideBarPopup"
import { RefundGroup } from "../interfaces/interfaces"
import LeaveGroupPopup from "../components/pop-up/leaveGroupPopup"
import LogoutPopup from "../components/pop-up/logoutPopup"


export default function Landing() {
    const header: string[] = ["Refund", "Loading", "Amount", "Status", "Date"]
    const tableauRefund : RefundGroup[]= [
        {   
            id: 0,
            name: "Refund de la bouffe",
            expense: 10,
            amount: 20,
            date: "Jan 11, 2022"
        },
        {   
            id: 1,
            name: "Refund de la wifi",
            expense: 30,
            amount: 30,
            date: "Fev 24, 2022"
        },
        {   
            id: 2,
            name: "Soirée halloween",
            expense: 15,
            amount: 25,
            date: "Jan 17, 2022"
        },
    ]
            
    return (
        <>
            <SideBarPopup />
            <LeaveGroupPopup />
            <LogoutPopup />
            <HeaderGroup groupName={"Nom du groupe"} groupId={2} groupMemberNumber={4}/>
            <HeaderUser username={"UsernameHere"} loanValue={4} debtValue={12.00}/>
            <Table header={header} tab={tableauRefund} />
            <Outlet />
        </>
    )
}
