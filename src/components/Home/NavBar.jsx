import React, { useState } from 'react';

function NavBar() {

    const [activeSection, setActiveSection] = useState("Home"); // State to track the active section

    const NavBarData = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "Trips",
            link: ""
        },
        {
            title: "Gallery",
            link: ""
        },
        {
            title: "About",
            link: ""
        },
        {
            title: "Contact",
            link: ""
        }
    ];
  return (
    <div className='bg-white flex flex-row justify-between items-center w-3/6 mt-4 rounded-3xl shadow-xl'>
        <div className='ml-6'>Folkora</div>
        <div className=' flex flex-row gap-4 mr-6'>
                    {/* sidebar menu */}
                    {NavBarData.map((items, i) => (
                        <div
                            key={i}
                            onClick={() => setActiveSection(items.title)} // Update the active section on click
                            className={` cursor-pointer my-4 text-gray-800 flex flex-row
                                ${
                                    activeSection === items.title
                                        ? "text-green-600" // Highlight active section
                                        : ":text-green-300"
                                } group`}
                        >
                            {items.title}
                        </div>
                    ))}
                </div>
    </div>
  )
}

export default NavBar