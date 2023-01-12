import { Routes, Route, Outlet, Link } from "react-router-dom";

// import Logout from '../assets/icon/logout.svg'



export default function HeaderGroup({groupName, groupId, groupMemberNumber}:{groupName: string, groupId: number, groupMemberNumber:number}) {
    return (
        <div className="px-20 border-b w-full fixed bg-white z-10">
        
            <div className="navbar bg-base-100 p-0">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost normal-case text-xl">Kompt</Link>
                </div>
                <div className="flex-none">
                    <button className="btn btn-ghost">Log In</button>
                    <button className="btn btn-ghost">Sign In</button>
                </div>
            </div>
            
        </div>
    )
}

