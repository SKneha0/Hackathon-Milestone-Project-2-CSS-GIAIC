import React from 'react'
import { GrUserPolice } from "react-icons/gr";
import { ImOffice } from "react-icons/im";
import { GiPoliceOfficerHead } from "react-icons/gi";
function page() {
  return (
    <div className='services'>
      <div className='servicescol'>
        <h1>OUR SERVICES</h1>
      </div>
      <div className='servicesblogs'>
        <div className='blog-1'>
            <GrUserPolice className='icons'/>
            <h2>HOME SECURITY</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quis? Lorem ipsum dolor sit amet.</p>
            <button className='btn'>Read More</button>
        </div>
        <div className='blog-1'>
            <ImOffice className='icons'/>
            <h2>OFFICE SECURITY</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quis? Lorem ipsum dolor sit amet.</p>
            <button className='btn'>Read More</button>
        </div>
        <div className='blog-1'>
            <GiPoliceOfficerHead className='icons'/>
            <h2>BODYGUARD</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quis? Lorem ipsum dolor sit amet.</p>
            <button className='btn'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default page