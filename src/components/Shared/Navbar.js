import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authentication/Context/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);


    const handlelogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))

    }


    const menuItems = <>
        <li className='font-bold'><Link to="/">Home</Link></li>
        <li className='font-bold'><Link to="/courses">Courses</Link></li>
        <li className='font-bold'><Link to="/blogs">Blogs</Link></li>
        <li className='font-bold'><Link to="/faq">FAQ</Link></li>

        {
            user?.uid ?
                <>
                    <li className='font-bold'><Link onClick={handlelogOut}>Logout</Link></li>
                </>
                :
                <>
                    <li className='font-bold'><Link to="/login">Login</Link></li>
                    <li className='font-bold'><Link to="/signup">SignUp</Link></li></>
        }

    </>



    return (
        <div>
            <div className="navbar bg-base-100 shadow-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-400 rounded-box w-52">
                            {menuItems}
                        </ul>

                    </div>
                    <img className='w-12' src="https://3.imimg.com/data3/DV/NR/MY-4264932/education-related-solutions-250x250.png" alt="" />
                    <Link to='/' className="btn btn-ghost normal-case text-xl lg:mx-1 pl-1 font-bold text-teal-800">EduCine</Link>



                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                        {
                            user ?
                                <><div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt="" />
                                </div></>
                                : <></>
                        }
                    </ul>
                </div>

                {/* Dashboard SideBar Button  */}

                <div className='mx-auto mr-0'>
                    <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>

                {/* User Profile pic  */}
                {
                    user ?
                        <><div className="w-10 rounded-full lg:hidden  mx-auto mr-0 ml-4">
                            <img src={user?.photoURL} alt="" />
                        </div></>
                        : <></>
                }

            </div>
        </div>
    );
};

export default Navbar;