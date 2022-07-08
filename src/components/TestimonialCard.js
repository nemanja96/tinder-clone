import React from 'react'
import quote from '../assets/quote.png';

const TestimonialCard = ({ name, description}) => {
  return (
    <div className="border shadow-sm border-gray-300 p-6 rounded-md">
        <div className="flex gap-6">
            <div className="grow mb-2">
                <h3 className="text-lg font-bold text-[#21262e] pb-2">{name}</h3>
                <hr/>
            </div>
            <img src={quote} width="50px" />
        </div>
        <p className="text-base text-gray-500">{description}</p>
    </div>
  )
}

export default TestimonialCard