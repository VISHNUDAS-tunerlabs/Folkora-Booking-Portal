import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../components/Home/NavBar';
import Tagline from '../components/Home/Tagline';
import VideoSection from '../components/Home/VideoSection';
import EventCard from '../components/Home/EventCard';
import Gallery from '../components/Home/Gallery';

const carouselData = [
  {
    name: "Brahmatal Trek",
    nameBg: "bg-yellow-500",
    fontColour: "text-gray-900",
    description: "Along the way, trekkers visit remote villages where the traditions of the indigenous people have remained unchanged for centuries. The hospitality of the local communities is warm and welcoming, and trekkers have the opportunity to witness vibrant festivals, try local delicacies, and interact with the Sherpa people, who are known for their resilience and mountaineering expertise. The trek also offers a deep sense of inner peace and connection with nature. Whether it’s watching the sunrise over snow-capped peaks, meditating at Buddhist monasteries, or crossing high-altitude passes, the Himalaya Trek allows trekkers to experience a spiritual journey that goes beyond the physical challenge.",
    video: "https://www.youtube.com/embed/u_sU7vohuvI?si=rnECXUihBigNKFVL",
    image1: "https://images.unsplash.com/photo-1580475805491-3b1b70c4ef86?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2: "https://images.unsplash.com/photo-1696388882435-4a8a116dff2c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Himalaya Trek",
    nameBg: "bg-red-500",
    fontColour: "text-white",
    description: "Along the way, trekkers visit remote villages where the traditions of the indigenous people have remained unchanged for centuries. The hospitality of the local communities is warm and welcoming, and trekkers have the opportunity to witness vibrant festivals, try local delicacies, and interact with the Sherpa people, who are known for their resilience and mountaineering expertise. The trek also offers a deep sense of inner peace and connection with nature. Whether it’s watching the sunrise over snow-capped peaks, meditating at Buddhist monasteries, or crossing high-altitude passes, the Himalaya Trek allows trekkers to experience a spiritual journey that goes beyond the physical challenge.",
    video: "https://www.youtube.com/embed/75dtOVVhB8E?si=2rXa2X-igMNgzGSt",
    image1: "https://images.unsplash.com/photo-1580475805491-3b1b70c4ef86?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2: "https://images.unsplash.com/photo-1608149894872-e388ceaf6389?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Kolkata Tour",
    nameBg: "bg-blue-300",
    fontColour: "text-gray-900",
    description: "Along the way, trekkers visit remote villages where the traditions of the indigenous people have remained unchanged for centuries. The hospitality of the local communities is warm and welcoming, and trekkers have the opportunity to witness vibrant festivals, try local delicacies, and interact with the Sherpa people, who are known for their resilience and mountaineering expertise. The trek also offers a deep sense of inner peace and connection with nature. Whether it’s watching the sunrise over snow-capped peaks, meditating at Buddhist monasteries, or crossing high-altitude passes, the Himalaya Trek allows trekkers to experience a spiritual journey that goes beyond the physical challenge.",
    video: "https://www.youtube.com/embed/u_sU7vohuvI?si=rnECXUihBigNKFVL",
    image1: "https://images.unsplash.com/photo-1580475805491-3b1b70c4ef86?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2: "https://images.unsplash.com/photo-1696388882435-4a8a116dff2c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Kerala Tour",
    nameBg: "bg-gray-900",
    fontColour: "text-white",
    description: "Along the way, trekkers visit remote villages where the traditions of the indigenous people have remained unchanged for centuries. The hospitality of the local communities is warm and welcoming, and trekkers have the opportunity to witness vibrant festivals, try local delicacies, and interact with the Sherpa people, who are known for their resilience and mountaineering expertise. The trek also offers a deep sense of inner peace and connection with nature. Whether it’s watching the sunrise over snow-capped peaks, meditating at Buddhist monasteries, or crossing high-altitude passes, the Himalaya Trek allows trekkers to experience a spiritual journey that goes beyond the physical challenge.",
    video: "https://www.youtube.com/embed/75dtOVVhB8E?si=2rXa2X-igMNgzGSt",
    image1: "https://images.unsplash.com/photo-1730621617604-f464d2676c92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2: "https://images.unsplash.com/photo-1593417033868-d18d4099d78e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
  // Add more data as needed
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length);
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };


  useEffect(() => {
    const handleScroll = (event) => {
      if (carouselRef.current) {
        const scrollDirection = event.deltaY || event.deltaX;
        if (scrollDirection > 0) {
          nextCard();
        } else {
          prevCard();
        }
      }
    };
  
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("wheel", handleScroll, { passive: true });
    }
  
    return () => {
      if (carousel) {
        carousel.removeEventListener("wheel", handleScroll);
      }
    };
  }, [currentIndex]); // Add currentIndex as dependency
  

  return (
    <div>
      <div className="flex flex-row justify-center sticky top-0 z-50">
        <NavBar />
      </div>
      <div>
        <Tagline />
      </div>
      <div>
        <VideoSection />
      </div>
      <div className="text-center pt-14 pb-4 text-2xl font-safira-march">Upcoming Trips</div>
      <div
        className="relative overflow-hidden mx-20"
        ref={carouselRef}
      >
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {carouselData.map((cardData, index) => (
            <div key={index} className="flex-shrink-0 w-full px-4">
              <EventCard cardData={cardData} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        {carouselData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`h-2 w-2 mx-2 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === index ? 'w-6 bg-green-600' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
      <div>
        <Gallery/>
      </div>
      <div className="bg-green-400 h-[207vh]"></div>
    </div>
  );
}


export default Home;
