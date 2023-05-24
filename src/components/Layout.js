import { NavLink, Outlet } from "react-router-dom";
import css from "./Layout.module.css";

export const Layout = () => {
    return (
        <>
            <nav>
                <ul className={css.layoutul}>
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
