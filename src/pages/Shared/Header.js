import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/favicon.ico';
import TopHeadSocial from './TopHeadSocial';

const Header = () => {
    return (
        <div className='bg-cyan-600 text-white'>
            <div className='max-w-screen-xl py-3 mx-auto'>
                <TopHeadSocial></TopHeadSocial>
                <div className="navbar ">
                    <div className="flex-1">
                        <Link className="btn btn-ghost normal-case lg:text-4xl font-serif italic tracking-widest">Tripify</Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal p-0">
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Header;