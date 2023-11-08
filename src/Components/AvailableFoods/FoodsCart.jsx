import React from 'react';
import { Link } from 'react-router-dom';

const FoodsCart = ({ food }) => {
    const {
        _id,
        authName,
        authEmail,
        authPhone,
        authPhoto,
        foodName,
        foodImage,
        foodQuantity,
        foodExdate,
        foodStatus,
        foodLocation,
        addInfo } = food;
    return (
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="w-auto h-96">
                <img className="w-full h-full rounded-t-xl" src={foodImage} alt="Image Description" />
            </div>
            <div className="p-4 md:p-5">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
                    {foodName}
                </h3>
                <div className="flex w-full justify-between items-center">
                    <img className='rounded-full w-1/12' src={authPhoto} alt="" />
                    <p>{authName}</p>
                </div>

                <div className="flex justify-between">
                    <p>Quantity: {foodQuantity}</p>
                    <p>Pickup Location: {foodLocation}</p>
                    <p>Expire Date: {foodExdate}</p>
                </div>
                <p className=""><span className='font-bold text-orange'>Note: </span>
                    {
                        addInfo.length > 100 ? addInfo.slice(0, 200) + '...' : addInfo
                    }
                </p>

                <div className="flex justify-end">
                    <Link to={`/details/${_id}`} type="button" className="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500">
                        View Details
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default FoodsCart;