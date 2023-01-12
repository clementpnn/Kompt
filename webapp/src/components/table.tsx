import { Routes, Route, Outlet, Link } from "react-router-dom";

// import TableRow from '../components/tableRow'
export default function Table() {
    return (
    <div className="pt-20 h-screen px-20">
        <table className="table w-full">
            <thead>
                <tr>
                    <th className="bg-white">Refund</th>
                    <th className="bg-white">Loading</th>
                    <th className="bg-white">Amount</th>
                    <th className="bg-white">Status</th>
                    <th className="bg-white">Date</th>
                </tr>
            </thead>
            <tbody>
                {/* <TableRow /> */}
            </tbody>
        </table>
        <Outlet />
    </div>
    )
}