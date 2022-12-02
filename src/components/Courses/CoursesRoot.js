import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import CoursePage from './CoursePage';

const CoursesRoot = () => {

    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch(`https://b610-learning-platform-server-side-kanizfatima2.vercel.app/categories`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    // console.log(categories)

    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">

                    <Outlet></Outlet>



                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content font-bold">
                        {/* <!-- Sidebar content here --> */}
                        {/* <li><Link to='/courses'>My Orders</Link></li> */}

                        {
                            categories?.map(c => <CoursePage key={c.id} category={c}></CoursePage>)
                        }



                    </ul>

                </div>
            </div>

            {/* <Footer></Footer> */}
        </div>
    );
};

export default CoursesRoot;