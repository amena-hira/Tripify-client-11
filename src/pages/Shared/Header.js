import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import TopHeadSocial from './TopHeadSocial';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error => console.log(error))
    }
    return (
        <div className='bg-cyan-600 text-white'>
            <div className='max-w-screen-xl py-3 mx-auto'>
                <TopHeadSocial></TopHeadSocial>
                <div className="navbar ">
                    <div className="flex-1">
                        <Link to='/' className="btn btn-ghost normal-case lg:text-4xl font-serif italic tracking-widest">Tripify</Link>
                    </div>
                    <div className="flex-none">
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