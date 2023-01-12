import { Routes, Route, Outlet, Link } from "react-router-dom";

import Table from '../components/table'
import HeaderGroup from '../components/headerGroup'

export default function Landing() {
    return (
        <div>
            <HeaderGroup groupName={"Test"} groupId={2} groupMemberNumber={4}/>
            {/* <Table /> */}
            <Outlet />
        </div>
    )
}