import { Outlet, useLocation } from "react-router-dom";
import HeaderExpense from "../components/headerExpense";
import Table from "../components/table";
import { RefundGroup } from "../interfaces/interfaces";






export default function Refund(){
    const location = useLocation();
    const id : number = location.state.id
    const refund : RefundGroup = {
        id: id,
        name: "Refund de la bouffe",
        expense: 10,
        amount: 20,
        date: "Jan 11, 2022"
    }
    const header : string[] = ["Member", "Loading", "Amount", "Status"]
    const tableauRefund : RefundGroup[]= [
        {   
            id: 0,
            name: "Vico",
            expense: 10,
            amount: 20,
        },
        {   
            id: 1,
            name: "Ici",
            expense: 30,
            amount: 30,
        },
        {   
            id: 2,
            name: "Test",
            expense: 15,
            amount: 25,
        },
    ]
    return (
        <>
            <div className="pt-32">
                <HeaderExpense refund={refund}/>
                <Table header={header} tab={tableauRefund}/>
            </div>
            <Outlet />
        </>
    )
}