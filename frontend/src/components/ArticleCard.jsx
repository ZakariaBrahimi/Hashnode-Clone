import React, { useContext, useEffect, useState } from 'react'
import Moment from 'react-moment';
import {Link} from 'react-router-dom'
import DarkModeContext from '../context/DarkModeContext';
import readingTime from 'reading-time/lib/reading-time'
import { axiosAPI } from '../axios';
import APIContext from '../context/APIContext';


const ArticleCard = ({isLoading, article}) => {
  const {isDark} = useContext(DarkModeContext)
  const {bookmarkHandler, setIsBookmarked, isBookmarked} = useContext(APIContext)
  useEffect(() => {
    // Check if article exist
    if (article) {
      // Get the user's ID from localStorage
      const userId = JSON.parse(localStorage.getItem('user'))?.id;
  
    // Check if the user's ID matches any bookmark ID in article
    // The benefit of using some(callback_func) is that 
    // some() immediately returns true and stops iterating through the array (when we found the element)
    // Otherwise, if callbackFn returns a falsy value for all elements, some() returns false.
      const isUserBookmarked = article.bookmarks.some(
        (bookmark) => bookmark.id === userId
      );
      // Update the isBookmarked state based on the bookmark status
      setIsBookmarked(isUserBookmarked);
    }
  }, [article]);
  const stats = article?.content && readingTime(article?.content)
  
  return (
    <div className={`p-5 border-b dark:text-white dark:border-[#1e293b] md:relative bg-white dark:bg-[#0f172a] ${isLoading ? 'animate-pulse bg-red-300' : ''}`}>
        {/* The autor */}
        <div className='flex items-center gap-3 mb-2'>
          <Link to={`/profile/${article?.author.id}`}>
            <img className='w-10 h-10 rounded-full' src={`http://127.0.0.1:8000${article?.author?.img}`} alt="" />
          </Link>
          <div className='flex flex-col'>
            <Link to={`/profile/${article?.author.id}`}>{article?.author.fullname}</Link>
            <span className='inline-block text-gray-500 font-medium dark:text-[#94a3b8]' href="text"><Moment from={article?.updated_at}/></span>
          </div>
        </div>

        {/* Content */}
        <div className='md:flex'>
          <div className='md:w-2/3 md:pr-5'>
            {/* Featured badge */}
          <div className='mb-2 md:absolute md:top-5 md:right-5'>
            <a href="/featured" className="md:bg-[#ecfdf5] dark:bg-[#064d3b] dark:border-[#1e293b] flex gap-1 items-center bg-white border rounded-full w-fit px-2 pr-4  ">
              <svg className="w-4 h-4" fill='#fbbf24' viewBox="0 0 576 512">]<path d="m381.2 150.3 143.7 21.2c11.9 1.7 21.9 10.1 25.7 21.6 3.8 11.6.7 24.2-7.9 32.8L438.5 328.1l24.6 146.6c2 12-2.9 24.2-12.9 31.3-9.9 7.1-23 8-33.7 2.3l-128.4-68.5-128.3 68.5c-10.8 5.7-23.9 4.8-33.8-2.3-9.9-7.1-14.9-19.3-12.8-31.3l24.6-146.6L33.58 225.9c-8.61-8.6-11.67-21.2-7.89-32.8 3.77-11.5 13.74-19.9 25.73-21.6L195 150.3l64.4-132.33C264.7 6.954 275.9-.04 288.1-.04c12.3 0 23.5 6.994 28.8 18.01l64.3 132.33z"></path></svg>
              <span className="text-green-600 font-medium dark:text-white">Featured</span>
            </a>
          </div>
          <div>
            <Link to={`/article/${article?.id}`}>
              <h1 className='font-bold opacity-90 text-2xl mb-2 dark:text-white'>{article?.title}</h1>
            </Link>
          {/* Reading Time */}
            <div className="flex gap-2 items-center mb-2">
                <span class="css-a3vbt4">
                    <svg class="w-4 h-4" fill='#3b82f6' viewBox="0 0 576 512"><path d="M514.91 32h-.16c-24.08.12-144.75 8.83-219.56 48.09-4.05 2.12-10.33 2.12-14.38 0C205.99 40.83 85.32 32.12 61.25 32h-.16C27.4 32 0 58.47 0 91.01v296.7c0 31.41 25.41 57.28 57.85 58.9 34.77 1.76 122.03 8.26 181.89 30.37 5.27 1.95 10.64 3.02 16.25 3.02h64c5.62 0 10.99-1.08 16.26-3.02 59.87-22.11 147.12-28.61 181.92-30.37 32.41-1.62 57.82-27.48 57.82-58.89V91.01C576 58.47 548.6 32 514.91 32zM272 433c0 8.61-7.14 15.13-15.26 15.13-1.77 0-3.59-.31-5.39-.98-62.45-23.21-148.99-30.33-191.91-32.51-15.39-.77-27.44-12.6-27.44-26.93V91.01c0-14.89 13.06-27 29.09-27 19.28.1 122.46 7.38 192.12 38.29 11.26 5 18.64 15.75 18.66 27.84l.13 100.32V433zm272-45.29c0 14.33-12.05 26.16-27.45 26.93-42.92 2.18-129.46 9.3-191.91 32.51-1.8.67-3.62.98-5.39.98-8.11 0-15.26-6.52-15.26-15.13V230.46l.13-100.32c.01-12.09 7.4-22.84 18.66-27.84 69.66-30.91 172.84-38.19 192.12-38.29 16.03 0 29.09 12.11 29.09 27v296.7z"></path></svg>
                </span>
                <span className="text-[#111827] dark:text-[#f9fafc]">{stats && stats.text}</span>
            </div>
          <p className='text-[#4b5563] dark:text-[#94a3b8]'>{article?.content.substring(0, 250)}</p>
          </div>
          </div>
          
          <div className='pt-4 md:w-1/3'>
            <img className='rounded-2xl object-contain w-full' src={`http://127.0.0.1:8000${article?.cover}`} alt='cover'/>
          </div>

        </div>

        {/* likes & comments & gategories */}
        <div className='mt-3 md:flex md:justify-between md:items-center '>
          <div className='flex gap-4 md:order-2 md:mt-3'>
            {/* likes */}
            <a className='flex dark:hover:bg-[#324154] gap-2 py-1 px-2 rounded-full hover:bg-[#e5e7eb] text-[#374151]' href="/authenticate?next=https://blog.tirthaguha.net/reducing-your-websites-carbon-footprint" variant="transparent" aria-label="51 likes" target="_blank" rel="noopener">
              <span className='dark:text-[#f9fafc]'>{article?.likes.length}</span>
              <svg fill={ isDark ? '#f9fafc' :  '#374151'} className="w-5 h-5" viewBox="0 0 512 512"><path d="M88 192H40c-22.06 0-40 17.9-40 40v208c0 22.1 17.94 40 40 40h48c22.1 0 40-17.9 40-40V232c0-22.1-17.9-40-40-40zm8 248c0 4.4-3.59 8-8 8H40c-4.41 0-8-3.6-8-8V232c0-4.4 3.59-8 8-8h48c4.41 0 8 3.6 8 8v208zm416-218.5c0-33.9-27.6-61.5-61.5-61.5H348c11.98-27.06 18.83-53.48 18.83-67.33C366.9 62.84 343.6 32 304.9 32c-41.22 0-50.7 29.11-59.12 54.81C218.1 171.1 160 184.8 160 208c0 9.1 7.5 16 16 16 4.1 0 8.2-1.6 11.3-4.7 52.68-53.04 67.02-56.11 88.81-122.5C285.3 68.95 288.2 64 304.9 64c20.66 0 29.94 16.77 29.94 28.67 0 10.09-8.891 43.95-26.62 75.48a15.976 15.976 0 0 0-2.046 7.83C306.2 185.5 314 192 322.2 192h128.3c16.3 0 29.5 13.2 29.5 29.5 0 15.33-12.08 28.16-27.48 29.2-8.462.581-14.91 7.649-14.91 15.96 0 12.19 12.06 12.86 12.06 30.63 0 14.14-10.11 26.3-24.03 28.89-5.778 1.082-13.06 6.417-13.06 15.75 0 8.886 6.765 10.72 6.765 23.56 0 31.02-31.51 22.12-31.51 43.05 0 3.526 1.185 5.13 1.185 10.01C389 434.8 375.8 448 359.5 448h-55.6c-82.01 0-108.3-64.02-127.9-64.02-8.873 0-16 7.193-16 15.96-.9 16.36 64.6 80.06 143.9 80.06h55.63c33.91 0 61.5-27.58 61.5-61.47 18.55-10.86 30.33-31 30.33-53.06 0-4.797-.594-9.594-1.734-14.27 19.31-10.52 32.06-30.97 32.06-53.94 0-7.219-1.281-14.31-3.75-20.98C498.2 266.2 512 245.3 512 221.5z"></path></svg>
            </a>
            {/* comments */}
            <a className='flex dark:hover:bg-[#324154] dark:border-[#1e293b] gap-2 py-1 px-2 rounded-full hover:bg-[#e5e7eb] text-[#374151]' href="/authenticate?next=https://blog.tirthaguha.net/reducing-your-websites-carbon-footprint#comments-list" target="_blank" rel="noopener" aria-label="1 comments" variant="transparent">
              <span className='dark:text-[#f9fafc]'>{article?.articleCommentsCount}</span>
              <svg fill={ isDark ? '#f9fafc' :  '#374151'} className="w-5 h-5" viewBox="0 0 640 512"><path d="M416 176C416 78.8 322.9 0 208 0S0 78.8 0 176c0 41.48 17.07 79.54 45.44 109.6-15.17 32.34-38.65 58.07-38.95 58.38-6.514 6.836-8.309 16.91-4.568 25.67C5.754 378.4 14.26 384 23.66 384c54.19 0 97.76-20.73 125.9-39.17C168.1 349.4 187.7 352 208 352c114.9 0 208-78.8 208-176zM208 320c-16.96 0-34.04-2.098-50.75-6.232L143.7 310.4l-11.7 7.7c-20.43 13.38-51.58 28.99-89.85 32.97 9.377-12.11 22.3-30.63 32.24-51.82l9.242-19.71L68.72 263.7C44.7 238.2 32 207.9 32 176c0-79.4 78.1-144 176-144s176 64.6 176 144-79 144-176 144zm398.4 115.4c21.2-28.3 33.6-62.5 33.6-99.4 0-97.2-86-176-192-176-.315 0-.62.041-.934.043C447.5 165.3 448 170.6 448 176c0 5.43-.467 10.76-.941 16.09.341.01.641-.09.941-.09 88.22 0 160 64.6 160 144 0 28.69-9.424 56.45-27.25 80.26l-13.08 17.47 11.49 18.55c6.568 10.61 13.18 19.74 18.61 26.74-18.26-1.91-36.45-6.625-54.3-14.09l-12.69-5.305-12.58 5.557C495.9 475 472.3 480 448 480c-75.05 0-137.7-46.91-154.9-109.7-10.1 3.336-20.5 6.132-31.2 8.271C282.7 455.1 357.1 512 448 512c29.82 0 57.94-6.414 83.12-17.54C555 504.5 583.7 512 616.3 512c9.398 0 17.91-5.57 21.73-14.32 3.74-8.758 1.945-18.84-4.568-25.67-.162-.21-13.862-15.21-27.062-36.61z"></path></svg>
            </a>
          </div>

          <div className='mt-3 flex gap-5 md:order-1'>
            {/* bookmark */}
            <button onClick={(event)=>bookmarkHandler(event,article)} className='hover:bg-[#e5e7eb]  rounded-full py-2 px-2' type="button" variant="transparent" aria-label="Bookmark">
                {
                    isBookmarked ? 
                    <svg viewBox="0 0 18 20" class="h-5 w-5 pointer-events-none" fill="#374151" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.54623 0.326736C3.18797 -0.000244141 4.02805 -0.000244141 5.7082 -0.000244141H12.2918C13.972 -0.000244141 14.8121 -0.000244141 15.4538 0.326736C16.0183 0.614356 16.4772 1.0733 16.7648 1.63778C17.0918 2.27952 17.0918 3.1196 17.0918 4.79976V19.0167C17.0918 19.4453 17.0918 19.6596 17.0016 19.7887C16.9227 19.9014 16.801 19.9767 16.6649 19.9968C16.5091 20.0198 16.3174 19.9239 15.9341 19.7323L11.1466 17.3386C10.3595 16.945 9.966 16.7482 9.55321 16.6708C9.1876 16.6022 8.81243 16.6022 8.44682 16.6708C8.03403 16.7482 7.64048 16.945 6.85339 17.3386L2.06598 19.7323C1.68261 19.9239 1.49093 20.0198 1.33512 19.9968C1.19907 19.9767 1.0773 19.9014 0.998475 19.7887C0.908203 19.6596 0.908203 19.4453 0.908203 19.0167V4.79976C0.908203 3.1196 0.908203 2.27952 1.23518 1.63778C1.5228 1.0733 1.98175 0.614356 2.54623 0.326736ZM12.7672 6.77236C13.0601 6.47946 13.0601 6.00459 12.7672 5.7117C12.4743 5.4188 11.9994 5.4188 11.7065 5.7117L8.07535 9.34287L6.75612 8.02364C6.46323 7.73075 5.98836 7.73075 5.69546 8.02364C5.40257 8.31654 5.40257 8.79141 5.69546 9.0843L7.54502 10.9339C7.83791 11.2268 8.31279 11.2268 8.60568 10.9339L12.7672 6.77236Z"></path></svg>
                    :
                    <svg fill='#374151' className="h-5 w-5 pointer-events-none" viewBox="0 0 1000 1000"><path fill="#374151" fill-rule="evenodd" d="M153.906 69.336c-19.14 0-34.57 15.43-34.57 34.57v766.602l277.148-184.766 277.149 184.766V519.531c0-19.14 15.429-34.57 34.57-34.57s34.57 15.43 34.57 34.57V1000L396.484 769.141 50 1000V103.906C50 46.484 96.68 0 153.906 0h277.149c19.14 0 34.57 15.43 34.57 34.57s-15.43 34.57-34.57 34.57H153.906v.196ZM777.539 0c19.141 0 34.57 15.43 34.57 34.57v138.477c0 19.14-15.429 34.57-34.57 34.57H639.062c-19.14 0-34.57-15.43-34.57-34.57 0-19.141 15.43-34.57 34.57-34.57h103.907V34.57c0-19.14 15.429-34.57 34.57-34.57Z" clip-rule="evenodd"></path><path fill="inherit" fill-rule="evenodd" d="M742.969 173.242c0-19.14 15.43-34.57 34.57-34.57h138.477c19.14 0 34.57 15.43 34.57 34.57 0 19.141-15.43 34.571-34.57 34.571H812.11v103.906c0 19.14-15.43 34.57-34.571 34.57-19.14 0-34.57-15.43-34.57-34.57V173.242Z" clip-rule="evenodd"></path></svg>

                }
              </button>
          {/* Categories */}
            <div className='flex gap-2 '>
              <a className='rounded-md dark:text-[#f9fafc] dark:border-[#1e293b] dark:hover:bg-[#1e293b] py-1 px-2 border w-24 overflow-hidden text-ellipsis whitespace-nowrap w-fit hover:bg-[#f9fafb] text-[#6b7280]' href="/n/programming" title="General Programming">General Programming</a>
              <a className='rounded-md dark:border-[#1e293b] dark:text-[#f9fafc] dark:hover:bg-[#1e293b] py-1 px-2 border w-24 overflow-hidden text-ellipsis whitespace-nowrap w-fit hover:bg-[#f9fafb] text-[#6b7280]' href="/n/web-performance" title="web performance">web performance</a>
              <a className='rounded-md dark:border-[#1e293b] dark:text-[#f9fafc] dark:hover:bg-[#1e293b] py-1 px-2 border w-fit overflow-hidden text-ellipsis whitespace-nowrap  hover:bg-[#f9fafb] text-[#6b7280]' href="/n/web-performance">+3</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ArticleCard