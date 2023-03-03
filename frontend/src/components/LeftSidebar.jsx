import { useRef } from "react";
import {Link} from "react-router-dom";

const LeftSidebar = () => {
  const twitter = useRef(0);
  const linkedin = useRef(0);
  const discord = useRef(0);
  const instagram = useRef(0);
  //console.log(new_fill.current.attributes[0].nodeValue)
  
  return (
    
      <div className=' h-fit sticky hidden border dark:border-[#1f2a3c] rounded-xl bg-white dark:bg-[#0f172a] dark:text-white ml-5 py-2 
                      lg:block lg:col-span-2
    '>
      <div className='flex sticky flex-col gap-4'>
        <div className='opacity-80 h-fit border-b dark:border-[#1f2a3c] pb-4 '>
          {/* navigation bar */}
          <div className=" flex flex-col w-full pt-2">            
          <Link to="/" aria-label="My Feed" className="flex dark:hover:bg-[#324154] w-full px-4  gap-2 text-blue-600 font-semibold py-2 hover:bg-[#e5e7eb] border-r-2 border-r-blue-600">
            <svg fill='rgb(37 99 235)' className="h-5 w-5" viewBox="0 0 512 512"><path d="M464 32H144c-26.5 0-48 21.53-48 48v336c0 17.66-14.36 32-32 32s-32-14.34-32-32V112c0-8.8-7.16-16-16-16s-16 7.2-16 16v304c0 35.28 28.7 64 64 64h368c44.11 0 80-35.88 80-80V80c0-26.47-21.5-48-48-48zm16 368c0 26.47-21.53 48-48 48H119.4c5.5-9.4 8.6-20.3 8.6-32V80c0-8.81 7.2-16 16-16h320c8.8 0 16 7.19 16 16v320zm-208-96h-96c-8.8 0-16 7.2-16 16s7.156 16 16 16h96c8.844 0 16-7.156 16-16s-7.2-16-16-16zm160 0h-96c-8.8 0-16 7.2-16 16s7.156 16 16 16h96c8.844 0 16-7.156 16-16s-7.2-16-16-16zm-160 64h-96c-8.8 0-16 7.2-16 16s7.156 16 16 16h96c8.844 0 16-7.156 16-16s-7.2-16-16-16zm160 0h-96c-8.844 0-16 7.156-16 16s7.156 16 16 16h96c8.844 0 16-7.156 16-16s-7.2-16-16-16zM416 96H192c-17.7 0-32 14.3-32 32v96c0 17.67 14.33 32 32 32h224c17.67 0 32-14.33 32-32v-96c0-17.7-14.3-32-32-32zm0 128H192v-96h224v96z"></path></svg>
            <span className=''>My Feed</span>
          </Link>
          <Link to="explore" aria-label="Explore" className="flex gap-2 px-4 dark:hover:bg-[#324154] active:text-blue-600 font-medium py-2 hover:bg-[#e5e7eb] hover:border-r-2 hover:border-r-blue-600">
            <svg className="h-5 w-5" viewBox="0 0 512 512"><path fill="currentColor" d="M232 256c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm116.6-133.1c25-8.3 48.8 15.5 40.5 40.5l-48.9 146.5c-4.7 14.3-16 25.6-30.3 30.3l-146.5 48.9c-25 8.3-48.8-15.5-40.5-40.5l48.9-146.5c4.7-14.3 16-25.6 30.3-30.3l146.5-48.9zm10.1 30.4-146.5 48.8c-4.7 1.6-8.5 5.4-10.1 10.1l-48.8 146.5 146.5-48.8c4.7-1.6 8.5-5.4 10.1-10.1l48.8-146.5zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 224c123.7 0 224-100.3 224-224S379.7 32 256 32 32 132.3 32 256s100.3 224 224 224z"></path></svg>
            <span>Explore</span>
          </Link>
          <Link to="drafts" aria-label="Drafts" className="flex gap-2 px-4 dark:hover:bg-[#324154] active:text-blue-600 font-medium py-2 hover:bg-[#e5e7eb] hover:border-r-2 hover:border-r-blue-600">
            <svg className="h-5 w-5" viewBox="0 0 384 512"><path fill="currentColor" d="M365.3 125.3 258.8 18.8C246.7 6.742 230.5 0 213.5 0H64C28.65 0 0 28.65 0 64l.006 384c0 35.35 28.65 64 64 64H320c35.35 0 64-28.65 64-64V170.5c0-17-6.7-33.2-18.7-45.2zM224 34.08c4.477 1.566 8.666 3.846 12.12 7.299l106.5 106.5c3.48 3.421 5.78 7.621 7.28 12.121H240c-8.8 0-16-7.2-16-16V34.08zM352 448c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h128v112c0 26.5 21.5 48 48 48h112v256zM96.82 360.1a15.883 15.883 0 0 0-4.342 8.113l-12.16 60.79c-2.217 11.11 7.574 20.91 18.69 18.68l60.79-12.15a15.867 15.867 0 0 0 8.109-4.344l122.2-122.2c7.559-7.555 12.82-17.37 13.76-28.02 1.158-13.14-3.432-25.7-12.62-34.88l-8.172-8.176c-7.559-7.559-17.37-12.83-28.01-13.78-13.14-1.172-25.7 3.414-34.89 12.59L96.82 360.1zm51.98 45.2-32.72 6.539 6.543-32.71 86.22-86.23 26.18 26.18L148.8 405.3zm93.8-146.1c4.652-4.645 12.19-4.652 16.84.004l9.338 9.336c4.641 4.64 4.668 12.18-.004 16.84l-11.22 11.22-26.18-26.18L242.6 259.2z"></path></svg>
            <span>Drafts</span>
          </Link>
          <Link to="bookmarks" aria-label="Bookmarks" className="flex gap-2 px-4 dark:hover:bg-[#324154] active:text-blue-600 font-medium py-2 hover:bg-[#e5e7eb] hover:border-r-2 hover:border-r-blue-600">
            <svg className="h-5 w-5" viewBox="0 0 448 512"><path fill="currentColor" d="M448 368V48c0-26.51-21.5-48-48-48H80C35.82 0 0 35.82 0 80v368c0 35.35 28.66 64 64 64h368c8.844 0 16-7.156 16-16s-7.2-16-16-16h-16v-66.95c18.6-6.65 32-24.25 32-45.05zM320 32v174.7l-54.9-43.2c-2-2.3-5.6-3.5-9.1-3.5s-7.062 1.172-10 3.5l-54 43.2V32h128zm64 448H64c-17.64 0-32-14.36-32-32s14.36-32 32-32h320v64zm16-96H64c-11.71 0-22.55 3.389-32 8.9V80c0-26.51 21.49-48 48-48h80v208c0 6.156 3.531 11.75 9.062 14.42 5.562 2.672 12.09 1.891 16.94-1.922L256 196.5l69.1 56.02c3.8 2.28 7.3 3.48 10.9 3.48 2.344 0 4.719-.516 6.938-1.578C348.5 251.8 352 246.2 352 240V32h48c8.8 0 16 7.16 16 16v320c0 8.8-7.2 16-16 16z"></path></svg>
            <span>Bookmarks</span>
          </Link>
          </div>
        </div>
        <div className="px-4 ">
        <h5 className="flex gap-2 mb-4">
          <span className='text-[#374151] font-semibold dark:text-[#92a1b6]'>Trending tags</span>
          <svg fill={document.documentElement.className==='dark' ? '#c5cfdb' : '#989fa9'} className="h-5 w-5" viewBox="0 0 24 24"><path d="M20 15a1 1 0 002 0V7a1 1 0 00-1-1h-8a1 1 0 000 2h5.59L13 13.59l-3.3-3.3a1 1 0 00-1.4 0l-6 6a1 1 0 001.4 1.42L9 12.4l3.3 3.3a1 1 0 001.4 0L20 9.4V15z"></path></svg>
        </h5>
        <div className=" flex flex-col gap-3">
          <a href="/n/javascript" title="JavaScript" className="flex justify-between  rounded-lg p-1 hover:bg-[#f3f4f6] dark:hover:bg-[#1e293b]">
            <span className="overflow-hidden text-ellipsis whitespace-nowrap text-sm opacity-70">JavaScript</span>
            <span title="144 new articles" class="border rounded-xl py-1 px-2 font-bold opacity-70 bg-[#f3f4f6] dark:bg-[#1e293b] dark:border-[#303f52] text-xs">+144</span>
          </a>
          <a href="/n/web-development" title="Web Development" className="flex justify-between  rounded-lg p-1 hover:bg-[#f3f4f6] dark:hover:bg-[#1e293b]">
            <span className="overflow-hidden text-ellipsis whitespace-nowrap text-sm opacity-70">Web Development</span>
            <span title="100 new articles" className="border rounded-xl py-1 px-2 font-bold opacity-70 bg-[#f3f4f6] text-xs dark:bg-[#1e293b] dark:border-[#303f52]">+100</span>
          </a>
          <a href="/n/reactjs" title="React" className="flex justify-between rounded-lg p-1 hover:bg-[#f3f4f6] dark:hover:bg-[#1e293b]">
            <span className="overflow-hidden text-ellipsis whitespace-nowrap text-sm opacity-70">React</span>
            <span title="78 new articles" className="border rounded-xl py-1 px-2 font-bold opacity-70 bg-[#f3f4f6] text-xs dark:bg-[#1e293b] dark:border-[#303f52]">+78</span>
          </a>
          <a href="/n/beginners" title="Beginner Developers" className="flex justify-between  rounded-lg p-1 hover:bg-[#f3f4f6] dark:hover:bg-[#1e293b]">
            <span className="overflow-hidden text-ellipsis whitespace-nowrap text-sm opacity-70">Beginner Developers</span>
            <span title="70 new articles" className="border rounded-xl py-1 px-2 font-bold opacity-70 bg-[#f3f4f6] text-xs dark:bg-[#1e293b] dark:border-[#303f52]">+70</span>
          </a>
          <a href="/n/programming-blogs" title="Programming Blogs" className="flex justify-between rounded-lg p-1 hover:bg-[#f3f4f6] dark:hover:bg-[#1e293b] ">
            <span className="overflow-hidden text-ellipsis whitespace-nowrap text-sm opacity-70">Programming Blogs</span>
            <span title="49 new articles" class="border rounded-lg py-1 px-2 font-bold opacity-70 bg-[#f3f4f6] text-xs dark:bg-[#1e293b] dark:border-[#303f52]">+49</span>
          </a>
          <a href="/n/blogswithcc" title="BlogsWithCC" className="flex justify-between  rounded-lg p-1 hover:bg-[#f3f4f6] dark:hover:bg-[#1e293b]">
            <span className="overflow-hidden text-ellipsis whitespace-nowrap text-sm opacity-70">BlogsWithCC</span>
            <span title="48 new articles" className="border rounded-xl py-1 px-2 font-bold opacity-70 bg-[#f3f4f6] text-xs dark:bg-[#1e293b] dark:border-[#303f52]">+48</span>
          </a>
          <a href="/explore/tags" className="flex gap-3 items-center py-1 rounded-lg p-1 hover:bg-[#f3f4f6] dark:hover:bg-[#1e293b]">
            <span className='text-sm text-[#374151] font-medium dark:text-[#c5cfdb] '>See all</span>
            <svg className="h-3 w-3" fill={document.documentElement.className==='dark' ? '#c5cfdb' : ''} viewBox="0 0 256 512"><path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg>
          </a>
        </div>
        </div>
      </div>
      {/* social media */}
      <div className='mb-8 mt-5 flex flex-col gap-5 justify-end px-4 '> 
        <div className='flex flex-wrap justify-start items-center text-sm text-center'>
          <a onMouseEnter={()=>{twitter.current.attributes[0].nodeValue = '#fff'}} onMouseLeave={()=>{twitter.current.attributes[0].nodeValue = '#374151'}}  href="https://twitter.com/hashnode" target="_blank" rel="noopener" aria-label="Follow Hashnode on Twitter" class="p-2 rounded-md hover:bg-[#1da1f2] block">
            <svg ref={twitter}  fill="#374151" className="h-6 w-6 hover:fill-[#fff]" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
          </a>
          <a onMouseEnter={()=>{linkedin.current.attributes[0].nodeValue = '#fff'}} onMouseLeave={()=>{linkedin.current.attributes[0].nodeValue = '#374151'}} href="https://linkedin.com/company/hashnode" target="_blank" rel="noopener" aria-label="Follow Hashnode on Twitter" class="p-2 rounded-md hover:bg-[#0a66c2] block">
            <svg ref={linkedin} fill='#374151' className="h-6 w-6" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
          </a>
          <a onMouseEnter={()=>{instagram.current.attributes[0].nodeValue = '#fff'}} onMouseLeave={()=>{instagram.current.attributes[0].nodeValue = '#374151'}} href="https://instagram.com/hashnode" target="_blank" rel="noopener" aria-label="Follow Hashnode on Twitter" class="p-2 rounded-md hover:bg-[#c32aa3] block">
            <svg ref={instagram} fill='#374151' className="h-6 w-6" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
          </a>
          <a onMouseEnter={()=>{discord.current.attributes[0].nodeValue = '#fff'}} onMouseLeave={()=>{discord.current.attributes[0].nodeValue = '#374151'}} href="https://discord.gg/hashnode" target="_blank" rel="noopener" aria-label="Join Hashnode's Discord Server" class="p-2 rounded-md hover:bg-[#5865f2] block">
            <svg ref={discord} fill='#374151' className="h-6 w-6" viewBox="0 0 448 512"><path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"></path></svg>
          </a>
        </div>
        <p class="css-tw7ll9">© 2022 Hashnode</p>
      </div>
    </div>
  )
}
//NOTE:
export default LeftSidebar