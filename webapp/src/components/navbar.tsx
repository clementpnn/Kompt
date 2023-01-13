import { Routes, Route, Outlet, Link } from "react-router-dom";
import {ReactComponent as Menu} from '../assets/icon/menu.svg';
import Badge from './badge'


function NavbarLog() {
    return (
        <>
            <button className="btn btn-ghost">Join Group</button>
            <button className="btn btn-ghost">Create Group</button>
        </>
    )
}

function NavbarNotLog() {
    return (
        <>
            <a href="/login" className="font-os text-large font-bold mr-10">Log In</a>
            <a href="/register" className="font-os text-large font-bold">Sign In</a>
        </>
    )
}

function NavInGroup() {
    return (
        <Menu />
    )
}


export default function Navbar() {
    
    const isLogged = true;
    const isGroup  = true;

    return (
        <div>

            <div className="px-20 border-b w-full fixed bg-white z-10">
            
                <div className="navbar bg-base-100 p-0">
                    <div className="flex-1">
                        <Link to="/" className="font-os font-bold text-title4 text-primary">Kompt</Link>
                    </div>
                    <div className="flex-none">
                        {isLogged ? (
                            <>
                                
                                {isGroup ? (
                                    <NavbarLog />
                                ) : ( 
                                    <NavbarLog />
                                )}

                            </>
                        ) : ( 
                            <NavbarNotLog />
                        )}
                    </div>

                </div>
                
            </div>
            <Outlet/>   
        </div>
    )
}
