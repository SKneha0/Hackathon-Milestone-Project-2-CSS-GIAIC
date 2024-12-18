import React from 'react'
function page() {
  return (
    <div className='maindiv'>
      
          <div className='contact'>
        <h1>GET IN TOUCH</h1>
      </div>
      <div className='inboxes'>
       <div className='inbox'>
       <input type="text" name="Name" placeholder='Enter your Name' />
        <input type="email" name="Email" placeholder='Enter your Email' />
       </div>
       <div className='subject'>
        <input type="text" name="Subject" placeholder='Number' />
       </div>
       <div className='message'>
        <textarea name="Message" placeholder='Any Message'/>
          </div>
          <div className='bth'>
          <button > Send Message</button>
            </div>
      </div>
      <div>
       
      </div>
    </div>
  )
}

export default page