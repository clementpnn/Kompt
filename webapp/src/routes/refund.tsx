import { useEffect, useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import HeaderExpense from "../components/headerExpense"
import { RefundGroup } from "../interfaces/interfaces"
import { useNavigate } from "react-router-dom"
import { userStore } from "../stores/store"
import RefundTable from "../components/table/refundTable"
import BreadCrumbs from "../components/breadcrumbs"
import LeaveGroupPopup from "../components/pop-up/leaveGroupPopup"
import LogoutPopup from "../components/pop-up/logoutPopup"
import SideBarPopup from "../components/pop-up/sideBarPopup"
import DeleteGroupPopup from "../components/pop-up/deleteGroupPopup"



export default function Refund() {

    const location = useLocation()
    const navigate = useNavigate()

    const getJwt = userStore((state) => state.token)
    const getGroup = userStore((state) => state.group)


    const send = location.state

    const [refundData, setRefundData] = useState<RefundGroup>({
        id: 0,
        title: "",
        paid: 0,
        payers_amount: 0,
        date: "",
        members: [
            {
            id: 0,
            name: "",
            paid: 0,
            payers_amount: 0,}
        ]
    })

    const header : string[] = ["Member", "Loading", "Amount", "Status"]
    useEffect(() => {

        if (getJwt == "" || getGroup == false) {
          navigate("/");
        } else {
            fetch("http://localhost:2329/refund", {
                method: "POST",
                mode: "cors",
                credentials: "include",
                body: new URLSearchParams({
                    "id": send.id
                }),
                headers: {
                    Authorization: "Bearer " + getJwt,
                },
            })

            .then((response) => response.json())
            .then((data) => {
                setRefundData({
                    id: data.id,
                    title: data.title,
                    paid: data.totalPays,
                    payers_amount: data.amount,
                    date: data.date,
                    members: data.pays
                })
            })
        }
    })

    return (
        <>
            <SideBarPopup />
            <LeaveGroupPopup />
            <LogoutPopup />
            <DeleteGroupPopup/>


            <div className="mb-5 mx-20 pt-28">
                <BreadCrumbs page="Expenses"/>   
            </div> 
            
            <HeaderExpense refund={refundData}/>
            <RefundTable header={header} obj={refundData}/>
            <Outlet />
        </>
    )
    
}