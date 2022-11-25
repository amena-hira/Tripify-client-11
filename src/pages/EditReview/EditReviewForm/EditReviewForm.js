import React from 'react';
import { useNavigate } from 'react-router-dom';

const EditReviewForm = ({review, service}) => {
    const {_id, reviewText, serviceName, email} = review;
    const navigate = useNavigate();
    const handleUpdateReview = (event) =>{
        event.preventDefault();
        const form = event.target;
        const reviewText = form.reviewText.value;
        fetch(`http://localhost:5000/reviews/${_id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({reviewText: reviewText})
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Review edited successfully')
                form.reset();
                navigate('/myreview');
            }
            console.log(data)
        })
    }
    return (
        <div>
            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 drop-shadow-2xl">
                <form onSubmit={handleUpdateReview} className="card-body">
                    <h2 className='text-center text-4xl'>Add Your Review</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Review</span>
                        </label>
                        <textarea name='reviewText' defaultValue={reviewText} className="textarea textarea-bordered" placeholder="Review"></textarea>
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
                        <input type="email" name='email' defaultValue={email} placeholder="Email" className="input input-bordered" readOnly/>
                    </div>
                    
                    <div className="form-control my-2">
                        <button className="btn border-none bg-sky-500 hover:bg-sky-900">Submit</button>
                    </div>
                </form>
            
            </div>
            
        </div>
    );
};

export default EditReviewForm;