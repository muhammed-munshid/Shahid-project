import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { mainUrl } from '../../../API/Api';
import Navbar from '../Navbar';

function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const adminData = { email, password };

    const verifyLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${mainUrl}login`, adminData);
            console.log(response.data);
            
            if (response.data.success) {
                toast.success(response.data.message);
                navigate('/staffs');
                localStorage.setItem('token', response.data.data);
            } else if(response.data.notExist) {
                toast.error(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <h2 className="mt-6 text-center text-3xl font-semibold text-white">
                        Admin Login
                    </h2>
                    <form onSubmit={verifyLogin} className="mt-8 space-y-6">
                        <div className="rounded-md shadow-sm space-y-4">
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
                        <div className=" text-gray-400">
                            <div className="flex justify-center">
                                <div className="w-3/4 sm:w-1/2 md:w-2/3 lg:w-2/4">
                                    <p className="inset-y-0 left-0 ">No register in account?</p>
                                </div>
                                <div className="">
                                    <Link to="/signUp" className="ps-3 text-lg text-right hover:underline hover:text-gray-100">Sign Up</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div >
            </div >
        </div >
    );
}

export default AdminLogin;
