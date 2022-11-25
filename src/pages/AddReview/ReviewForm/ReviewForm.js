import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const ReviewForm = ({service}) => {
    const {user} = useContext(AuthContext);
    const { serviceName, _id } = service;
    const handleAddReview = (event) =>{
        event.preventDefault();
        const form = event.target;
        const reviewText = form.reviewText.value;
        const email = form.email.value;
        const userImage = user?.photoURL;
        const userName = user?.displayName;
        const service = _id;
        const serviceName = form.serviceName.value;
        console.log(reviewText, userImage, email, service);
        const review = {
            reviewText,
            email,
            userImage,
            userName,
            service,
            serviceName
        }
        fetch('https://tripify-server-indol.vercel.app/reviews',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Review placed successfully')
                form.reset();
                
            }
            console.log(data)
        })
    }
    return (
        <div>
            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 drop-shadow-2xl">
                <form onSubmit={handleAddReview} className="card-body">
                    <h2 className='text-center text-4xl'>Add Your Review</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Review</span>
                        </label>
                        <textarea name='reviewText' className="textarea textarea-bordered" placeholder="Review"></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input type="text" name='serviceName' defaultValue={serviceName} placeholder="Service Name" className="input input-bordered" readOnly/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' defaultValue={user?.email} placeholder="Email" className="input input-bordered" readOnly/>
                    </div>
                    
                    <div className="form-control my-2">
                        <button className="btn border-none bg-sky-500 hover:bg-sky-900">Submit</button>
                    </div>
                </form>
            
            </div>
            
        </div>
    );
};

export default ReviewForm;