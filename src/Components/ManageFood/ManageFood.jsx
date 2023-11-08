import React from 'react';
import { useContext } from 'react';
import { AuthContex } from '../../Providers/AuthProvider';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import MyFoodCart from './MyFoodCart';



import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import ManageFoodTable from './Table/ManageFoodTable';
import { useTable } from 'react-table';


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
                            const remaining = request.filter(result => result._id !== id);
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
                    <thead>
                        <tr>
                            <th>
                                Image
                            </th>
                            <th>Food Name</th>
                            <th>Expire Date</th>
                            <th>Location</th>
                            <th>Update Action</th>
                            <th>Delete Action</th>
                            <th>Manage Request</th>
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