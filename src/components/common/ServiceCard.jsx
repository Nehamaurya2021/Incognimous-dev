import React from 'react'

const ServiceCard=(props) => {
  return (
    <>
    <div className='mb-20 w-[38%] md:w-[42%] '>
        <h3 className='py-5 text-xl lg:text-2xl font-medium' >{props.data.heading}</h3>
        <p className='text-gray-600'>{props.data.content}</p>
    </div>
    </>
  )
}

export default ServiceCard;