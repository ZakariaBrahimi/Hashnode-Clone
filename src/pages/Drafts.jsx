import React from 'react'

const Drafts = () => {
  return (
    <div>
      <div className='pt-10 pb-5 md:pb-10 px-6 mb-5 flex bg-white rounded-xl border flex-col justify-between items-between md:flex-row md:'>
        <div>
          <h1 className='md:text-3xl text-lg font-bold mb-1'>Your Drafts</h1>
          <p className='text-[#374151] '>All your pending drafts are here</p>
        </div>
        <a href='0' className='flex items-center gap-2 mt-3 md-mt-0 md:h-fit w-fit border border-[#3466f6] rounded-full px-3 py-1 font-medium text-[#3466f6] hover:bg-[#eff6ff]'>
          <svg fill='#3466f6' class="h-4 w-4" viewBox="0 0 512 512"><path d="M362.7 19.32c25-24.998 65.6-24.998 90.6 0l39.4 39.43c25 24.99 25 65.55 0 90.55l-48.4 48.4-130-129.98 48.4-48.4zm59 200.98L188.5 453.4c-10.4 10.4-23.3 18.1-37.4 22.2L30.77 511c-8.42 2.5-17.53.2-23.74-6.9-6.21-5.3-8.532-14.4-6.054-22.9L36.37 360.9c4.16-14.1 11.79-27 22.2-37.4L291.7 90.34l130 129.96z"></path></svg>
          <span className=''>Create New Article</span>
        </a>
      </div>
      <div className='bg-white border rounded-xl  '>


        <div className='flex flex-col gap-6 px-4 py-6 md:flex-row border-b'>
          <div className='bg-[#e5e7eb] pb-[50%]  cursor-pointer md:pb-0 mb-4 relative rounded-md flex justify-center items-center w-full md:w-4/12 lg:w-6/12'>
            <a className=' mr-4 md:mr-0 h-max-content top-[52%] md:top-0 absolute md:relative opacity-70' href="0">NO COVER</a>
          </div>
          <div className='w-7/12'>
            <h2 className='mb-2 text-xl font-bold cursor-pointer text-[#3466f6]'>No Title</h2>
            <p className='text-[#374151] mb-2 cursor-pointer'>grfgrf ![cfm logo.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1664556892947/tYYqufcfu.jpg align="left") </p>
            <p className='text-[#374151]'><span className='opacity-75'>Last updated</span> : September 30, 2022</p>
          </div>
          <div className='flex gap-2 items-center md:items-start'>
            <button className='text-[#374151] hover:bg-[#e5e7eb] rounded-full py-1 px-3'>Edit</button>
            <button className='hover:bg-[#e5e7eb] rounded-full py-1 px-3'>
              <svg fill='#374151' class="w-5 h-5 opacity-75" viewBox="0 0 448 512"><path d="M296 432h16a8 8 0 008-8V152a8 8 0 00-8-8h-16a8 8 0 00-8 8v272a8 8 0 008 8zm-160 0h16a8 8 0 008-8V152a8 8 0 00-8-8h-16a8 8 0 00-8 8v272a8 8 0 008 8zM440 64H336l-33.6-44.8A48 48 0 00264 0h-80a48 48 0 00-38.4 19.2L112 64H8a8 8 0 00-8 8v16a8 8 0 008 8h24v368a48 48 0 0048 48h288a48 48 0 0048-48V96h24a8 8 0 008-8V72a8 8 0 00-8-8zM171.2 38.4A16.1 16.1 0 01184 32h80a16.1 16.1 0 0112.8 6.4L296 64H152zM384 464a16 16 0 01-16 16H80a16 16 0 01-16-16V96h320zm-168-32h16a8 8 0 008-8V152a8 8 0 00-8-8h-16a8 8 0 00-8 8v272a8 8 0 008 8z"></path></svg>
            </button>
          </div>
        </div>

        <div className='flex flex-col gap-6 px-4 py-6 md:flex-row border-b'>
          <div className='bg-[#e5e7eb] pb-[50%] cursor-pointer md:pb-0 mb-4 relative rounded-md flex justify-center items-center w-full md:w-4/12 lg:w-6/12'>
            <a className=' mr-4 md:mr-0 h-max-content top-[52%] md:top-0 absolute md:relative opacity-70' href="0">NO COVER</a>
          </div>
          <div className='w-7/12'>
            <h2 className='mb-2 text-xl font-bold cursor-pointer text-[#3466f6]'>No Title</h2>
            <p className='text-[#374151] mb-2 cursor-pointer'>grfgrf ![cfm logo.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1664556892947/tYYqufcfu.jpg align="left") </p>
            <p className='text-[#374151]'><span className='opacity-75'>Last updated</span> : September 30, 2022</p>
          </div>
          <div className='flex gap-2 items-center md:items-start'>
            <button className='text-[#374151] hover:bg-[#e5e7eb] rounded-full py-1 px-3'>Edit</button>
            <button className='hover:bg-[#e5e7eb] rounded-full py-1 px-3'>
              <svg fill='#374151' class="w-5 h-5 opacity-75" viewBox="0 0 448 512"><path d="M296 432h16a8 8 0 008-8V152a8 8 0 00-8-8h-16a8 8 0 00-8 8v272a8 8 0 008 8zm-160 0h16a8 8 0 008-8V152a8 8 0 00-8-8h-16a8 8 0 00-8 8v272a8 8 0 008 8zM440 64H336l-33.6-44.8A48 48 0 00264 0h-80a48 48 0 00-38.4 19.2L112 64H8a8 8 0 00-8 8v16a8 8 0 008 8h24v368a48 48 0 0048 48h288a48 48 0 0048-48V96h24a8 8 0 008-8V72a8 8 0 00-8-8zM171.2 38.4A16.1 16.1 0 01184 32h80a16.1 16.1 0 0112.8 6.4L296 64H152zM384 464a16 16 0 01-16 16H80a16 16 0 01-16-16V96h320zm-168-32h16a8 8 0 008-8V152a8 8 0 00-8-8h-16a8 8 0 00-8 8v272a8 8 0 008 8z"></path></svg>
            </button>
          </div>
        </div>

        <div className='flex flex-col gap-6 px-4 py-6 md:flex-row border-b'>
          <div className='bg-[#e5e7eb] pb-[50%] cursor-pointer md:pb-0 mb-4 relative rounded-md flex justify-center items-center w-full md:w-4/12 lg:w-6/12'>
            <a className=' mr-4 md:mr-0 h-max-content top-[52%] md:top-0 absolute md:relative opacity-70' href="0">NO COVER</a>
          </div>
          <div className='w-7/12'>
            <h2 className='mb-2 text-xl font-bold cursor-pointer text-[#3466f6]'>No Title</h2>
            <p className='text-[#374151] mb-2 cursor-pointer'>grfgrf ![cfm logo.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1664556892947/tYYqufcfu.jpg align="left") </p>
            <p className='text-[#374151]'><span className='opacity-75'>Last updated</span> : September 30, 2022</p>
          </div>
          <div className='flex gap-2 items-center md:items-start'>
            <button className='text-[#374151] hover:bg-[#e5e7eb] rounded-full py-1 px-3'>Edit</button>
            <button className='hover:bg-[#e5e7eb] rounded-full py-1 px-3'>
              <svg fill='#374151' class="w-5 h-5 opacity-75" viewBox="0 0 448 512"><path d="M296 432h16a8 8 0 008-8V152a8 8 0 00-8-8h-16a8 8 0 00-8 8v272a8 8 0 008 8zm-160 0h16a8 8 0 008-8V152a8 8 0 00-8-8h-16a8 8 0 00-8 8v272a8 8 0 008 8zM440 64H336l-33.6-44.8A48 48 0 00264 0h-80a48 48 0 00-38.4 19.2L112 64H8a8 8 0 00-8 8v16a8 8 0 008 8h24v368a48 48 0 0048 48h288a48 48 0 0048-48V96h24a8 8 0 008-8V72a8 8 0 00-8-8zM171.2 38.4A16.1 16.1 0 01184 32h80a16.1 16.1 0 0112.8 6.4L296 64H152zM384 464a16 16 0 01-16 16H80a16 16 0 01-16-16V96h320zm-168-32h16a8 8 0 008-8V152a8 8 0 00-8-8h-16a8 8 0 00-8 8v272a8 8 0 008 8z"></path></svg>
            </button>
          </div>
        </div>

        <div className='flex flex-col gap-6 px-4 py-6 md:flex-row border-b'>
          <div className='bg-[#e5e7eb] pb-[50%] cursor-pointer md:pb-0 mb-4 relative rounded-md flex justify-center items-center w-full md:w-4/12 lg:w-6/12'>
            <a className=' mr-4 md:mr-0 h-max-content top-[52%] md:top-0 absolute md:relative opacity-70' href="0">NO COVER</a>
          </div>
          <div className='w-7/12'>
            <h2 className='mb-2 text-xl font-bold cursor-pointer text-[#3466f6]'>No Title</h2>
            <p className='text-[#374151] mb-2 cursor-pointer'>grfgrf ![cfm logo.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1664556892947/tYYqufcfu.jpg align="left") </p>
            <p className='text-[#374151]'><span className='opacity-75'>Last updated</span> : September 30, 2022</p>
          </div>
          <div className='flex gap-2 items-center md:items-start'>
            <button className='text-[#374151] hover:bg-[#e5e7eb] rounded-full py-1 px-3'>Edit</button>
            <button className='hover:bg-[#e5e7eb] rounded-full py-1 px-3'>
              <svg fill='#374151' class="w-5 h-5 opacity-75" viewBox="0 0 448 512"><path d="M296 432h16a8 8 0 008-8V152a8 8 0 00-8-8h-16a8 8 0 00-8 8v272a8 8 0 008 8zm-160 0h16a8 8 0 008-8V152a8 8 0 00-8-8h-16a8 8 0 00-8 8v272a8 8 0 008 8zM440 64H336l-33.6-44.8A48 48 0 00264 0h-80a48 48 0 00-38.4 19.2L112 64H8a8 8 0 00-8 8v16a8 8 0 008 8h24v368a48 48 0 0048 48h288a48 48 0 0048-48V96h24a8 8 0 008-8V72a8 8 0 00-8-8zM171.2 38.4A16.1 16.1 0 01184 32h80a16.1 16.1 0 0112.8 6.4L296 64H152zM384 464a16 16 0 01-16 16H80a16 16 0 01-16-16V96h320zm-168-32h16a8 8 0 008-8V152a8 8 0 00-8-8h-16a8 8 0 00-8 8v272a8 8 0 008 8z"></path></svg>
            </button>
          </div>
        </div>



      </div>
      <p className='p-6 my-5 text-[#616161] bg-white border rounded-xl flex justify-center text-xl'>You've reached the end! 👋</p>
    </div>
  )
}

export default Drafts