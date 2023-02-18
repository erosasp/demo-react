import { Link, Outlet } from "@tanstack/react-router";

const NavBar = () => {
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly'
            }}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
            <hr />
            <Outlet />
        </>
    )
}

export default NavBar;