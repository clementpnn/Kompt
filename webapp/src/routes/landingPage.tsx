
import HeaderGroup from '../components/headerGroup'
import { Outlet, useNavigate } from "react-router-dom"
import SideBarPopup from "../components/pop-up/sideBarPopup"
import { GroupHeader } from "../interfaces/interfaces"
import LeaveGroupPopup from "../components/pop-up/leaveGroupPopup"
import LogoutPopup from "../components/pop-up/logoutPopup"
import { useEffect, useState } from "react"
import { userStore } from "../stores/store"
import GroupTable from "../components/table/groupTable"
import BreadCrumbs from '../components/breadcrumbs'
import DeleteGroupPopup from '../components/pop-up/deleteGroupPopup'



export default function Landing() {

    const getJwt = userStore((state) => state.token)
    const getGroup = userStore((state) => state.group)
    const setAdmin = userStore((state) => state.setAdmin)
    const navigate = useNavigate()

    const [groupData, setGroupData] = useState<GroupHeader>({
        name: "",
        member: 0,
        admin: 0,
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
                    admin: data.isAdmin,
                    refund: data.data,
                    code: data.collocationCode,
                })
                setAdmin(data.isAdmin)     
            })
        }
    })

    const header: string[] = ["Refund", "Loading", "Amount", "Status", "Date"]
        
    return (
        <>
            <SideBarPopup />
            <LeaveGroupPopup />
            <LogoutPopup />
            <DeleteGroupPopup/>

            <div className="mb-5 mx-20 pt-28">
                <BreadCrumbs page=""/>   
            </div> 
            
            <HeaderGroup group={groupData}/>
            <GroupTable header={header} obj={groupData} />

            <Outlet />
        </>
    )
    
}