import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('Login')
    const {login, googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn =() =>{
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user);
            const currentUser = {
                email: user.email
            }
            fetch('https://tripify-server-indol.vercel.app/jwt',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data.token);
                localStorage.setItem('tripify-token', data.token);
                navigate(from, { replace: true });
            })
        })
        .catch(error => console.log(error));
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        login(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            const currentUser = {
                email: user.email
            }
            fetch('https://tripify-server-indol.vercel.app/jwt',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data.token);
                localStorage.setItem('tripify-token', data.token);
                navigate(from, { replace: true });
            })
            
        })
        .catch(error => console.log(error));
    }
    return (
        <div className='flex justify-center pt-12 '>
            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 drop-shadow-2xl">
                <form onSubmit={handleLogin} className="card-body">
                    <h2 className='text-center text-4xl'>Login</h2>
                    <div className='flex justify-center my-4'>
                        <FaGoogle onClick={handleGoogleSignIn} className='text-green-700'></FaGoogle>
                    </div>
                    <div className='flex justify-center'>
                        Or with
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control my-2">
                        <button className="btn border-none bg-sky-500 hover:bg-sky-900">Login</button>
                    </div>

                    <div className='my-4'>
                        <h4 className='text-center'>Are you new in Tripify?<Link to='/signup' className='btn-link text-sky-900'>Sign up</Link> </h4>
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default Login;