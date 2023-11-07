import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContex } from '../../../../Providers/AuthProvider';

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContex);

    const handelSignout = () => {
        logoutUser()
            .then(result => {
                toast.success('Logout Success');
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    return (
        <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white text-sm py-3 md:py-0 dark:bg-gray-800">
            <nav className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8" aria-label="Global">
                <div className="relative md:flex md:items-center md:justify-between">
                    <div className="flex items-center justify-between">
                        <NavLink className="flex-none text-xl font-semibold dark:text-white" to={'/'} aria-label="Brand">Extra Food</NavLink>
                        <div className="md:hidden">
                            <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                                <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                </svg>
                                <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
                        <div className="overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-y">
                            <div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:pl-7 md:divide-y-0 md:divide-solid dark:divide-gray-700">

                                <NavLink className="font-medium text-blue-600 py-3 md:py-6 dark:text-blue-500" to={'/'} aria-current="page">Home</NavLink>

                                <NavLink className="font-medium text-gray-800 hover:text-gray-600 py-3 md:py-6 dark:text-gray-200 dark:hover:text-gray-500" to={'/availablefoods'}>Available Foods</NavLink>
                                {
                                    user ? <>
                                        <NavLink className="font-medium text-gray-800 hover:text-gray-600 py-3 md:py-6 dark:text-gray-200 dark:hover:text-gray-500" to={'/addfood'}>
                                            Add Food
                                        </NavLink>

                                        <NavLink className="font-medium text-gray-800 hover:text-gray-600 py-3 md:py-6 dark:text-gray-200 dark:hover:text-gray-500" to={'/managemyfood'}>
                                            Manage My Foods
                                        </NavLink>


                                        <NavLink className="font-medium text-gray-800 hover:text-gray-600 py-3 md:py-6 dark:text-gray-200 dark:hover:text-gray-500" to={'/foodRequest'}>
                                            My Food Request
                                        </NavLink>
                                    </> : ''
                                }
                                <div className="pt-3 md:pt-0">
                                    {
                                        user ? <NavLink onClick={logoutUser} className=" btn inline-flex justify-center items-center gap-x-2 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-2.5 px-3 dark:focus:ring-offset-gray-800" to={'/login'}>
                                            Signout
                                        </NavLink> : <NavLink className=" btn inline-flex justify-center items-center gap-x-2 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-2.5 px-3 dark:focus:ring-offset-gray-800" to={'/login'}>
                                            Login || Register
                                        </NavLink>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;