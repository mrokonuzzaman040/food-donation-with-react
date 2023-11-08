import React from 'react';
import { useContext } from 'react';
import { AuthContex } from '../../Providers/AuthProvider';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import FoodRequestCart from './FoodRequestCart';

const RequestFood = () => {
    const { user } = useContext(AuthContex);
    const [request, setRequest] = useState([]);
    const navigate = useNavigate();

    // data load from database
    const url = `http://localhost:5000/user/orders?email=${user?.email}`;
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setRequest(res.data)
            })
    }, [url, navigate]);


    // delete data from database
    const handleDelete = id => {
        //     const proceed = confirm('Are You sure you want to delete');
        //     if (proceed) {
        //         fetch(`http://localhost:5000/user/orders/${id}`, {
        //             method: 'DELETE'
        //         })
        //             .then(res => res.json())
        //             .then(data => {
        //                 if (data.deletedCount > 0) {
        //                     alert('deleted successful');
        //                     const remaining = request.filter(booking => request._id !== id);
        //                     setRequest(remaining);
        //                 }
        //             })
        //     }
        // }

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/user/orders/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            alert('deleted successful');
                            const remaining = request.filter(booking => request._id !== id);
                            setRequest(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div className='max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className='text-left justify-between'>
                        <tr>
                            <th>
                                <label>
                                    Donner Name
                                </label>
                            </th>
                            <th>Pick Location</th>
                            <th>Expire Date</th>
                            <th>Request Date</th>
                            <th>Your Donation</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-left justify-between'>
                        {
                            request.map(request => <FoodRequestCart
                                key={request._id}
                                request={request}
                                handleDelete={handleDelete}
                            ></FoodRequestCart>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default RequestFood;