
import Table from "../components/table"
import HeaderGroup from '../components/headerGroup'
import HeaderUser from "../components/headerUser"
import { Outlet } from "react-router-dom"
import SideBarPopup from "../components/pop-up/sideBarPopup"
import { useState } from "react"


export default function Landing() {

    return (
        <div>
            <SideBarPopup />
            <HeaderGroup groupName={"Nom du groupe"} groupId={2} groupMemberNumber={4}/>
            <HeaderUser username={"mon pseudo"} loanValue={4} debtValue={12.00}/>
            <Table />
            <Outlet />
        </div>
    )
}