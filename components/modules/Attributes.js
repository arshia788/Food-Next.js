import Fast from '../icons/Fast'
import Food from '../icons/Food'
import Choice from '../icons/Choice'
import Clock from '../icons/Clock'

function Attributes() {
  return (
    <div>
      <h3
      className='text-green-500 text-xl font-bold mb-4'
      >Why-us?</h3>

      <div className='flex justify-between  p-2 gap-8 '>

        <div className='shadow-md shadow-gray-400  w-40 px-12 py-8
        rounded flex flex-col justify-center items-center'>
          <Fast />
          <p>Fast</p>
        </div>

        <div 
        className='shadow-md shadow-gray-400 w-40
        rounded flex flex-col justify-center items-center'>
        
          <Food />
          <p>Best Restaurants</p>
        </div>

        <div
        className='shadow-md shadow-gray-400   w-40
        rounded flex flex-col justify-center items-center'
        >
          <Choice />
          <p>Your choice</p>
        </div>

        <div
        className='shadow-md shadow-gray-400   w-40
        rounded flex flex-col justify-center items-center '
        >
          <Clock />
          <p>24/7</p>
        </div>

      </div>
    </div>
  )
}

export default Attributes