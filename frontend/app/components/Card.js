import Image from 'next/image'
import Link from 'next/link'
const Card = ({ img, title, description, id }) => {
  return (
    <>

      <div className='flex flex-col items-start justify-center space-y-3 bg-white py-5 px-5 mx-1 my-1 rounded '>
        <Image src={img} alt={title} className='w-8 h-8' />
        <div className='flex flex-col items-start justify-center space-y-1'>
          <h5 className='text-xl font-bold text-blue-500'>{title}</h5>
          <p className='text-sm text-blue-500'>{description}</p>
        </div>
        <Link href={`/services/${id}`} className='bg-green-800 text-white py-1 px-2 border-2 border-green-800 rounded'>
          Use Now
        </Link>
      </div>


    </>
  )
}

export default Card

// bg-green-800 text-white py-1 px-2 border-2 border-green-800 rounded