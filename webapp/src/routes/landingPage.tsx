import { Routes, Route, Outlet, Link } from "react-router-dom";

import Table from '../components/table'
export default function Landing() {
    return (
        <div>
            <Table />
            <Outlet />
        </div>
    )
}