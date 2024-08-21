
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import Navbar from '../Navbar';
import { mainUrl } from '../../API/Api';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const managerData = {
        name, email, mobile, password,
    };


    const verifySignUp = async (e) => {
        e.preventDefault();
        try {
            axios.post(`${mainUrl}signUp`, managerData)
                .then(async (response) => {
                    if (response.data.success) {
                        toast.success(response.data.message);
                        navigate('/');
                    } else if (response.data.exist) {
                        toast.error(response.data.message);
                        navigate('/');
                    } else {
                        toast.error('something error');
                        navigate('/signUp');
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
            toast.error('something error');
        }
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
                <Toaster toastOptions={{ duration: 4000 }} />
                <div className="max-w-md w-full space-y-8">
                    <h2 className="mt-6 text-center text-3xl font-semibold text-white">
                        SignUp
                    </h2>
                    <form onSubmit={verifySignUp} className="mt-8 space-y-6">
                        <div className="rounded-md shadow-sm space-y-4">
                        <div className="flex justify-center">
                                <div className="w-3/4 sm:w-1/2 md:w-2/3 lg:w-3/4">
                                    <label htmlFor="name" className="sr-only">Name</label>
                                    <input
                                        type="name"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                        required
                                        className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white bg-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <div className="w-3/4 sm:w-1/2 md:w-2/3 lg:w-3/4">
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        required
                                        className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white bg-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <div className="w-3/4 sm:w-1/2 md:w-2/3 lg:w-3/4">
                                    <label htmlFor="email" className="sr-only">Mobile</label>
                                    <input
                                        type="number"
                                        name="mobile"
                                        id="mobile"
                                        placeholder="Mobile"
                                        required
                                        className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white bg-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <div className="w-3/4 sm:w-1/2 md:w-2/3 lg:w-3/4">
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        required
                                        className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white bg-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-3/4 sm:w-1/2 md:w-2/3 lg:w-3/4">
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </form>
                </div >
            </div >
        </>
    );
}

export default SignUp;
