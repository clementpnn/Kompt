
import Table from "../components/table"
import HeaderGroup from '../components/headerGroup'
import HeaderUser from "../components/headerUser"
import { Outlet } from "react-router-dom"
import { RefundGroup } from "../interfaces/interfaces"



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
        <div>
            <HeaderGroup groupName={"Nom du groupe"} groupId={2} groupMemberNumber={4}/>
            <HeaderUser username={"Vicoh"} loanValue={4} debtValue={12.00}/>
            <Table header={header} tab={tableauRefund} />
            <Outlet />
        </div>
    )
}