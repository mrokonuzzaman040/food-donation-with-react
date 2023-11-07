import React from 'react';

const FoodRequestCart = ({ request, handleDelete, handelUpdateStatus }) => {
    const { _id, foodLocation, foodStatus, authName, foodExdate, reqDoantion, reqDate } = request;

    return (
        <tr>
            <th>
                {authName}
            </th>
            <td>
                {foodLocation}
            </td>
            <td>
                {foodExdate}
            </td>
            <td>
                {reqDate}
            </td>
            <td>
                {reqDoantion}
            </td>
            <th>
                {foodStatus}
            </th>
            <th>
                <button onClick={() => handleDelete(_id)} className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-gray-100 hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-white/10 dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    Cancle
                </button>
            </th>
        </tr>
    );
};

export default FoodRequestCart;

