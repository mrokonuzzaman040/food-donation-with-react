import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContex } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const FoodDetails = () => {
    const { user } = useContext(AuthContex);
    // console.log(user);

    // const { displayName, email } = user;

    const food = useLoaderData();
    const {
        _id,
        authName,
        email,
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
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">

                <div className="">
                    <h1 className='text-center font-bold text-5xl mb-5'>Donor Details</h1>
                    <div className="flex justify-between p-4">
                        <p>Donor name: {authName}</p>
                        <p>Pickup Location: {foodLocation}</p>
                    </div>
                </div>

                <img className="w-full h-auto rounded-t-xl" src={foodImage} alt="Image Description" />
                <div className="p-4 md:p-5">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
                        {foodName}
                    </h3>

                    <div className="flex justify-between">
                        <p>Quantity: {foodQuantity}</p>
                        <p>Expire Date: {foodExdate}</p>
                    </div>
                    <div className="">
                        <p><span className='text-orange font-bold'>*Note: </span>{addInfo}</p>
                    </div>

                    {/* Modal */}
                    <div className="flex justify-en">
                        <div className="text-center">
                            <Link to={`/requestedFoods/${_id}`} type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-modal-signin" >
                                Request Food
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;