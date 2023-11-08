import React from 'react';
import { Link } from 'react-router-dom';

const FeatureFoodCard = ({ food }) => {
    const { _id, foodName, foodImage, authName, foodQuantity, foodLocation, foodExdate, addInfo } = food;
    return (
        <div >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="w-96  group flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div className="flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
                        <img className='w-full h-full rounded-lg' src={foodImage} alt="" />
                    </div>
                    <div className="p-4 md:p-6">
                        <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                            Donor Name: {authName}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                            {foodName}
                        </h3>
                        <p className="mt-3 text-gray-500">
                            {addInfo}
                        </p>
                        <div className="flex mt-4">
                            <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                                Pick Loacation: {foodLocation}
                            </span>
                            <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                                Quantity: {foodQuantity}
                            </span>
                            <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                                Exp Date: {foodExdate}
                            </span>
                        </div>
                    </div>
                    <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                        <Link to={`/details/${_id}`} className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureFoodCard;