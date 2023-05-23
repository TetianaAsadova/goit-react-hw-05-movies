import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <nav>
                <ul className="layoutul">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies">Movies</NavLink>
                    </li>
                </ul>        
                      
            </nav>
             <Outlet />   
        </>     
    )
}
