import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { useEffect, useState } from 'react';
import axios from 'axios';

import Swal from 'sweetalert2';


const ManageFoodBtn = () => {
    const request = useLoaderData();
    const [orders, setOrders] = useState([]);
    const [users, setUsers] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://food-donation-server.vercel.app/orders');
            setOrders(response.data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (orders.length > 0) {
            const filteredUsers = orders.filter(order => order.foodId === request._id);
            setUsers(filteredUsers);
        }
    }, [orders, request]);

    // console.log(users);

    const handelStatus = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.put(`https://food-donation-server.vercel.app/reqStatus/${id}`, {
                    reqStatus: 'Delivered'
                })
                    .then(res => {
                        Swal.fire(
                            'Updated!',
                            'The status has been updated.',
                            'success'
                        );
                        const remaining = users.filter(user => user._id !== id);
                        const updated = users.find(user => user._id === id);
                        updated.reqStatus = 'Delivered';

                        const newResult = [updated, ...remaining];
                        setUsers(newResult);
                    })
                    .catch(error => {
                        Swal.fire(
                            'Error!',
                            'There was an error updating the status.',
                            'error'
                        );
                    });
            }
        });
    }

    return (
        <div>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <h1 className='text-4xl text-center lg:mb-10 md:mb-5'>Manage Food</h1>
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="overflow-x-auto w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            users?.map(user =>
                                <div className="">
                                    <div className="group flex flex-col w-full h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                        <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
                                            <img className='min-w-full min-h-full rounded-2xl' src={user?.reqPhoto} alt="" />
                                        </div>
                                        <div className="p-4 md:p-6">
                                            <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                                                {user?.reqEmail || 'Invalid Email'}
                                            </span>
                                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                                                {user?.reqName}
                                            </h3>
                                            <p className="mt-3 text-gray-500">
                                                {user?.reqDate}
                                            </p>
                                        </div>
                                        <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                                            <button onClick={() => handelStatus(user?._id)} className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                {user?.reqStatus === 'Pending' ? <span className="font-bold text-primary">Pending</span> :
                                                    <button onClick={() => handelStatus(user?._id)} className="btn btn-ghost btn-xs">Delivered</button>}
                                            </button>
                                        </div>
                                    </div>
                                </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageFoodBtn;