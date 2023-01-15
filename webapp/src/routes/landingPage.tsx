import Table from "../components/table"
import HeaderGroup from '../components/headerGroup'
import { Outlet, useNavigate } from "react-router-dom"
import SideBarPopup from "../components/pop-up/sideBarPopup"
import { GroupHeader } from "../interfaces/interfaces"
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

    const [groupData, setGroupData] = useState<GroupHeader>({
        name: "",
        member: 0,
        user: "",
        debt: 0,
        refund: [],
        code: "",
    })
    useEffect(() => {
        if (getJwt == "" || getGroup == false) {
          navigate("/");
        } else {
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
                setGroupData({
                    name: data.collocationName,
                    member: data.peoples,
                    user: data.userName,
                    debt: data.toPay,
                    refund: data.data,
                    code: data.collocationCode,
                })
                
            })
        }
    })


    const header: string[] = ["Refund", "Loading", "Amount", "Status", "Date"]

            
    return (
        <>
            <SideBarPopup />
            <LeaveGroupPopup />
            <LogoutPopup />
            <HeaderGroup group={groupData}/>
            <Table header={header} tab={groupData.refund} />
            <Outlet />
        </>
    )
    
}