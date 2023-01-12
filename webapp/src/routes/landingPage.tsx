
import Table from "../components/table/table"
import HeaderGroup from '../components/headerGroup'
import { Outlet } from "react-router-dom"

export default function Landing() {
    return (
        <div>
            <HeaderGroup groupName={"Test"} groupId={2} groupMemberNumber={4}/>
            <Table />
            <Outlet />
        </div>
    )
}