import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { useEffect, useState } from 'react';
import axios from 'axios';

const ManageFoodBtn = () => {
    const request = useLoaderData();
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://food-donation-server.vercel.app/orders');
            setUsers(response.data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (users.length > 0) {
            const filteredUsers = users.filter(u => u.foodId === request._id);
            setUser(filteredUsers[0]);
        }
    }, [users, request]);



    const handelStatus = id => {
        console.log(id);
        fetch(`https://food-donation-server.vercel.app/user/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ reqStatus: 'Delivered' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = order.filter(booking => booking._id !== id);
                    const updated = order.find(booking => booking._id === id);
                    updated.status = 'Delivered'
                    const newStatus = [updated, ...remaining];
                    setBookings(newStatus);
                }
            })
    }

    return (
        <div>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <h1 className='text-4xl text-center lg:mb-10 md:mb-5'>Manage Food</h1>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
                            <img src={user?.reqPhoto} alt="" />
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
                </div>
            </div>
        </div>
    );
};

export default ManageFoodBtn;