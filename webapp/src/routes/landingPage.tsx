import Table from "../components/table"
import HeaderGroup from '../components/headerGroup'
import HeaderUser from "../components/headerUser"
import { Outlet, useNavigate } from "react-router-dom"
import SideBarPopup from "../components/pop-up/sideBarPopup"
import { RefundGroup } from "../interfaces/interfaces"
import LeaveGroupPopup from "../components/pop-up/leaveGroupPopup"
import LogoutPopup from "../components/pop-up/logoutPopup"
import { useEffect, useState } from "react"
import { userStore } from "../stores/store"




export default function Landing() {
    var url = document.location.href; 
    const endOfUrl = url.substring (url.lastIndexOf( "/" )+1 );


    const getJwt = userStore((state) => state.token);
    const getGroup = userStore((state) => state.group);
    const navigate = useNavigate();

    

    let groupName : string = "";
    let groupMember : number = 0;
    let groupUser : string = "";
    let groupDebt : number | null = null;
    const [member, setMember] = useState()
    useEffect(() => {
        if (getJwt == "" || getGroup == false) {
          navigate("/");
        } 
    });
    fetch("http://localhost:2329/dashboard", {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          Authorization: "Bearer " + getJwt,
        },
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.peoples)
        // groupName = data.colocatioName.name
        // groupMember = data.peoples
        // setMember(data.member)
        // groupUser = data.userName
        // groupDebt = data.toPay

      })


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
            <HeaderGroup groupName={groupName} groupMemberNumber={groupMember}/>
            <HeaderUser username={"UsernameHere"} debtValue={12.00}/>
            <Table header={header} tab={tableauRefund} />
            <Outlet />
        </>
    )
    
}