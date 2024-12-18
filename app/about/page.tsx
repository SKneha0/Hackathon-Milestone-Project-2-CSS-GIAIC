import React from 'react'
import  Image from 'next/image'
import Aimg from '@/Image/contact.jpg'
function page() {
  return (
    <div className='about'>
      <div className='aboutcol'>
        <h1>WHO ARE WE?</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, culpa? Dignissimos illo suscipit ab odit beatae expedita asperiores temporibus provident, quaerat non dolor repellat enim Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, blanditiis est modi autem mollitia sint!</p>
        <div className='btn'>
            <button>READ MORE</button>
        </div>
      </div>
      <div className='aboutimg'>
        <Image src={Aimg} alt="img" />
      </div>
    </div>
  )
}

export default page
