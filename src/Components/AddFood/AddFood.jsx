import React, { useContext } from 'react';
import { AuthContex } from '../../Providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const AddFood = () => {
    const { user } = useContext(AuthContex)

    const noData = 'No Data Found'

    const handelAddFood = (e) => {
        e.preventDefault();

        const form = e.target;
        // user info
        const authName = user.displayName;
        const email = user.email;
        const authPhone = user.phoneNumber;
        const authPhoto = user.photoURL;

        // form values
        const foodName = form.foodName.value.length > 0 ? form.foodName.value : noData;
        const foodImage = form.foodImage.value.length > 0 ? form.foodImage.value : noData;
        const foodQuantity = form.foodQuantity.value.length > 0 ? form.foodQuantity.value : noData;
        const foodExdate = form.foodExdate.value.length > 0 ? form.foodExdate.value : noData;
        const foodStatus = form.foodStatus.value.length > 0 ? form.foodStatus.value : noData;
        const foodLocation = form.foodLocation.value.length > 0 ? form.foodLocation.value : noData;
        const addInfo = form.addInfo.value.length > 0 ? form.addInfo.value : noData;

        const newFood = {
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
            addInfo,
            

        };

        fetch('https://food-donation-server.vercel.app/foods', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFood)
        }).then(() => {
            alert('Product added successfully');
            form.reset();
        })
    }

    console.log(user);

    return (
        <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
                <form onSubmit={handelAddFood}>
                    <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700">
                        <div className="sm:col-span-12">
                            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                Personal information
                            </h2>
                        </div>

                        <div className="sm:col-span-3">
                            <label for="af-submit-application-full-name" className="inline-block text-sm font-medium text-gray-500 mt-2.5">
                                Full name
                            </label>
                        </div>


                        <div className="sm:col-span-9">
                            <div className="sm:flex">
                                <input required name='authName' id="af-submit-application-full-name" type="text" className="pointer-events-none py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" defaultValue={user.displayName} placeholder='First Name' />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label for="af-submit-application-email" className="inline-block text-sm font-medium text-gray-500 mt-2.5">
                                Email
                            </label>
                        </div>


                        <div className="sm:col-span-9">
                            <input required name='email' id="af-submit-application-email" type="email" className="pointer-events-none py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder='Email' defaultValue={user.email} />
                        </div>


                        <div className="sm:col-span-3">
                            <div className="inline-block">
                                <label for="af-submit-application-phone" className="inline-block text-sm font-medium text-gray-500 mt-2.5">
                                    Phone
                                </label>
                            </div>
                        </div>

                        <div className="sm:col-span-9">
                            <input name='authPhone' id="pointer-events-none af-submit-application-phone" type="text" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder='Phone' />
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
                            <input required name='foodName' id="af-submit-application-linkedin-url" type="text" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder='Food Name' />
                        </div>

                        <div className="sm:col-span-3">
                            <label for="af-submit-application-twitter-url" className="inline-block text-sm font-medium text-gray-500 mt-2.5">
                                Image URL
                            </label>
                        </div>

                        <div className="sm:col-span-9">
                            <input required name='foodImage' id="af-submit-application-twitter-url" type="text" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder='Image URL' />
                        </div>

                        <div className="sm:col-span-3">
                            <label for="af-submit-application-github-url" className="inline-block text-sm font-medium text-gray-500 mt-2.5">
                                Quantity
                            </label>
                        </div>

                        <div className="sm:col-span-9">
                            <input required name='foodQuantity' id="af-submit-application-github-url" type="text" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder='Quantity' />
                        </div>

                        <div className="sm:col-span-3">
                            <label for="af-submit-application-portfolio-url" className="inline-block text-sm font-medium text-gray-500 mt-2.5">
                                Expire Date
                            </label>
                        </div>

                        <div className="sm:col-span-9">
                            <div className="sm:flex">
                                <input required name='foodExdate' id="af-submit-application-full-name" type="date" className=" py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder='Expire Date' />
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
                            <input required name='foodLocation' id="af-submit-application-other-website" type="text" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder='Pickup Location' />
                        </div>

                        <div className="sm:col-span-3">
                            <label for="af-submit-application-other-website" className="inline-block text-sm font-medium text-gray-500 mt-2.5">
                                Additional Information
                            </label>
                        </div>


                        <div className="sm:col-span-9">
                            <input required name='addInfo' id="af-submit-application-other-website" type="text" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder='Additional Information' />
                        </div>
                    </div>

                    <div className="py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700">
                        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            Donate Your Food
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

    );
};

export default AddFood;