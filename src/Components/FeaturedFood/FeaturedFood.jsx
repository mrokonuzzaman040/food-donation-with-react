import React, { useEffect, useState } from 'react';
import FeatureFoodCard from './FeatureFoodCard';

const FeaturedFood = () => {
    const [featuredFood, setFeaturedFood] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/featuredFoods')
            .then(res => res.json())
            .then(data => setFeaturedFood(data))
    }, [])

    console.log(featuredFood)

    return (
        <div className="">
            <h2 className='text-2xl font-bold'>Feature Foods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">

                {
                    featuredFood.map(food => <FeatureFoodCard key={food._id} food={food}></FeatureFoodCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedFood;