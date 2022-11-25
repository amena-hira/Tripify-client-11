import React from 'react';
import useTitle from '../../hooks/useTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Service = () => {
    useTitle('Add Service');
    const notify = () => toast("Added successfully!");
    const handleSubmitService = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const price = form.price.value;
        const details = form.details.value;
        console.log(name, photoURL, price, details);
        const service = {
            serviceName: name,
            image: photoURL,
            price,
            details
        }
        fetch('http://localhost:5000/services',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                notify();
                form.reset();
                
            }
            console.log(data)
        })
    }
    return (
        <div className='flex justify-center pt-8 '>
            <ToastContainer />
            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 drop-shadow-2xl">
                <form onSubmit={handleSubmitService} className="card-body">
                    <h2 className='text-center text-4xl'>Add A Service</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <textarea name='details' className="textarea textarea-bordered" placeholder="Service Details"></textarea>
                    </div>
                    <div className="form-control my-2">
                        <button className="btn border-none bg-sky-500 hover:bg-sky-900">Submit</button>
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default Service;