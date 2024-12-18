import React from 'react'
import Image from 'next/image'
import Bg from '@/Image/home.jpg'
function Home() {
  return (
    <div className='Home'>

      <div className='hcol'>
        <h1>YOUR SAFTEY</h1>
        <h2>OUR RESPONSIBILITY</h2>
        <p>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Earum rerum veniam reprehenderit tenetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime provident facilis numquam illum dicta! </p>
      <div className='bth'>
        <button className='btho'>ReadMore</button>
        <button className='bthn' >GetAQuote</button>
      </div>
      </div>
      <div className='Homeimage'>
        <Image className='image'
         src={Bg}
          alt="img"
        />
      </div>
    
    </div>
  )
}

export default Home