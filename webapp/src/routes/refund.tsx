import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import HeaderExpense from "../components/headerExpense";
import { RefundGroup } from "../interfaces/interfaces";
import { useNavigate } from "react-router-dom"
import { userStore } from "../stores/store";
import RefundTable from "../components/table/refundTable";



export default function Refund(){

    const location = useLocation();
    const navigate = useNavigate();

    const getJwt = userStore((state) => state.token);
    const getGroup = userStore((state) => state.group);


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
            <HeaderExpense refund={refundData}/>
            <RefundTable header={header} obj={refundData}/>
            <Outlet />
        </>
    )
    
}