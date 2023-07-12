import React from 'react'
import Link from 'next/link'

export default function Banner() {
    return (
        <div className='xs:flex-col xs:justify-between xs:items-center
        md:flex-row md:flex md:justify-between md:items-center  
       my-20 '>

            <div className='xs:text-center sm:text-left'>

                <h2
                    className='font-bold mb-4
                border-b-2 w-fit text-2xl xs:ml-12 sm:ml-0
                 border-green-500'>BotoFood</h2>

                <p className='mb-4 font-medium text-lg'>Food Delivery and Takeout!</p>
                <p className='text-gray-500 mb-3'>
                    BotoFood is an online food ordering and delivery platform launched by
                    Uber in 2014. Meals are delivered by couriers using cars, scooters,
                    bikes, or on foot.
                </p>

                <Link href='/menu'
                    className='bg-green-500 w-fit text-white 
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

