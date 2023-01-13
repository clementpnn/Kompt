import { useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import {ReactComponent as Menu} from '../assets/icon/menu.svg';
import Badge from './badge'
import CreateGroupPopup from "./pop-up/createGroupPopup";
import JoinGroupPopup from "./pop-up/joinGroupPopup";



function NavbarLog() {
    return (
        <>
            <JoinGroupPopup />
            <CreateGroupPopup />
            
        </>
    )
}

function NavbarNotLog() {
    return (
        <>
            <a href="/login" className="text-base font-bold mr-10">Log In</a>
            <a href="/register" className="text-base font-bold">Sign In</a>
        </>
    )
}

function NavInGroup() {
    return (
        <>
            <label htmlFor="my-drawer-4"><Menu /></label>
        </>
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
                        <Link to="/" className="text-2xl font-bold text-primary">Kompt</Link>
                    </div>
                    <div className="flex-none">
                        {isLogged ? (
                            <>
                                
                                {isGroup ? (
                                    <NavInGroup />
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

