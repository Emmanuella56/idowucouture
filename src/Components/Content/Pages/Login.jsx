import { NavLink, Outlet } from "react-router-dom"

const AuthLayout = () => {

    return (
        <div>
            <NavLink to="auth" ></NavLink>
            <Outlet />
        
        </div>
    )
}

export default AuthLayout