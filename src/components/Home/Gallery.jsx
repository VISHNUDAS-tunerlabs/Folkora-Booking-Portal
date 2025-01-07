import React from 'react'
import TitleComponent from './TitleComponent'
import Media from './Media'

function Gallery() {
  return (
    <div className='h-[90vh] mt-24 mb-12'>
        <div className='mx-20 h-full flex flex-row gap-5'>
            <div className='w-1/5 h-full flex flex-col gap-5'>
                <div className='w-full h-1/4'>
                    <TitleComponent heading="Explore Our Gallery" description="Step into our world of memories and moments – Explore the beauty captured in our gallery!" />
                </div>
                <div className='w-full bg-gray-400 h-3/4'>
                <Media type="image" link="https://images.unsplash.com/photo-1709964521997-a374889dd9dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fE5vcnRoJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D"/>
                
                </div>

            </div>
            <div className='w-2/5 h-full gap-5 flex flex-col'>
                <div className='w-full bg-red-400 h-1/2'>
                    <Media type="image" link="https://images.unsplash.com/photo-1653545709914-cbb1b2748e13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                </div>
                <div className='w-full bg-gray-400 h-1/2'>
                <Media type="video" link="https://www.youtube.com/embed/seEUHwdbgdM?si=MqJe6xYqP0aF6MEM"/>
                </div>

            </div>
            <div className='w-2/5 bg-yellow-400 h-full'>
                <Media type="video" link="https://youtube.com/embed/uBOdmxl1ero?si=Ygov965aQmXEb1bH"/>
            </div>
        </div>
        
    </div>
  )
}

export default Gallery
