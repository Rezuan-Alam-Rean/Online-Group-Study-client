import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

import { useContext } from "react";

import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navItems = (
        <>
            <li>
                <Link className=" font-bold" to="/">Home</Link>
            </li>
            <li>
 <Link to="/Assignments">Assignments </Link>
            </li>
            {user && <>
                <li>
                    {" "}
 <Link to="/SubmitAssignment">Create Assignment </Link>
                </li>
                <li>
  <Link to="/MyAssignment">My Assignment</Link>
                </li>
                <li>
                    <Link to="/SubmitAssignment">Submitted Assignment</Link>

                </li>
                <li>
               <Link to="/updatedAssignments">Updated Assignment</Link>
                </li>
            </>}



        </>
    );
    const handleLogOut = () => {
        logout()
            .then(() => {
                Swal.fire({
                    title: 'success!',
                    text: 'Logout Succesfull',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    return (
        <div className="navbar bg-base-200 h-28">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >

                        {navItems}
                    </ul>
                </div>

                <img src={logo} style={{ width: "80px" }} />



            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>

            <div className="navbar-end">
                <label className=" mr-5">
                    {user && <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                        <img style={{ width: "50px" }} className="w-50 rounded-full circle" src={user?.photoURL} />
                    </div>}
                </label>
                {user ? <button onClick={handleLogOut} className="btn">LogOut</button>
                    : <Link to="/login" className="btn">Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;
