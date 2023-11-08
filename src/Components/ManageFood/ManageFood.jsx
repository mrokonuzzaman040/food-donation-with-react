import React from 'react';
import { useContext } from 'react';
import { AuthContex } from '../../Providers/AuthProvider';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import MyFoodCart from './MyFoodCart';


const ManageFood = () => {
    const { user } = useContext(AuthContex);
    const [request, setRequest] = useState([]);
    const navigate = useNavigate();

    // data load from database
    const url = `https://food-donation-server.vercel.app/userFoods?email=${user?.email}`;
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
        //         fetch(`https://food-donation-server.vercel.app/foods/${id}`, {
        //             method: 'DELETE'
        //         })
        //             .then(res => res.json())
        //             .then(data => {
        //                 // console.log(data);
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
                fetch(`https://food-donation-server.vercel.app/foods/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your food has been deleted.',
                                'success'
                            )
                            const remaining = request.filter(booking => request._id !== id);
                            setRequest(remaining);
                        }
                    })
            }
        })
    }

    // update route
    const handelUpdateStatus = id => {
        navigate(`/update/${id}`);
    }

    const handleManageFood = id => {
        navigate(`/mamangefood/${id}`);
    }

    return (
        <div className='max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Image
                            </th>
                            <th>Name</th>
                            <th>Expire Date</th>
                            <th>Photo</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            request.map(request => <MyFoodCart
                                key={request._id}
                                request={request}
                                handleDelete={handleDelete}
                                handelUpdateStatus={handelUpdateStatus}
                                handleManageFood={handleManageFood}
                            ></MyFoodCart>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageFood;