import { Routes, Route, Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
        {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
            <nav>
                <div>
                    <Link to="/">Kompt</Link>
                </div>
                <div>
                    <button>Join Group</button>
                    <button>Create Group</button>
                </div>
                {/* <div>
                    <p>Profil</p>
                </div> */}

            </nav>
    
            <Outlet />
        </div>
    );
}

export default Navbar