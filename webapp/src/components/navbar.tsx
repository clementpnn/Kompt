import { Routes, Route, Outlet, Link } from "react-router-dom";
import { ButtonInterface } from "../interfaces/interfaces";
import Button from '../components/button/button';

const Navbar = () => {
    const buttonJoin : ButtonInterface = {
        text : "Join Group",
        style: "outline",
        color: "primary",
        icon: undefined
    }
    const buttonCreate : ButtonInterface = {
        text : "Create Group",
        style: "fill",
        color: "primary",
        icon: undefined
    }
    return (
        <div>
        {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
            <nav>
                <div>
                    <Link to="/">Kompt</Link>
                </div>
                <div>
                    <Button props={buttonJoin} />
                    <Button props={buttonCreate} />
                </div>

            </nav>
            <Outlet />
        </div>
    );
}

export default Navbar