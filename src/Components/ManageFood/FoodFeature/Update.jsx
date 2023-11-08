import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const Update = () => {
    const { id } = useParams();

    const [data, setData] = useState({
        foodName: '',
        foodImage: '',
        foodExdate: '',
        foodStatus: '',
        foodLocation: '',
        addInfo: '',
    });

    useEffect(() => {
        fetch(`https://food-donation-server.vercel.app/${id}`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [id]);

    const {
        foodName,
        foodImage,
        foodExdate,
        foodStatus,
        foodLocation,
        addInfo,
    } = data;

    const handleSubmit = (e) => {
        e.preventDefault();


        Swal.fire({
            title: 'Are you sure?',
            text: "You want to update this food item?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',

            confirmButtonText: 'Yes, update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://food-donation-server.vercel.app/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                    .then((res) => res.json())
                    .then((data) => console.log(data))
                    .catch((err) => console.log(err));
                Swal.fire(
                    'Updated!',
                    'Your file has been updated.',
                    'success'
                )
            }
        })
        // })
        // fetch(`https://food-donation-server.vercel.app/${id}`, {
        //     method: 'PATCH',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then((res) => res.json())
        //     .then((data) => console.log(data))
        //     .catch((err) => console.log(err));
    };

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <div className="">
            <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
                <form onSubmit={handleSubmit}>
                    <label>
                        Food Name:
                        <input className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                            type="text"
                            name="foodName"
                            value={foodName}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Food Image:
                        <input className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                            type="text"
                            name="foodImage"
                            value={foodImage}
                            onChange={handleChange}
                        />
                    </label>

                    <label >
                        Food Expiration Date:
                        <input className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                            type="text"
                            name="foodExdate"
                            value={foodExdate}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Food Status:
                        <input className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                            type="text"
                            name="foodStatus"
                            value={foodStatus}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Food Location:
                        <input className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                            type="text"
                            name="foodLocation"
                            value={foodLocation}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Additional Information:
                        <input className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                            type="text"
                            name="addInfo"
                            value={addInfo}
                            onChange={handleChange}
                        />
                    </label>
                    <div className="flex justify-center mt-10">
                        <button className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-teal-500 text-teal-500 hover:border-teal-400 hover:text-teal-400 disabled:opacity-50 disabled:pointer-events-none dark:border-teal-500 dark:text-teal-500 dark:hover:text-teal-400 dark:hover:border-teal-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600' type="submit">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;