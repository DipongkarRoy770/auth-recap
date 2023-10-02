import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    //console.log(user)
    const handleLogOut = () => {
        logOut()
        alert('ami logout kore dilam')
    }
    const navInfo = <>
        <li className="mr-3 bg-red-500 rounded-sm">
            <NavLink
                to="/"
                className={({ isActive, }) => isActive ? "active" : "default"
                }
            >
                Home
            </NavLink>
        </li>
        <li className="mr-3 bg-red-500 rounded-sm">
            <NavLink
                to="/login"
                className={({ isActive, }) => isActive ? "active" : "default"
                }
            >
                Login
            </NavLink>
        </li>
        <li className="mr-3 bg-red-500 rounded-sm">
            <NavLink
                to="/register"
                className={({ isActive, }) => isActive ? "active" : "default"
                }
            >
                Register
            </NavLink>
        </li>
        {
            user && <li className="mr-3 bg-red-500 rounded-sm">
                <NavLink
                    to="/order"
                    className={({ isActive, }) => isActive ? "active" : "default"
                    }
                >
                    Order
                </NavLink>
            </li>
        }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navInfo}
                    </ul>
                </div>
                <h3 className="text-orange-400 font-semibold text-3xl">daisyUI</h3>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navInfo}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <span className="mr-2">{user.email}</span>

                        <div className="avatar mr-2">
                            <div className="w-12 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <button className="btn btn-success" onClick={handleLogOut}>LogOut</button>
                    </> :
                        <Link to='/login'>
                            <button className="btn btn-warning">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Header;