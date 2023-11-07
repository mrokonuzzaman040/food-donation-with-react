import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { AuthContex } from '../../../Providers/AuthProvider';

const Register = () => {

    const { createUser, upDateProfile, signInWithGoogle } = useContext(AuthContex);
    const lcoate = useLocation();
    const navogate = useNavigate()

    // Create User with google
    const handelGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                upDateProfile(result.user.displayName, result.user.photoURL)
                    .then(result => {
                        toast.success('Login Successfully');
                    })
                    .catch(error => {
                        toast.error(error.message);
                    })
                navogate(lcoate?.state ? lcoate.state : '/profile');
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    // Create User with email and password
    const handelRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const name = form.get('name');
        const photo = form.get('photourl');
        const email = form.get('email');
        const password = form.get('password');
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6,}$/;

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long');
        } else if (!passwordRegex.test(password)) {
            toast.error('Password must contain at least one capital letter, one special character, and one number');
        } else {
            createUser(email, password)
                .then(result => {
                    upDateProfile(name, photo)
                        .then(result => {
                            toast.success('Register Successfully');
                        })
                        .catch(error => {
                            toast.error(error.message);
                        })
                    navogate(lcoate?.state ? lcoate.state : '/');
                })
                .catch(error => {
                    toast.error(error.message);
                })
        }
    }

    return (
        <div className="relative overflow-hidden">
            <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8">
                <div className="md:pr-8 md:w-1/2 xl:pr-0 xl:w-5/12">

                    <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight dark:text-gray-200">
                        Register for <span className="text-blue-600 dark:text-blue-500">Donate</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500">
                        Donate your extra food to help those in need. Sharing is caring, and it can make a significant difference in someone's life.
                    </p>

                    <div className="mt-8 grid">
                        <Link onClick={handelGoogleLogin} type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                            <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                                <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4" />
                                <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853" />
                                <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05" />
                                <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335" />
                            </svg>
                            Sign up with Google
                        </Link>
                    </div>

                    <div className="py-6 flex items-center text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:mr-6 after:flex-[1_1_0%] after:border-t after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or</div>


                    <form onSubmit={handelRegister}>
                        <div className="mb-4">
                            <label for="hs-hero-name-2" className="block text-sm font-medium dark:text-white"><span className="sr-only">Full name</span></label>
                            <input name='name' type="text" id="hs-hero-name-2" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Full name" />
                        </div>

                        <div className="mb-4">
                            <label for="hs-hero-name-2" className="block text-sm font-medium dark:text-white"><span className="sr-only">Photo URL</span></label>
                            <input name='photourl' type="text" id="hs-hero-name-2" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Photo URL" />
                        </div>

                        <div className="mb-4">
                            <label for="hs-hero-email-2" className="block text-sm font-medium dark:text-white"><span className="sr-only">Email address</span></label>
                            <input name='email' type="email" id="hs-hero-email-2" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Email address" />
                        </div>

                        <div className="mb-4">
                            <label for="hs-hero-password-2" className="block text-sm font-medium dark:text-white"><span className="sr-only">Password</span></label>
                            <input name='password' type="password" id="hs-hero-password-2" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Password" />
                        </div>

                        <div className="grid">
                            <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 sm:p-4">Sign Up</button>
                        </div>

                        <div className="py-6 flex items-center text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:mr-6 after:flex-[1_1_0%] after:border-t after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or</div>

                        <div className="grid">
                            <Link className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 sm:p-4" to={'/login'}>Sign In</Link>
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            </div>

            <div className="hidden md:block md:absolute md:top-0 md:left-1/2 md:right-0 h-full bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80')] bg-no-repeat bg-center bg-cover"></div>
        </div>
    );
};

export default Register;