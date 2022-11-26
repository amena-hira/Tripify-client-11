import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import TopHeadSocial from './TopHeadSocial';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div className='bg-cyan-600 text-white'>
            <div className='max-w-screen-xl py-3 mx-auto'>
                <TopHeadSocial></TopHeadSocial>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-cyan-600 rounded-box w-52">
                                <li><Link to='/blog'>Blog</Link></li>  
                                {
                                    user? 
                                    <>
                                        <li><Link to='/addservice'>Add Service</Link></li>
                                        <li><Link to='/myreview'>My Reviews</Link></li>
                                        <li><Link onClick={handleLogOut}>logout</Link></li>
                                    </>
                                    :
                                    <li><Link to='/login'>Login</Link></li>
                                }
                            </ul>
                        </div>
                        <Link to='/' className="btn btn-ghost normal-case lg:text-4xl font-serif italic tracking-widest">Tripify</Link>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li><Link to='/blog'>Blog</Link></li>  
                                {
                                    user? 
                                    <>
                                        <li><Link to='/addservice'>Add Service</Link></li>
                                        <li><Link to='/myreview'>My Reviews</Link></li>
                                        <li><Link onClick={handleLogOut}>logout</Link></li>
                                    </>
                                    :
                                    <li><Link to='/login'>Login</Link></li>
                                }
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;
