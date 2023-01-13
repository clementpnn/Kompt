import { Outlet, Link } from "react-router-dom";
import {ReactComponent as Menu} from '../assets/icon/menu.svg';
import CreateGroupPopup from "./pop-up/createGroupPopup";
import JoinGroupPopup from "./pop-up/joinGroupPopup";
// import { LabelInterface } from "../interfaces/interfaces";
// import Label from "./label";



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
            <a href="/login" className="font-os text-large font-bold mr-10">Log In</a>
            <a href="/register" className="font-os text-large font-bold">Sign In</a>
        </>
    )
}

function NavbarInGroup() {
    // const labelLeaveGroup : LabelInterface = {
    //     text: "Button",
    //     style: "fill",
    //     color: "primary",
    //     htmlFor: 'drawer',
    //     icon: '../assets/icon/backPrimary.svg' 
    // }
    return (
        <>
            {/* <Label props={labelLeaveGroup}/> */}
            <label htmlFor="drawer"><Menu /></label>
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
                        <Link to="/" className="font-os font-bold text-title4 text-primary">Kompt</Link>
                    </div>
                    <div className="flex-none">
                        {isLogged ? (
                            <>
                                
                                {isGroup ? (
                                    <NavbarInGroup />
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

