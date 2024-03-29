import {useState, useRef, useEffect, useContext} from 'react'
import myPicture from '../assets/img/myPicture.jpg'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthContext'
import DarkModeContext from '../context/DarkModeContext'

// import useWebSocket, { ReadyState } from 'react-use-websocket';

const Navbar = () => {
  let {logoutUser, userData} = useContext(AuthContext)
  let {isDark, setIsDark}  = useContext(DarkModeContext)
  let location = useLocation();
  let notificationsBox = useRef()
  let notificationsIcon = useRef()
  let profileIcon = useRef()
  let profileBox = useRef()
  const [open, isOpen] = useState(false)
  const [profileOpen, isProfileOpen] = useState(false)
  const [notificationsOpen, isNotificationsOpen] = useState(false)
  useEffect(()=>{
    const handler = (e)=>{
       if(!notificationsBox.current.contains(e.target) && !notificationsIcon.current.contains(e.target)){
        isNotificationsOpen(false)
      }
    }
    const profileHandler = (e)=>{
      if(!profileBox.current.contains(e.target) && !profileIcon.current.contains(e.target)){
        isProfileOpen(false)
     }
   }
    document.addEventListener('click', profileHandler)
    document.addEventListener('click', handler)
    return ()=>{
      document.removeEventListener('click', handler)
      document.removeEventListener('click', profileHandler)
    }
  })



  if(location.pathname !== '/onboard'){
    return (
      <header className='relative'>
        {/* Notifications Box */}
        <div className={`${notificationsOpen ? 'md:flex' : 'hidden'} hidden`} ref={notificationsBox}>
        <div className='absolute dark:border-[#1e293b] bg-white dark:bg-black top-[3.9rem] right-[5.25rem] w-5 h-5 z-50 origin-center rotate-45 border-t shadow-t shadow-l rounded-l-sm border-l'></div>
        <div className='rounded-md absolute flex flex-col bg-white dark:bg-black top-[4.589rem] right-20 z-40 border-x border-b dark:border-[#1e293b] shadow pt-6'>
              <div className='mx-4  flex justify-between items-center dark:border-[#1e293b] border-b pb-4'>
                <h1 className='text-2xl font-bold dark:text-white text-[#212121]'>Notifications</h1>
                <button className='flex justify-between items-center gap-2 dark:hover:bg-[#334155] hover:bg-[#e5e7eb] rounded-full py-1 px-3'>
                  <p className='font-semibold text-[#3466f6]'>Mark all as read</p>
                  <svg fill='#3466f6' class="h-5 w-5" viewBox="0 0 448 512"><path d="M444.96 159l-12.16-11c-2.03-2.67-4.72-4-8.11-4s-6.08 1.33-8.11 4L131.77 428 31.42 329c-2.03-2.67-4.72-4-8.11-4s-6.08 1.33-8.11 4L3.04 340C1.01 342.67 0 345.67 0 349s1.01 6 3.04 8l120.62 119c2.69 2.67 5.57 4 8.62 4s5.92-1.33 8.62-4l304.07-300c2.03-2 3.04-4.67 3.04-8s-1.02-6.33-3.05-9zM127.17 284.03c2.65 2.65 5.48 3.97 8.47 3.97s5.82-1.32 8.47-3.97L365.01 63.8c1.99-2 2.99-4.65 2.99-7.96s-1-6.29-2.99-8.94l-11.96-10.93c-1.99-2.65-4.64-3.97-7.97-3.97s-5.98 1.32-7.97 3.97L135.14 236.34l-72.25-72.03c-1.99-2.65-4.64-3.97-7.97-3.97s-5.98 1.32-7.97 3.97l-11.96 10.93C33 177.89 32 180.87 32 184.18s1 5.96 2.99 7.95l92.18 91.9z"></path></svg>
                </button>
              </div>
              <div className='font-medium mb-6 mt-3 mx-4 text-[#374151] flex gap-2 border-b dark:border-[#1e293b] overflow-auto whitespace-nowrap'>
                <button className='dark:hover:bg-[#334155] dark:text-[#e2e8f0] hover:bg-[#e5e7eb] rounded-t-md py-3 px-4'>All notifications</button>
                <button className='flex gap-2 dark:text-[#e2e8f0] dark:hover:bg-[#334155] hover:bg-[#e5e7eb] rounded-t-md py-3 px-4'>
                <svg fill={isDark ? 'white' : "#333333"} className="h-5 w-5" viewBox="0 0 512 512"><path d="M256 64c123.5 0 223.1 79 223.1 176S379.5 416 256 416c-28.25 0-56.24-4.25-83.24-12.75a31.662 31.662 0 0 0-28.07 4.338c-22.1 16.25-58.54 35.29-102.7 39.66 11.1-15.12 29.75-40.5 40.74-69.62l.129-.339c4.283-11.27 1.79-23.1-6.43-32.82C47.51 313.1 32.06 277.6 32.06 240 32.06 143 132.6 64 256 64zm0-32C114.7 32 .027 125.1.027 240c0 47.63 19.92 91.25 52.91 126.2-14.87 39.5-45.87 72.88-46.37 73.25-6.624 7-8.374 17.25-4.625 26C5.817 474.2 14.38 480 24 480c61.49 0 109.1-25.75 139.1-46.25 29 9.05 60.2 14.25 92.9 14.25 141.4 0 255.1-93.13 255.1-208S397.4 32 256 32z"></path></svg>
                  <span>Comments</span>
                </button >
                <button className='flex gap-2 dark:hover:bg-[#334155] hover:bg-[#e5e7eb] rounded-t-md py-3 px-4 text-[#3466f6] border-b-2 border-blue-600'>
                <svg fill='#3466f6' className="h-5 w-5" viewBox="0 0 512 512"><path d="M88 192H40c-22.06 0-40 17.9-40 40v208c0 22.1 17.94 40 40 40h48c22.1 0 40-17.9 40-40V232c0-22.1-17.9-40-40-40zm8 248c0 4.4-3.59 8-8 8H40c-4.41 0-8-3.6-8-8V232c0-4.4 3.59-8 8-8h48c4.41 0 8 3.6 8 8v208zm416-218.5c0-33.9-27.6-61.5-61.5-61.5H348c11.98-27.06 18.83-53.48 18.83-67.33C366.9 62.84 343.6 32 304.9 32c-41.22 0-50.7 29.11-59.12 54.81C218.1 171.1 160 184.8 160 208c0 9.1 7.5 16 16 16 4.1 0 8.2-1.6 11.3-4.7 52.68-53.04 67.02-56.11 88.81-122.5C285.3 68.95 288.2 64 304.9 64c20.66 0 29.94 16.77 29.94 28.67 0 10.09-8.891 43.95-26.62 75.48a15.976 15.976 0 0 0-2.046 7.83C306.2 185.5 314 192 322.2 192h128.3c16.3 0 29.5 13.2 29.5 29.5 0 15.33-12.08 28.16-27.48 29.2-8.462.581-14.91 7.649-14.91 15.96 0 12.19 12.06 12.86 12.06 30.63 0 14.14-10.11 26.3-24.03 28.89-5.778 1.082-13.06 6.417-13.06 15.75 0 8.886 6.765 10.72 6.765 23.56 0 31.02-31.51 22.12-31.51 43.05 0 3.526 1.185 5.13 1.185 10.01C389 434.8 375.8 448 359.5 448h-55.6c-82.01 0-108.3-64.02-127.9-64.02-8.873 0-16 7.193-16 15.96-.9 16.36 64.6 80.06 143.9 80.06h55.63c33.91 0 61.5-27.58 61.5-61.47 18.55-10.86 30.33-31 30.33-53.06 0-4.797-.594-9.594-1.734-14.27 19.31-10.52 32.06-30.97 32.06-53.94 0-7.219-1.281-14.31-3.75-20.98C498.2 266.2 512 245.3 512 221.5z"></path></svg>
                  <span className='flex gap-2'>Reactions</span>
                </button>
                <button className='flex gap-2 dark:hover:bg-[#334155] hover:bg-[#e5e7eb] dark:text-[#e2e8f0] rounded-t-md py-3 px-4'>
                <svg fill={isDark ? 'white' : "#333333"} className="h-5 w-5" viewBox="0 0 512 512"><path d="M259.7 16.03C116.5 13.94 2.766 140.5 17.25 283.1c11.96 117.8 102.2 205.2 221.5 212.8 9.275.596 17.18-6.739 17.18-16.04 0-8.395-6.552-15.39-14.92-15.92-106.1-6.828-185.7-86.38-192.7-192.5-7.852-119.6 82.95-220.8 202.6-223.4 118.1-2.607 212.1 89.77 212.1 208.2v22.46c0 26.43-17.55 50.57-43.34 56.27-36.37 8.039-68.67-19.59-68.67-54.64v-120.1c0-8.846-7.168-16.02-16.01-16.02-8.838 0-16.02 7.165-16.02 16.01v17.88c-24.95-25.56-61.83-39.39-101.6-31.85-43.87 8.45-79.57 44.45-87.57 89.35-12.72 70.86 41.68 132.8 110.2 132.8 37.39 0 70.32-18.63 90.68-46.9 16.48 30.84 50.34 51.03 88.7 46.15 44.44-5.656 76.63-45.58 76.63-90.42V256.3C495.1 122.8 392.5 17.96 259.7 16.03zM239.9 336.3c-44.13 0-80.02-35.93-80.02-80.09s35.92-80.01 80.02-80.01 80.02 35.93 80.02 80.09-35.82 80.01-80.02 80.01z"></path></svg>
                  <span>Mentions</span>
                </button>
              </div>
              <div className='flex px-4 py-20 justify-center items-center dark:text-[#e2e8f0] text-[#616161] text-xl font-medium border-b dark:border-[#1e293b]'>
                <p>No notifications yet!</p>
              </div>
              <button className='dark:hover:bg-[#334155] hover:bg-[#e5e7eb]  py-3 font-bold text-blue-600'>See all notifications</button>
        </div>
        </div>
  
        {/* pROFILE BOX */}
        <div className={`${profileOpen ? 'md:flex' : 'hidden'} hidden text-[#111827]`} ref={profileBox}>
        <div className='absolute dark:bg-black dark:border-[#1e293b] bg-white top-[3.9rem] right-[1.7rem] w-5 h-5 z-40 origin-center rotate-45 border-t shadow-t shadow-l rounded-l-sm border-l'></div>
        <div className='w-64 max-w-sm h-18 rounded-md dark:bg-black absolute flex flex-col bg-white top-[4.589rem] right-[1.275rem] dark:border-[#1e293b] z-50 border-x border-b shadow'>
              <Link to={`profile/${userData?.id}`} className='flex gap-4 items-center border-b dark:border-[#1e293b] dark:hover:bg-[#334155] hover:bg-[#e5e7eb] cursor-pointer p-6'>
                <div>
                  <img className='h-14 w-14 rounded-full ' src={myPicture} alt="" />
                </div>
                <div>
                  <h3 className='font-bold dark:text-white'>{userData?.fullname}</h3>
                  <p className='text-[#4b5563] dark:text-white text-sm text-ellipsis whitespace-nowrap overflow-hidden'>@{userData?.fullname}</p>
                </div>
              </Link>
              <div className=" flex flex-col gap-3 border-b dark:border-[#1e293b]">            
                
                <Link to="drafts" aria-label="Drafts" className="dark:text-white dark:hover:bg-[#334155] py-4 px-6 flex gap-2 p-2 hover:bg-[#e5e7eb] font-medium">
                  <svg fill='#111827' className="h-5 w-5" viewBox="0 0 384 512"><path fill="currentColor" d="M365.3 125.3 258.8 18.8C246.7 6.742 230.5 0 213.5 0H64C28.65 0 0 28.65 0 64l.006 384c0 35.35 28.65 64 64 64H320c35.35 0 64-28.65 64-64V170.5c0-17-6.7-33.2-18.7-45.2zM224 34.08c4.477 1.566 8.666 3.846 12.12 7.299l106.5 106.5c3.48 3.421 5.78 7.621 7.28 12.121H240c-8.8 0-16-7.2-16-16V34.08zM352 448c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h128v112c0 26.5 21.5 48 48 48h112v256zM96.82 360.1a15.883 15.883 0 0 0-4.342 8.113l-12.16 60.79c-2.217 11.11 7.574 20.91 18.69 18.68l60.79-12.15a15.867 15.867 0 0 0 8.109-4.344l122.2-122.2c7.559-7.555 12.82-17.37 13.76-28.02 1.158-13.14-3.432-25.7-12.62-34.88l-8.172-8.176c-7.559-7.559-17.37-12.83-28.01-13.78-13.14-1.172-25.7 3.414-34.89 12.59L96.82 360.1zm51.98 45.2-32.72 6.539 6.543-32.71 86.22-86.23 26.18 26.18L148.8 405.3zm93.8-146.1c4.652-4.645 12.19-4.652 16.84.004l9.338 9.336c4.641 4.64 4.668 12.18-.004 16.84l-11.22 11.22-26.18-26.18L242.6 259.2z"></path></svg>
                  <span>My drafts</span>
                </Link>
                <Link to="bookmarks" aria-label="Bookmarks" className="dark:text-white py-4 px-6 flex gap-2 p-2 dark:hover:bg-[#334155] hover:bg-[#e5e7eb] font-medium">
                  <svg fill='#111827' className="h-5 w-5" viewBox="0 0 448 512"><path fill="currentColor" d="M448 368V48c0-26.51-21.5-48-48-48H80C35.82 0 0 35.82 0 80v368c0 35.35 28.66 64 64 64h368c8.844 0 16-7.156 16-16s-7.2-16-16-16h-16v-66.95c18.6-6.65 32-24.25 32-45.05zM320 32v174.7l-54.9-43.2c-2-2.3-5.6-3.5-9.1-3.5s-7.062 1.172-10 3.5l-54 43.2V32h128zm64 448H64c-17.64 0-32-14.36-32-32s14.36-32 32-32h320v64zm16-96H64c-11.71 0-22.55 3.389-32 8.9V80c0-26.51 21.49-48 48-48h80v208c0 6.156 3.531 11.75 9.062 14.42 5.562 2.672 12.09 1.891 16.94-1.922L256 196.5l69.1 56.02c3.8 2.28 7.3 3.48 10.9 3.48 2.344 0 4.719-.516 6.938-1.578C348.5 251.8 352 246.2 352 240V32h48c8.8 0 16 7.16 16 16v320c0 8.8-7.2 16-16 16z"></path></svg>
                  <span>My bookmarks</span>
                </Link>
                <Link to="settings" aria-label="Explore" className="dark:text-white py-4 px-6 flex gap-2 p-2 dark:hover:bg-[#334155] hover:bg-[#e5e7eb] font-medium">
                  <svg fill='#111827' class="h-5 w-5" aria-hidden="true" data-icon="browser" data-prefix="fal" viewBox="0 0 512 512"><path fill="currentColor" d="M0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm160 32h320V96c0-17.67-14.3-32-32-32H160v64zm-32-64H64c-17.67 0-32 14.33-32 32v32h96V64zm-96 96v256c0 17.7 14.33 32 32 32h384c17.7 0 32-14.3 32-32V160H32z"></path></svg>                <span>Account settings</span>
                </Link>
                
                
              </div>
              { localStorage.getItem('accessToken') ? 
                <button onClick={logoutUser} class="py-4 px-6 dark:hover:bg-[#334155] flex gap-2 items-center hover:bg-[#e5e7eb]">
                  <svg fill='#ef4444' class="w-5 h-5" viewBox="0 0 512 512"><path d="M48 64h132c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H48c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h132c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48zm279 19.5l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l132 131.4H172c-6.6 0-12 5.4-12 12v10c0 6.6 5.4 12 12 12h279.9L320 404.4c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l164.5-164c4.7-4.7 4.7-12.3 0-17L344 83.5c-4.7-4.7-12.3-4.7-17 0z"></path></svg>
                  <span className=' font-semibold '>Log out</span>
                </button>
              :
                <Link to='/onboard' class="py-4 px-6  dark:hover:bg-[#334155] text-blue-600 flex gap-2 items-center hover:bg-[#e5e7eb]">
                  <svg fill='none' class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>

                  <span className=' font-semibold '>Log in</span>
                </Link>
            }
              
        </div>
        </div>
        {/* background opacity */}
        <section onClick={()=>{isOpen(false)}} className={`${open ? 'flex' : 'hidden'} bg-[#00000066] w-screen h-screen float-left z-50 fixed`}></section>
  
        {/* sidebar menu */}
        <div className={`${open ? 'flex' : 'hidden'} flex-col dark:bg-black bg-white p-6 gap-8 h-full w-auto fixed top-0 left-0 z-50 shadow-2xl  `}>
          {/* logo */}
          <div className='bg-slate-40'>
            <Link to="/" className='h-auto w-28 lg:w-full  '>
              <svg viewBox="0 0 688 118" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.95 38.655c-10.6 10.6-10.6 27.784 0 38.383l30.705 30.706c10.6 10.599 27.784 10.599 38.383 0l30.706-30.706c10.599-10.6 10.599-27.784 0-38.383L77.038 7.95c-10.6-10.599-27.784-10.599-38.383 0L7.95 38.655zm63.33 32.626c7.42-7.42 7.42-19.449 0-26.868-7.419-7.42-19.448-7.42-26.867 0-7.42 7.42-7.42 19.448 0 26.868 7.42 7.419 19.448 7.419 26.868 0z" fill="#2962FF"/>
                <path d="M161.437 78.362c.043-8.549 5.268-13.558 12.781-13.558 7.47 0 11.874 4.793 11.831 12.954v38.947h18.394V74.476c.043-15.544-9.111-24.957-22.928-24.957-10.06 0-16.796 4.75-19.819 12.565h-.777V28.276h-17.876v88.429h18.394V78.362zM232.967 117.957c9.801 0 16.148-4.275 19.387-10.449h.518v9.197h17.444V71.972c0-15.803-13.385-22.453-28.152-22.453-15.89 0-26.339 7.6-28.887 19.69l17.013 1.381c1.252-4.404 5.181-7.642 11.787-7.642 6.261 0 9.845 3.152 9.845 8.592v.26c0 4.274-4.534 4.835-16.062 5.958-13.127 1.209-24.914 5.613-24.914 20.423 0 13.126 9.369 19.776 22.021 19.776zm5.267-12.695c-5.656 0-9.715-2.633-9.715-7.685 0-5.182 4.275-7.73 10.752-8.636 4.015-.561 10.578-1.511 12.78-2.98V93c0 6.951-5.742 12.262-13.817 12.262zM334.904 69.295c-1.64-12.22-11.485-19.776-28.238-19.776-16.969 0-28.152 7.859-28.109 20.64-.043 9.93 6.218 16.364 19.171 18.955l11.485 2.288c5.786 1.166 8.42 3.282 8.506 6.606-.086 3.93-4.361 6.736-10.794 6.736-6.563 0-10.924-2.806-12.047-8.204l-18.091.95c1.727 12.695 12.521 20.51 30.095 20.51 17.185 0 29.49-8.765 29.534-21.848-.044-9.586-6.304-15.329-19.171-17.962l-12.004-2.418c-6.175-1.339-8.463-3.455-8.42-6.65-.043-3.972 4.448-6.563 10.147-6.563 6.39 0 10.19 3.498 11.097 7.772l16.839-1.036zM361.529 78.362c.043-8.549 5.267-13.558 12.78-13.558 7.47 0 11.874 4.793 11.831 12.954v38.947h18.394V74.476c.043-15.544-9.111-24.957-22.928-24.957-10.06 0-16.796 4.75-19.818 12.565h-.778V28.276h-17.875v88.429h18.394V78.362zM432.54 78.362c.043-8.549 5.138-13.558 12.565-13.558 7.383 0 11.831 4.836 11.787 12.954v38.947h18.394V74.476c0-15.457-9.067-24.957-22.884-24.957-9.845 0-16.969 4.836-19.948 12.565h-.778V50.383h-17.53v66.322h18.394V78.362zM514.885 118c20.122 0 32.643-13.774 32.643-34.197 0-20.553-12.521-34.284-32.643-34.284-20.121 0-32.642 13.731-32.642 34.284 0 20.423 12.521 34.197 32.642 34.197zm.087-14.249c-9.283 0-14.033-8.506-14.033-20.078s4.75-20.12 14.033-20.12c9.11 0 13.86 8.549 13.86 20.12 0 11.572-4.75 20.078-13.86 20.078zM579.064 117.784c10.708 0 16.278-6.174 18.826-11.701h.777v10.622h18.135v-88.43h-18.351v33.248h-.561c-2.462-5.397-7.773-12.004-18.869-12.004-14.551 0-26.857 11.313-26.857 34.111 0 22.194 11.788 34.154 26.9 34.154zm5.829-14.637c-9.024 0-13.947-8.032-13.947-19.603 0-11.486 4.836-19.387 13.947-19.387 8.938 0 13.947 7.556 13.947 19.387 0 11.83-5.096 19.603-13.947 19.603zM657.286 118c16.408 0 27.461-7.988 30.052-20.294l-17.012-1.122c-1.857 5.051-6.606 7.685-12.738 7.685-9.197 0-15.026-6.088-15.026-15.976v-.043h45.165v-5.052c0-22.539-13.645-33.679-31.175-33.679-19.517 0-32.168 13.86-32.168 34.327 0 21.028 12.479 34.154 32.902 34.154zm-14.724-41.149c.389-7.556 6.132-13.601 14.292-13.601 7.988 0 13.515 5.7 13.558 13.601h-27.85z" fill={isDark ? 'white' : "#333333"}/>
              </svg>
            </Link>
          </div>
  
          <div className=' flex flex-col justify-between h-full opacity-80 w-full'>
            {/* NAV MENU */}
            <div className=" flex flex-col gap-3  w-full">            
              <a href="/" aria-label="My Feed" className="pr-16 hover:bg-[#e5e7eb] flex w-full dark:hover:bg-[#334155] gap-2 p-2 rounded-lg text-blue-600 font-semibold">
                <svg fill='' className="h-6 w-6" viewBox="0 0 512 512"><path fill='currentColor' d="M464 32H144c-26.5 0-48 21.53-48 48v336c0 17.66-14.36 32-32 32s-32-14.34-32-32V112c0-8.8-7.16-16-16-16s-16 7.2-16 16v304c0 35.28 28.7 64 64 64h368c44.11 0 80-35.88 80-80V80c0-26.47-21.5-48-48-48zm16 368c0 26.47-21.53 48-48 48H119.4c5.5-9.4 8.6-20.3 8.6-32V80c0-8.81 7.2-16 16-16h320c8.8 0 16 7.19 16 16v320zm-208-96h-96c-8.8 0-16 7.2-16 16s7.156 16 16 16h96c8.844 0 16-7.156 16-16s-7.2-16-16-16zm160 0h-96c-8.8 0-16 7.2-16 16s7.156 16 16 16h96c8.844 0 16-7.156 16-16s-7.2-16-16-16zm-160 64h-96c-8.8 0-16 7.2-16 16s7.156 16 16 16h96c8.844 0 16-7.156 16-16s-7.2-16-16-16zm160 0h-96c-8.844 0-16 7.156-16 16s7.156 16 16 16h96c8.844 0 16-7.156 16-16s-7.2-16-16-16zM416 96H192c-17.7 0-32 14.3-32 32v96c0 17.67 14.33 32 32 32h224c17.67 0 32-14.33 32-32v-96c0-17.7-14.3-32-32-32zm0 128H192v-96h224v96z"></path></svg>
                <span className='w-full pr-16'>My Feed</span>
              </a>
              <a href="/explore" aria-label="Explore" className="flex hover:bg-[#e5e7eb] rounded-lg dark:hover:bg-[#334155] gap-2 p-2 active:text-blue-600 font-medium">
                <svg className="h-6 w-6" viewBox="0 0 512 512"><path fill={isDark ? 'white' : 'currentColor'} d="M232 256c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm116.6-133.1c25-8.3 48.8 15.5 40.5 40.5l-48.9 146.5c-4.7 14.3-16 25.6-30.3 30.3l-146.5 48.9c-25 8.3-48.8-15.5-40.5-40.5l48.9-146.5c4.7-14.3 16-25.6 30.3-30.3l146.5-48.9zm10.1 30.4-146.5 48.8c-4.7 1.6-8.5 5.4-10.1 10.1l-48.8 146.5 146.5-48.8c4.7-1.6 8.5-5.4 10.1-10.1l48.8-146.5zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 224c123.7 0 224-100.3 224-224S379.7 32 256 32 32 132.3 32 256s100.3 224 224 224z"></path></svg>
                <span className='dark:text-white'>Explore</span>
              </a>
              <a href="/drafts" aria-label="Drafts" className="flex hover:bg-[#e5e7eb] rounded-lg dark:hover:bg-[#334155] gap-2 p-2 active:text-blue-600 font-medium">
                <svg className="h-6 w-6" viewBox="0 0 384 512"><path fill={isDark ? 'white' : 'currentColor'} d="M365.3 125.3 258.8 18.8C246.7 6.742 230.5 0 213.5 0H64C28.65 0 0 28.65 0 64l.006 384c0 35.35 28.65 64 64 64H320c35.35 0 64-28.65 64-64V170.5c0-17-6.7-33.2-18.7-45.2zM224 34.08c4.477 1.566 8.666 3.846 12.12 7.299l106.5 106.5c3.48 3.421 5.78 7.621 7.28 12.121H240c-8.8 0-16-7.2-16-16V34.08zM352 448c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h128v112c0 26.5 21.5 48 48 48h112v256zM96.82 360.1a15.883 15.883 0 0 0-4.342 8.113l-12.16 60.79c-2.217 11.11 7.574 20.91 18.69 18.68l60.79-12.15a15.867 15.867 0 0 0 8.109-4.344l122.2-122.2c7.559-7.555 12.82-17.37 13.76-28.02 1.158-13.14-3.432-25.7-12.62-34.88l-8.172-8.176c-7.559-7.559-17.37-12.83-28.01-13.78-13.14-1.172-25.7 3.414-34.89 12.59L96.82 360.1zm51.98 45.2-32.72 6.539 6.543-32.71 86.22-86.23 26.18 26.18L148.8 405.3zm93.8-146.1c4.652-4.645 12.19-4.652 16.84.004l9.338 9.336c4.641 4.64 4.668 12.18-.004 16.84l-11.22 11.22-26.18-26.18L242.6 259.2z"></path></svg>
                <span className='dark:text-white'>Drafts</span>
              </a>
              <a href="/bookmarks" aria-label="Bookmarks" className="flex hover:bg-[#e5e7eb] rounded-lg dark:hover:bg-[#334155] gap-2 p-2 active:text-blue-600 font-medium">
                <svg className="h-6 w-6" viewBox="0 0 448 512"><path fill={isDark ? 'white' : 'currentColor'} d="M448 368V48c0-26.51-21.5-48-48-48H80C35.82 0 0 35.82 0 80v368c0 35.35 28.66 64 64 64h368c8.844 0 16-7.156 16-16s-7.2-16-16-16h-16v-66.95c18.6-6.65 32-24.25 32-45.05zM320 32v174.7l-54.9-43.2c-2-2.3-5.6-3.5-9.1-3.5s-7.062 1.172-10 3.5l-54 43.2V32h128zm64 448H64c-17.64 0-32-14.36-32-32s14.36-32 32-32h320v64zm16-96H64c-11.71 0-22.55 3.389-32 8.9V80c0-26.51 21.49-48 48-48h80v208c0 6.156 3.531 11.75 9.062 14.42 5.562 2.672 12.09 1.891 16.94-1.922L256 196.5l69.1 56.02c3.8 2.28 7.3 3.48 10.9 3.48 2.344 0 4.719-.516 6.938-1.578C348.5 251.8 352 246.2 352 240V32h48c8.8 0 16 7.16 16 16v320c0 8.8-7.2 16-16 16z"></path></svg>
                <span className='dark:text-white'>Bookmarks</span>
              </a>
              <a href="/search" aria-label="Search" className="flex hover:bg-[#e5e7eb] rounded-lg dark:hover:bg-[#334155]  gap-2 p-2 active:text-blue-600 font-medium">
                <svg className="h-6 w-6" viewBox="0 0 512 512"><path fill={isDark ? 'white' : 'currentColor'} d="M507.3 484.7 365.8 343.2c31.2-36.4 49.3-83.5 49.3-135.2 0-114.9-93.13-208-208-208S0 93.13 0 208s93.12 208 207.1 208c51.68 0 98.85-18.96 135.2-50.15l141.5 141.5c4 3.05 8.1 4.65 12.2 4.65s8.188-1.562 11.31-4.688c6.29-6.212 6.29-16.412-.01-22.612zM208 384c-97.9 0-176-79-176-176S110.1 32 208 32s176 78.1 176 176-79 176-176 176z"></path></svg>
                <span className='dark:text-white'>Search</span>
              </a>
            </div>
            
            {/* social media */}
            <div className='flex flex-col px-2'>
              <div className='flex gap-4 mb-5 '>
              <a href="https://twitter.com/hashnode" target="_blank" rel="noopener" aria-label="Follow Hashnode on Twitter" class="css-1n516f2">
                <svg  fill="#1da1f2" className="h-6 w-6" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
              </a>
              <a href="https://linkedin.com/company/hashnode" target="_blank" rel="noopener" aria-label="Follow Hashnode on Twitter" class="css-282u41">
                <svg fill='#0a66c2' className="h-6 w-6" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
              </a>
              <a href="https://instagram.com/hashnode" target="_blank" rel="noopener" aria-label="Follow Hashnode on Twitter" class="css-1g37gtk">
                <svg fill='#c32aa3' className="h-6 w-6" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
              </a>
              <a href="https://discord.gg/hashnode" target="_blank" rel="noopener" aria-label="Join Hashnode's Discord Server" class="css-1rnmokt">
                <svg fill='#5865f2' className="h-6 w-6" viewBox="0 0 448 512"><path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"></path></svg>
              </a>
              </div>
              <p class="css-tw7ll9">© 2022 Hashnode</p>
            </div>
          </div>
        </div>
      
      <div className='p-4 bg-white dark:bg-[#0f172a] shadow'>
        <div className='grid grid-cols-12 gap-2'>
          {/* left side*/}
          <div className='flex gap-3 items-center col-span-7
                          md:col-span-5
                          lg:col-span-2
          '>
            <button type='button' onClick={()=>{isOpen(!open)}} className='lg:hidden dark:hover:bg-[#334155] hover:bg-[#e2e8f0] p-2 rounded-full'>
              <svg fill={isDark ? '#e2e8f0' : ''} className='w-5 h-5' viewBox="0 0 448 512"><path d="M0 80c0-8.84 7.164-16 16-16h416c8.8 0 16 7.16 16 16s-7.2 16-16 16H16C7.164 96 0 88.84 0 80zm0 160c0-8.8 7.164-16 16-16h416c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.836 0-16-7.2-16-16zm432 176H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h416c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path></svg>
            </button>
            <Link to="/" className='h-auto w-36 lg:w-full mr-4'>
              <svg viewBox="0 0 688 118" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.95 38.655c-10.6 10.6-10.6 27.784 0 38.383l30.705 30.706c10.6 10.599 27.784 10.599 38.383 0l30.706-30.706c10.599-10.6 10.599-27.784 0-38.383L77.038 7.95c-10.6-10.599-27.784-10.599-38.383 0L7.95 38.655zm63.33 32.626c7.42-7.42 7.42-19.449 0-26.868-7.419-7.42-19.448-7.42-26.867 0-7.42 7.42-7.42 19.448 0 26.868 7.42 7.419 19.448 7.419 26.868 0z" fill="#2962FF"/>
              <path d="M161.437 78.362c.043-8.549 5.268-13.558 12.781-13.558 7.47 0 11.874 4.793 11.831 12.954v38.947h18.394V74.476c.043-15.544-9.111-24.957-22.928-24.957-10.06 0-16.796 4.75-19.819 12.565h-.777V28.276h-17.876v88.429h18.394V78.362zM232.967 117.957c9.801 0 16.148-4.275 19.387-10.449h.518v9.197h17.444V71.972c0-15.803-13.385-22.453-28.152-22.453-15.89 0-26.339 7.6-28.887 19.69l17.013 1.381c1.252-4.404 5.181-7.642 11.787-7.642 6.261 0 9.845 3.152 9.845 8.592v.26c0 4.274-4.534 4.835-16.062 5.958-13.127 1.209-24.914 5.613-24.914 20.423 0 13.126 9.369 19.776 22.021 19.776zm5.267-12.695c-5.656 0-9.715-2.633-9.715-7.685 0-5.182 4.275-7.73 10.752-8.636 4.015-.561 10.578-1.511 12.78-2.98V93c0 6.951-5.742 12.262-13.817 12.262zM334.904 69.295c-1.64-12.22-11.485-19.776-28.238-19.776-16.969 0-28.152 7.859-28.109 20.64-.043 9.93 6.218 16.364 19.171 18.955l11.485 2.288c5.786 1.166 8.42 3.282 8.506 6.606-.086 3.93-4.361 6.736-10.794 6.736-6.563 0-10.924-2.806-12.047-8.204l-18.091.95c1.727 12.695 12.521 20.51 30.095 20.51 17.185 0 29.49-8.765 29.534-21.848-.044-9.586-6.304-15.329-19.171-17.962l-12.004-2.418c-6.175-1.339-8.463-3.455-8.42-6.65-.043-3.972 4.448-6.563 10.147-6.563 6.39 0 10.19 3.498 11.097 7.772l16.839-1.036zM361.529 78.362c.043-8.549 5.267-13.558 12.78-13.558 7.47 0 11.874 4.793 11.831 12.954v38.947h18.394V74.476c.043-15.544-9.111-24.957-22.928-24.957-10.06 0-16.796 4.75-19.818 12.565h-.778V28.276h-17.875v88.429h18.394V78.362zM432.54 78.362c.043-8.549 5.138-13.558 12.565-13.558 7.383 0 11.831 4.836 11.787 12.954v38.947h18.394V74.476c0-15.457-9.067-24.957-22.884-24.957-9.845 0-16.969 4.836-19.948 12.565h-.778V50.383h-17.53v66.322h18.394V78.362zM514.885 118c20.122 0 32.643-13.774 32.643-34.197 0-20.553-12.521-34.284-32.643-34.284-20.121 0-32.642 13.731-32.642 34.284 0 20.423 12.521 34.197 32.642 34.197zm.087-14.249c-9.283 0-14.033-8.506-14.033-20.078s4.75-20.12 14.033-20.12c9.11 0 13.86 8.549 13.86 20.12 0 11.572-4.75 20.078-13.86 20.078zM579.064 117.784c10.708 0 16.278-6.174 18.826-11.701h.777v10.622h18.135v-88.43h-18.351v33.248h-.561c-2.462-5.397-7.773-12.004-18.869-12.004-14.551 0-26.857 11.313-26.857 34.111 0 22.194 11.788 34.154 26.9 34.154zm5.829-14.637c-9.024 0-13.947-8.032-13.947-19.603 0-11.486 4.836-19.387 13.947-19.387 8.938 0 13.947 7.556 13.947 19.387 0 11.83-5.096 19.603-13.947 19.603zM657.286 118c16.408 0 27.461-7.988 30.052-20.294l-17.012-1.122c-1.857 5.051-6.606 7.685-12.738 7.685-9.197 0-15.026-6.088-15.026-15.976v-.043h45.165v-5.052c0-22.539-13.645-33.679-31.175-33.679-19.517 0-32.168 13.86-32.168 34.327 0 21.028 12.479 34.154 32.902 34.154zm-14.724-41.149c.389-7.556 6.132-13.601 14.292-13.601 7.988 0 13.515 5.7 13.558 13.601h-27.85z" fill={isDark ? 'white' : "#333333"}/>
              </svg>
            </Link>
          </div>
  
          {/* SEARCH BAR */}
          <form class="hidden relative items-center border rounded-full pl-4 bg-gray-100 dark:bg-black dark:text-[#94a3b8] dark:border-[#1e293b] 
                       lg:col-span-7 lg:flex lg:mr-2">
            <svg class="h-4 w-4 absolute cursor-pointer" viewBox="0 0 512 512"><path fill="currentColor" d="M507.3 484.7 365.8 343.2c31.2-36.4 49.3-83.5 49.3-135.2 0-114.9-93.13-208-208-208S0 93.13 0 208s93.12 208 207.1 208c51.68 0 98.85-18.96 135.2-50.15l141.5 141.5c4 3.05 8.1 4.65 12.2 4.65s8.188-1.562 11.31-4.688c6.29-6.212 6.29-16.412-.01-22.612zM208 384c-97.9 0-176-79-176-176S110.1 32 208 32s176 78.1 176 176-79 176-176 176z"></path></svg>
            <input className='py-2 px-10 border-none bg-transparent outline-none' type="text" placeholder="Search for tags, people, articles..." value="" />
          </form>
  
          {/* CREATE A NEW ARTICLE */}  
          <Link class="
          hidden text-sm gap-2 bg-blue-600 rounded-full p-2.5 justify-center items-center text-white font-semibold  
          md:flex md:col-start-7 md:col-end-10 ml-24
          lg:col-span-1 lg:ml-0
          " to="create-story">
            <svg fill='white' class="h-4 w-4" viewBox="0 0 512 512"><path d="M362.7 19.32c25-24.998 65.6-24.998 90.6 0l39.4 39.43c25 24.99 25 65.55 0 90.55l-48.4 48.4-130-129.98 48.4-48.4zm59 200.98L188.5 453.4c-10.4 10.4-23.3 18.1-37.4 22.2L30.77 511c-8.42 2.5-17.53.2-23.74-6.9-6.21-5.3-8.532-14.4-6.054-22.9L36.37 360.9c4.16-14.1 11.79-27 22.2-37.4L291.7 90.34l130 129.96z"></path></svg>
            <span>Write</span>
          </Link>
  
          {/* right side */}
          <div className='flex items-center justify-end gap-7 col-start-9 col-span-4 relative
                          sm:col-start-10 sm:col-span-3
                          md:col-span-3
                          lg:col-span-2'>
            {/* DARK MOOD SWITCHER */}
            <button onClick={()=>setIsDark(prev=>!prev)} type='button' className='hover:bg-[#e5e7eb] dark:hover:bg-[#324154] rounded-full p-2'>
            {
              isDark ?
              <svg fill={isDark ? '#94a3b8' : '#324154'} className="h-6 w-6"   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke={isDark ? '#94a3b8' : '#324154'} class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            :
              <svg fill='none' className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            }
            </button>
  
            {/* Notification Icon */}
            <button ref={notificationsIcon} onClick={()=>{isNotificationsOpen(!notificationsOpen)}} type="button" className="hidden md:flex dark:hover:bg-[#324154] hover:bg-[#e5e7eb] rounded-full p-2">
              <svg fill={isDark ? '#94a3b8' : '#324154'} className="h-6 w-6" viewBox="0 0 448 512"><path d="M224 480c-17.66 0-32-14.38-32-32.03h-32c0 35.31 28.72 64.03 64 64.03s64-28.72 64-64.03h-32c0 17.65-14.34 32.03-32 32.03zm209.38-145.19c-27.96-26.62-49.34-54.48-49.34-148.91 0-79.59-63.39-144.5-144.04-152.35V16c0-8.84-7.16-16-16-16s-16 7.16-16 16v17.56C127.35 41.41 63.96 106.31 63.96 185.9c0 94.42-21.39 122.29-49.35 148.91-13.97 13.3-18.38 33.41-11.25 51.23C10.64 404.24 28.16 416 48 416h352c19.84 0 37.36-11.77 44.64-29.97 7.13-17.82 2.71-37.92-11.26-51.22zM400 384H48c-14.23 0-21.34-16.47-11.32-26.01 34.86-33.19 59.28-70.34 59.28-172.08C95.96 118.53 153.23 64 224 64c70.76 0 128.04 54.52 128.04 121.9 0 101.35 24.21 138.7 59.28 172.08C421.38 367.57 414.17 384 400 384z"></path></svg>
            </button>
            <button ref={profileIcon} onClick={()=>{isProfileOpen(!profileOpen)}} type='' className=''>
              <img className='rounded-full w-10 h-10'  alt="Zakaria Abdessamed Brahimi" src={myPicture}></img>
            </button>
          </div>
        </div>
      </div>
      </header>
    )
  }
}
//TODO: The notification/profile boxes opened, and then the size of screen is less than 768px , those two boxes doesn't close
export default Navbar