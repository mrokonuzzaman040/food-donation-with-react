import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContex } from '../../Providers/AuthProvider';

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


    const handelRequest = (e) => {
        e.preventDefault();
        const noData = 'No Data';

        const form = e.target;
        // user info
        const reqName = user.displayName;
        const email = user.email;
        const reqPhoto = user.photoURL;

        // form values
        const foodName = form.foodName.value.length > 0 ? form.foodName.value : noData;
        const foodImage = form.foodImage.value.length > 0 ? form.foodImage.value : noData;
        const foodExdate = form.foodExdate.value.length > 0 ? form.foodExdate.value : noData;
        const foodStatus = form.foodStatus.value.length > 0 ? form.foodStatus.value : noData;
        const foodLocation = form.foodLocation.value.length > 0 ? form.foodLocation.value : noData;
        const addInfo = form.addInfo.value.length > 0 ? form.addInfo.value : noData;

        // Background Data
        const reqDate = new Date().toLocaleDateString();
        const foodId = _id;
        const reqStatus = 'Pending';
        const reqDoantion = form.reqDoantion.value.length > 0 ? form.reqDoantion.value : noData;


        const newRequest = {
            authName,
            email,
            authPhoto,
            reqName,
            reqPhoto,
            foodName,
            foodImage,
            foodExdate,
            foodStatus,
            foodLocation,
            addInfo,
            reqDate,
            foodId,
            reqStatus,
            reqDoantion,
        };

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRequest)
        }).then(() => {
            alert('Requested successfully');
            form.reset();
        })
    }

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
                            <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-modal-signin" >
                                Request Food
                            </button>
                        </div>

                        <div id="hs-modal-signin" className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
                            <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto bg-gray rounded-2xl">
                                {/* Modal Daata */}
                                <div className="">
                                    <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
                                        <form onSubmit={handelRequest} >
                                            <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700">
                                                <div className="sm:col-span-12">
                                                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                                        Donor information
                                                    </h2>
                                                </div>

                                                <div className="sm:col-span-3">
                                                    <label for="af-submit-application-full-name" className="inline-block text-sm font-medium text-gray-500 mt-2.5">
                                                        Full name
                                                    </label>
                                                </div>


                                                <div className="sm:col-span-9">
                                                    <div className="sm:flex">
                                                        <input required name='authName' id="af-submit-application-full-name" type="text" className="pointer-events-none py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder='First Name' defaultValue={authName} />
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-3">
                                                    <label for="af-submit-application-email" className="inline-block text-sm font-medium text-gray-500 mt-2.5">
                                                        Email
                                                    </label>
                                                </div>


                                                <div className="sm:col-span-9">
                                                    <input required name='authEmail' id="af-submit-application-email" type="email" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder='Email' defaultValue={email} />
                                                </div>
                                            </div>

                                            <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700">
                                                <div className="sm:col-span-12">
                                                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                                        Food Details
                                                    </h2>
                                                </div>

                                                <div className="sm:col-span-3">
                                                    <label for="af-submit-application-linkedin-url" className="inline-block text-sm font-medium text-gray-500 mt-2.5">
                                                        Food Name
                                                    </label>
                                                </div>

                                                <div className="sm:col-span-9">
                                                    <input required name='foodName' id="af-submit-application-linkedin-url" type="text" className="pointer-events-none py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder='Food Name' defaultValue={foodName} />
                                                </div>

                                                <div className="sm:col-span-3">
                                                    <label for="af-submit-application-twitter-url" className="inline-block text-sm font-medium text-gray-500 mt-2.5">
                                                        Image URL
                                                    </label>
                                                </div>

                                                <div className="sm:col-span-9">
                                                    <input required name='foodImage' id="af-submit-application-twitter-url" type="text" className="pointer-events-none py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder='Image URL' defaultValue={foodImage} />
                                                </div>

                                                <div className="sm:col-span-3">
                                                    <label for="af-submit-application-portfolio-url" className="inline-block text-sm font-medium text-gray-500 mt-2.5">
                                                        Expire Date
                                                    </label>
                                                </div>

                                                <div className="sm:col-span-9">
                                                    <div className="sm:flex">
                                                        <input required name='foodExdate' id="af-submit-application-full-name" type="date" className=" py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder='Expire Date' defaultValue={foodExdate} />
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-3">
                                                    <label for="af-submit-application-portfolio-url" className="inline-block text-sm font-medium text-gray-500 mt-2.5">
                                                        Status
                                                    </label>
                                                </div>

                                                <div className="sm:col-span-9">
                                                    <div className="sm:flex">
                                                        <input required name='foodStatus' id="af-submit-application-full-name" type="text" className="pointer-events-none py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder='Status' defaultValue='Available' />
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-3">
                                                    <label for="af-submit-application-other-website" className="inline-block text-sm font-medium text-gray-500 mt-2.5">
                                                        Pickup Location
                                                    </label>
                                                </div>


                                                <div className="sm:col-span-9">
                                                    <input required name='foodLocation' id="af-submit-application-other-website" type="text" className="pointer-events-none py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder='Pickup Location' defaultValue={foodLocation} />
                                                </div>

                                                <div className="sm:col-span-3">
                                                    <label for="af-submit-application-other-website" className="inline-block text-sm font-medium text-gray-500 mt-2.5">
                                                        Additional Information
                                                    </label>
                                                </div>


                                                <div className="sm:col-span-9">
                                                    <input required name='addInfo' id="af-submit-application-other-website" type="text" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder='Additional Information' defaultValue={addInfo} />
                                                </div>

                                                <div className="sm:col-span-3">
                                                    <label for="af-submit-application-other-website" className="inline-block text-sm font-medium text-gray-500 mt-2.5">
                                                        Donate $
                                                    </label>
                                                </div>


                                                <div className="sm:col-span-9">
                                                    <input name='reqDoantion' id="af-submit-application-other-website" type="text" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder='$$Donate' />
                                                </div>
                                            </div>

                                            <div className="py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700">
                                                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                                    Request Your Food
                                                </h2>
                                                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                                                    In order to contact you with future jobs that you may be interested in, we need to store your personal data.
                                                </p>
                                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                                    If you are happy for us to do so please click the checkbox below.
                                                </p>
                                            </div>


                                            <button type="submit" className="py-3 px-4 w-full inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                                Submit
                                            </button>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;