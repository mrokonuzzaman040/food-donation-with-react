import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { AuthContex } from '../../Providers/AuthProvider';

const PrivetRout = ({ children }) => {

    const { user, loading } = useContext(AuthContex);
    const location = useLocation();

    if (loading) {
        return <div class="min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div class="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
          <div class="flex justify-center">
            <div class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivetRout;