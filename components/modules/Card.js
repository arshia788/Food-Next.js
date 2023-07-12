import Location from '../icons/Location'
import Dollar from '../icons/Dollar'
import Link from 'next/link';

export default function Card({ data }) {

  console.log(data);

  return (
    <div className="shadow-md shadow-gray-400 p-2 my-4 rounded relative">
      <img src={`/images/${data.id}.jpeg`} alt={data.name}
        className="rounded"
      />

      <div className="flex justify-between items-center my-4">
        <p className="text-green-500 text-sm font-semibold">{data.name}</p>

        <div className='flex items-center'>
          <p>{data.details[0].Cuisine}</p>
          <Location />
        </div>
      </div>

      <div className='flex items-center'>
        <Dollar />
        {
          data.discount ?
            <span className='text-red-500'>{(data.price * (100- data.discount)/100)} $ </span>
          :
          <p className='font-semibold'>{data.price} $</p>

        }

      </div>
        {data.discount ? <div className='bg-red-500 text-white absolute top-4 left-3
        rounded w-fit'> {data.discount} %</div> : null }

        <button className='w-full bg-green-500 text-white'
        >
          <Link href={`/menu/${data.id}`}
>
            See-Details
          </Link>
        </button>

    </div>
  )
}

