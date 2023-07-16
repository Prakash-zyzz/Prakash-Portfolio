import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 px-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#00172D]'>Contact</h1>
        <form action="https://getform.io/f/7f6d0f17-b249-4ca1-b252-b1835a491b2d" method='post' encType='multipart/form-data'>
            
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name' />
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300'  type='text' name='phone number' />
                </div>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Email</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300'  type="email" name="mail"/>
            </div>
            <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>Subject</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="subject" />
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Message</label>
                <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows="10" name='message'></textarea>
            </div>
            <button className='bg-[#00172D] text-center mt-4 text-gray-100 w-full rounded-md  p-4 '>
                Send Message.
            </button>
        </form>
        
    </div>
  )
}

export default Contact