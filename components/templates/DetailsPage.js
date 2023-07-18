import Location from '../icons/Location';
import Dollar from '../icons/Dollar';


export default function DetailsPage({ data }) {

    const { id, name, price, discount, introduction, details, ingredients, recipe } = data

    return (
        <div className='my-8'>
            <h2
                className='border-b-2 border-orange-500 w-fit font-bold text-xl'
            >Details</h2>

            <div className='flex flex-col my-6'>
                {/* pic */}
                <div className='flex'>
                    <img src={`/images/${id}.jpeg`} alt={name}
                        className='w-60 rounded'
                    />
                    {/* right on pic */}
                    <div className='ml-12'>
                        <p className='font-semibold text-lg text-orange-500'>{name}</p>
                        <div className='flex items-center mt-1 text-gray-500'>
                            <Location />
                            <p>{details[0].Cuisine}</p>
                        </div>

                        <div className='flex items-center mt-6'>
                            <Dollar />
                            {discount ?
                                (price * (100 - discount) / 100)
                                : <p>{price}</p>}$
                        </div>

                        {discount ? <p
                            className='bg-red-500 mt-4 sm:px-12 sm:py-1 rounded text-white xs:px-8 xs:py-1 '
                        >{discount}% OFF</p> : null}

                    </div>
                </div>

                <p className='my-16 '>{introduction}</p>

                {/* Details */}
                <div>
                    <h2 className='text-orange-500 font-bold text-xl'>Details</h2>
                    <ul className='pl-4 '>
                        {
                            details.map((item, index) => {
                                return (
                                    <li key={index} className="font-semibold relative flex items-center
                                    before:content-['o'] before:text-orange-500 " >
                                        <p className='ml-2'>{Object.keys(item)[0]}: </p>
                                        <p>{Object.values(item)[0]}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                {/* ingredients */}
                <div>
                    <h2 className='text-orange-500 font-bold mt-8 text-xl'>ingredients</h2>
                    <ul className='pl-4'>
                        {ingredients.map((item, index) => {
                            return (
                                <li key={index} className="font-semibold relative flex items-center
                            before:content-['o'] before:text-orange-500
                            
                            ">
                                    <p className='ml-2'>{item}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                
                {/* Recipe */}
                <div>
                    <h2 className='text-orange-500 font-bold mt-8 mb-4 text-xl'>Recipe</h2>
                    <ul className=''>
                        {
                            recipe.map((item,index)=>{
                                return(
                                    <li key={index} 
                                    className=
                                    {index %2 ?'bg-orange-500 flex p-2' :'bg-orange-400 flex p-2'}
                                    >
                                        <p>{index + 1}</p>
                                        <p className='ml-2'>{item}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>


            </div>


        </div>
    )
}

