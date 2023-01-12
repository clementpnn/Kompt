import { Routes, Route, Outlet, Link } from "react-router-dom";
import { ButtonInterface } from "../interfaces/interfaces";
import Button from '../components/button/button';

// import Logout from '../assets/icon/logout.svg'

function NavbarLog() {
    const buttonJoin : ButtonInterface = {
        text: 'Join Group',
        style: 'outline',
        color: 'primary',
        icon: undefined
    }
    const buttonCreate : ButtonInterface = {
        text: 'Create Group',
        style: 'fill',
        color: 'primary',
        icon: undefined
    }
    return (
        <div className="px-20 border-b w-full fixed bg-white z-10">
        
            <div className="navbar bg-base-100 p-0">
                <div className="flex-1">
                    <Link to="/" className="normal-case text-xl">Kompt</Link>
                </div>
                <div>
                    <div className="mr-2">
                        <Button props={buttonJoin}/>   
                    </div>
                              
                    <Button props={buttonCreate}/>
                    {/* <button><img src={Logout} alt="Your SVG" /></button> */}
                </div>
            </div>
            
        </div>
    )
}

function NavbarNotLog() {
    const buttonRegister : ButtonInterface = {
        text: 'Register',
        style: 'outline',
        color: 'primary',
        icon: undefined
    }
    const buttonLogin : ButtonInterface = {
        text: 'Login',
        style: 'fill',
        color: 'primary',
        icon: undefined
    }
    return (
        <div className="px-20 border-b w-full fixed bg-white z-10">
        
            <div className="navbar bg-base-100 p-0">
                <div className="flex-1">
                    <Link to="/" className="normal-case text-xl">Kompt</Link>
                </div>
                <div>
                    <div className="mr-2">
                        <Button props={buttonRegister}/>
                    </div>
                    <Button props={buttonLogin}/>
                </div>
            </div>
            
        </div>
    )
}








export default function Navbar() {
    
    const isLogged = false;
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
