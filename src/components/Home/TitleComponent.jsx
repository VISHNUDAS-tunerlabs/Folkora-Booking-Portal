import React from 'react'
import '../../assets/animations/styles.css'

function TitleComponent({ heading, description }) {
  return (
    <div className="">
      <h1 className="font-safira-march text-2xl font-bold text-center mb-4 leading-[1.70] animate-climb-up">{heading}</h1>
      <p className="text-sm text-gray-700 text-center">{description}</p>
    </div>
  )
}

export default TitleComponent