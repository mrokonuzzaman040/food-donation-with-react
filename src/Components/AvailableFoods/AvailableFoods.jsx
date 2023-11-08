import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodsCart from './FoodsCart';
import { useState } from 'react';
import useTitle from '../../Hooks/userTitel/useTitel';

const AvailableFoods = () => {
    const allFoods = useLoaderData();
    const [foods, setFoods] = useState(allFoods);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    const handleSearch = () => {
        const filteredFoods = allFoods.filter((food) =>
            food.foodName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (filteredFoods.length === 0) {
            alert('No food found');
        }
        setFoods(filteredFoods);
    };

    const handleReset = () => {
        setFoods(allFoods);
        setSearchTerm('');
    };

    const handleSort = () => {
        const sortedFoods = [...foods].sort((a, b) => {
            if (sortOrder === 'desc') {
                return new Date(a.foodExdate) - new Date(b.foodExdate);
            } else {
                return new Date(b.foodExdate) - new Date(a.foodExdate);
            }
        });
        setFoods(sortedFoods);
        setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
    };

    useTitle('Available Foods')

    return (
        <div className="">
            <h1 className="text-center font-bold text-5xl mb-5">Available Foods</h1>
            <div className="flex justify-center mb-5 gap-4">
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-gray-400 rounded-l-md px-4 py-2 w-80"
                />
                <button
                    onClick={handleSearch}
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                    Search
                </button>
                <button
                    onClick={handleReset}
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                    Reset
                </button>
                <button
                    onClick={handleSort}
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                    {sortOrder === 'desc' ? 'High to Low' : 'Default'}
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
                {foods.map((food) => (
                    <FoodsCart key={food._id} food={food}></FoodsCart>
                ))}
            </div>
        </div>
    );
};

export default AvailableFoods;