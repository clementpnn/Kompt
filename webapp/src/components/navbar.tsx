import { Routes, Route, Outlet, Link } from "react-router-dom";


function NavbarLog() {
    return (
        <div className="px-20 border-b w-full fixed bg-white z-10">
        
            <div className="navbar bg-base-100 p-0">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost normal-case text-xl">Kompt</Link>
                </div>
                <div className="flex-none">
                    <button className="btn btn-ghost">Join Group</button>
                    <button className="btn btn-ghost">Create Group</button>
                </div>
            </div>
            
        </div>
    )
}

function NavbarNotLog() {
    return (
        <div className="px-20 py-2.5 border-b w-full fixed">
        
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








export default function Navbar() {
    
    const isLogged = true;
    return (
        <>
            {isLogged ? (
                <NavbarLog />
            ) : (
                <NavbarNotLog />
            )}
            <Outlet />
        </>
    );
}
