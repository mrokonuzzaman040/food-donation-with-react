import React from 'react';

const MyFoodCart = ({ request, handleDelete, handelUpdateStatus, handleManageFood }) => {
    const { _id, foodImage, foodName, foodExdate, foodLocation } = request;

    return (
        <tr>
            <th>
                <div className="w-24 h-24 rounded-full">
                    {foodImage && <img src={foodImage} alt="Food Image" />}
                </div>
            </th>
            <td>
                {foodName}
            </td>
            <td>
                {foodExdate}
            </td>
            <td>{foodLocation}</td>
            <td>
                <button onClick={() => handelUpdateStatus(_id)} className="btn btn-sm btn-circle">
                    Update
                </button>
            </td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    Delete
                </button>
            </th>
            <th>
                <button onClick={() => handleManageFood(_id)} className="btn btn-sm btn-circle">
                    Manage
                </button>
            </th>
        </tr >
    );
};

export default MyFoodCart;