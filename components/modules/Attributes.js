import Fast from '../icons/Fast'
import Food from '../icons/Food'
import Choice from '../icons/Choice'
import Clock from '../icons/Clock'

function Attributes() {
  return (
    <div>
      <h3
      className='text-green-500 text-xl font-bold mb-4 xs:text-center'
      >Why-us?</h3>

      <div className='xs:flex xs:flex-col xs:gap-y-8
       md:flex-row md:justify-between p-2 gap-8 '>

        <div className='shadow-md shadow-gray-400 
        xs:w-full md:w-40 px-12 py-8
        rounded flex flex-col justify-center items-center'>
          <Fast />
          <p>Fast</p>
        </div>

        <div 
        className='shadow-md shadow-gray-400 
        xs:w-full md:w-40 px-12 py-8
        rounded flex flex-col justify-center items-center'>
        
          <Food />
          <p>Best Restaurants</p>
        </div>

        <div
        className='shadow-md shadow-gray-400 
        xs:w-full md:w-40 px-12 py-8
        rounded flex flex-col justify-center items-center'
        >
          <Choice />
          <p>Your choice</p>
        </div>

        <div
        className='shadow-md shadow-gray-400 
        xs:w-full md:w-40 px-12 py-8
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