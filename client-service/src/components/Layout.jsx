import { NavLink, Outlet} from "react-router-dom";
import '../index.css'


const setActive = ({isActive})=> isActive ? 'active-link':''

const Layout = () => {
    return (
        <>
        <div className="Header">
            <NavLink to='/' className={setActive}>Main</NavLink>
            <NavLink to='/auth' className={setActive}>Auth</NavLink>
            <NavLink to='/login'className={setActive}>Login</NavLink>
        </div>
        <Outlet/>
        <footer className="Footer">Reserved</footer>
        </>
    )
}

export {Layout}