import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube} from 'react-icons/fa';

const TopHeadSocial = () => {
    return (
        <div className='flex justify-between px-6'>
            <div>
                <h2>Phone: +33789654340</h2>
            </div>
            <div className='flex gap-2'>
                <div className='border p-1 rounded-full'>
                    <FaInstagram></FaInstagram>
                </div>
                
                <div className='border p-1 rounded-full'>
                    <FaFacebookF></FaFacebookF>
                </div>

                <div className='border p-1 rounded-full'>
                    <FaYoutube></FaYoutube>
                </div>
            </div>
        </div>
    );
};

export default TopHeadSocial;