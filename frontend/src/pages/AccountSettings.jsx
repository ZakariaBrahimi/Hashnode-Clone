import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AccountSettings = () => {
  return (
    <div className='sm:max-w-[640px] sm:mx-auto md:max-w-[760px] md:mx-auto lg:max-w-[1030px] lg:mx-auto lg:grid lg:grid-cols-12 gap-4 xl:max-w-[1280px] xl:mx-auto'>
        <div className='lg:col-span-3 xl:col-span-3 '>
            <div class="p-4 mb-2 bg-white border rounded-lg dark:text-gray-400 dark:bg-gray-900 dark:border-gray-800">
                <h1 class="text-2xl font-bold">User Settings</h1>
            </div>
            <div class="flex flex-row items-end mb-2  overflow-auto text-sm font-bold text-gray-700 uppercase bg-white border rounded-lg whitespace-nowrap lg:items-start lg:flex-col dark:bg-gray-900 dark:border-gray-800 dark:text-gray-400">
                <Link to='' class="hover:bg-[#f3f4f6] px-3 md:px-6 py-4 w-full flex flex-row items-center text-accent-blue-A700" href="/settings">
                    <svg  class="w-6 h-6 mr-4 opacity-75 fill-current" viewBox="0 0 496 512">
                        <path fill='blue' d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm128 421.6c-35.9 26.5-80.1 42.4-128 42.4s-92.1-15.9-128-42.4V416c0-35.3 28.7-64 64-64 11.1 0 27.5 11.4 64 11.4 36.6 0 52.8-11.4 64-11.4 35.3 0 64 28.7 64 64v13.6zm30.6-27.5c-6.8-46.4-46.3-82.1-94.6-82.1-20.5 0-30.4 11.4-64 11.4S204.6 320 184 320c-48.3 0-87.8 35.7-94.6 82.1C53.9 363.6 32 312.4 32 256c0-119.1 96.9-216 216-216s216 96.9 216 216c0 56.4-21.9 107.6-57.4 146.1zM248 120c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88zm0 144c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z"></path>
                    </svg>
                    <span className='text-blue-600'>Profile</span>
                </Link>
                <a class="hover:bg-[#f3f4f6] px-3 md:px-6 py-4 w-full flex flex-row items-center text-accent-blue-A700" href="/settings">
                    <svg class="w-6 h-6 mr-4 opacity-75 fill-current" viewBox="0 0 512 512"><path d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"></path>
                    </svg>
                    <span>Email Notifications</span>
                </a>
                <Link to='password-change' class="hover:bg-[#f3f4f6] px-3 md:px-6 py-4 w-full flex flex-row items-center text-accent-blue-A700" href="/settings">
                    <svg class="w-6 h-6 mr-4 opacity-75 fill-current" viewBox="0 0 576 512"><path d="M228.5 511.8l-25-7.1c-3.2-.9-5-4.2-4.1-7.4L340.1 4.4c.9-3.2 4.2-5 7.4-4.1l25 7.1c3.2.9 5 4.2 4.1 7.4L235.9 507.6c-.9 3.2-4.3 5.1-7.4 4.2zm-75.6-125.3l18.5-20.9c1.9-2.1 1.6-5.3-.5-7.1L49.9 256l121-102.5c2.1-1.8 2.4-5 .5-7.1l-18.5-20.9c-1.8-2.1-5-2.3-7.1-.4L1.7 252.3c-2.3 2-2.3 5.5 0 7.5L145.8 387c2.1 1.8 5.3 1.6 7.1-.5zm277.3.4l144.1-127.2c2.3-2 2.3-5.5 0-7.5L430.2 125.1c-2.1-1.8-5.2-1.6-7.1.4l-18.5 20.9c-1.9 2.1-1.6 5.3.5 7.1l121 102.5-121 102.5c-2.1 1.8-2.4 5-.5 7.1l18.5 20.9c1.8 2.1 5 2.3 7.1.4z"></path></svg>
                    <span>Change Password</span>
                </Link>
                <Link to='delete-account' class="hover:bg-[#f3f4f6] px-3 md:px-6 py-4 w-full flex flex-row items-center text-accent-blue-A700" href="/settings">
                    <svg class="w-6 h-6 mr-4 opacity-75 fill-current" viewBox="0 0 512 512"><path d="M168 255.1c0-47.7 39.4-88 88-88s88 40.3 88 88c0 49.5-39.4 88.9-88 88.9s-88-39.4-88-88.9zm88-56c-30.9 0-56 26-56 56 0 31.8 25.1 56 56 56s56-24.2 56-56c0-30-25.1-56-56-56zM65.67 230.6l-40.33-36.8c-11.12-10.1-13.68-26.6-6.16-39.6l30.24-52.4c7.52-13.02 23.09-19.05 37.42-14.48l51.96 16.58c13.4-10.34 28.2-18.94 44-25.47l11.7-53.27C197.7 10.47 210.7 0 225.8 0h60.4c15.1 0 28.1 10.47 31.3 25.16l11.7 53.27c14.9 6.53 30.6 15.13 44 25.47l52-16.58c14.3-4.57 29.9 1.46 37.4 14.48l30.2 52.4c7.5 13 5 29.5-6.1 39.6l-40.4 36.8c1.1 8.3 1.7 16.8 1.7 24.5 0 9.5-.6 18-1.7 26.3l40.4 36.8c11.1 10.1 13.6 26.6 6.1 39.6l-30.2 52.4c-7.5 13-23.1 19-37.4 14.5l-52-16.6c-13.4 10.3-29.1 18.9-44 25.5l-11.7 53.2c-3.2 14.7-16.2 25.2-31.3 25.2h-60.4c-15.1 0-28.1-10.5-31.3-25.2l-11.7-53.2c-15.8-6.6-30.6-15.2-44-25.5l-51.96 16.6c-14.33 4.5-29.9-1.5-37.42-14.5l-30.24-52.4c-7.52-13-4.96-29.5 6.16-39.6l40.33-36.8c-1.1-8.3-1.67-16.8-1.67-26.3 0-7.7.57-16.2 1.67-24.5zm92.73-101.4-13.3 10.3-67.97-21.7-30.24 52.4 52.69 48-2.19 16.6c-.92 6.9-1.39 14-1.39 20.3 0 8.1.47 15.2 1.39 22.1l2.19 16.6-52.69 48 30.24 52.4 67.97-21.7 13.3 10.3c11.1 8.6 23.5 15.8 36.6 20.3l15.5 7.3 15.3 69.6h60.4l15.3-69.6 14.6-7.3c14-4.5 26.4-11.7 37.5-20.3l13.3-10.3 68 21.7 30.2-52.4-52.7-48 2.2-16.6c.9-6.9 1.4-14 1.4-21.2 0-7.2-.5-14.3-1.4-21.2l-2.2-16.6 52.7-48-30.2-52.4-68 21.7-13.3-10.3c-11.1-8.6-23.5-15.8-37.5-21.2l-14.6-6.4L286.2 32h-60.4l-15.3 69.6L195 108c-13.1 5.4-25.5 12.6-36.6 21.2z"></path></svg>
                    <span>Account</span>
                </Link>
                
            </div>
        </div>
        <Outlet />
        
    </div>
  )
}

export default AccountSettings