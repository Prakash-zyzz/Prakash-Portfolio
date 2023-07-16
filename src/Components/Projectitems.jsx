import React from 'react'

const Projectitems = ({img,title,url}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#00172D]'>
        <img className='rounded-xl group-hover:opacity-10'  src={img} alt='/'/>
        <div className='hidden group-hover:block absolute'>
            <h3 className='text-2xl font-bold text-center text-white tracking-wider tracking-center'>{title}</h3>
            <p className='pb-4 pt-2 text-white text-center'>React Js</p>
            <a href={url} target='blank'>
              <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>More Info</p>
            </a>

            

        </div>
    </div>
  )
}

export default Projectitems

