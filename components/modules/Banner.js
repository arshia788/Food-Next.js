import React from 'react'
import Link from 'next/link'

export default function Banner() {
    return (
        <div className='xs:flex-col xs:justify-between xs:items-center
        md:flex-row md:flex md:justify-between md:items-center  
        my-20 '>

            <div className=' xs:flex xs:flex-col xs:justify-center xs:items-center
            sm:flex sm:flex-col sm:justify-start sm:items-start
            '>

                <h2
                    className='font-bold mb-4
                text-2xl xs:text-center 
                sm:ml-0'> <span className='text-orange-500'>Next</span> Food</h2>

                <p className='mb-4 font-medium text-lg'>Food Delivery and Takeout!</p>
                <p className='text-gray-500 mb-3'>
                    BotoFood is an online food ordering and delivery platform launched by
                    Uber in 2014. Meals are delivered by couriers using cars, scooters,
                    bikes, or on foot.
                </p>

                <Link href='/menu'
                    className='bg-orange-500 w-fit text-white 
                p-1 rounded  my-3 cursor-pointer'
                >See-All</Link>

            </div>

            <div className='xs:w-full '>
                <img src="/images/banner.png" alt="Food image"
                    className='w-full'
                />
            </div>

        </div>
    )
};

