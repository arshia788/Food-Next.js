import Link from 'next/link'

export default function Guide() {
  return (
    <div className='flex justify-between my-8'>
        <Link 
        className='shadow-md shadow-gray-400 rounded text-center p-2 w-32'
        href="/menu">Menu</Link>
        <Link 
        className='shadow-md shadow-gray-400 rounded text-center p-2 w-32'
        href="/categories">Categories</Link>
        <Link 
        className='shadow-md shadow-gray-400 rounded text-center p-2 w-32'
        href="/discount">Discount</Link>
    </div>
  )
}

 