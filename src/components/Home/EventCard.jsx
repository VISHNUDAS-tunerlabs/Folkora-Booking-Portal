import React from 'react';

function EventCard({ cardData }) {
  return (
    <div className={`${cardData.nameBg} mt-8 flex flex-row rounded-3xl h-[70vh] shadow-xl`}>
      {/* Left side */}
      <div className="w-1/2 rounded-tl-3xl rounded-bl-3xl flex flex-col">
        <div
          className={`${cardData.nameBg} ${cardData.fontColour} h-1/2 rounded-tl-3xl flex items-center justify-center`}
        >
          <div className="text-4xl font-tan-meringue">{cardData.name}</div>
        </div>
        <div className="h-1/2 rounded-bl-3xl flex flex-row">
          <div className="relative overflow-hidden bg-red-400 rounded-bl-3xl w-1/2">
            <img
              className="shadow-lg hover:scale-105 transition-all duration-300 ease-in-out w-full h-full object-cover"
              src={cardData.image1}
              alt="trip"
            />
          </div>
          <div className="w-1/2 relative overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src={cardData.video}
              title="YouTube video"
              allowFullScreen
              className="shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className=" w-1/2 rounded-tr-3xl rounded-br-3xl flex flex-col">
        <div className="bg-yellow-400 h-1/2 rounded-tr-3xl relative overflow-hidden">
          <img
            className="shadow-lg hover:scale-105 transition-all duration-300 ease-in-out w-full h-full object-cover rounded-tr-3xl"
            src={cardData.image2}
            alt="trip"
          />
        </div>

        <div className={`${cardData.nameBg} ${cardData.fontColour} h-1/2 rounded-br-3xl flex items-center justify-center`}>
          <p className=" px-12 line-clamp-6">
            
          {cardData.description}
          
          </p>
        </div>

        


      </div>
    </div>
  );
}

export default EventCard;
