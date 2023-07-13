import {useState, useEffect, useRef, useContext, useCallback} from 'react'
import Popup from '../components/Popup'
import Comment from '../components/Comment'
import NewComment from '../components/NewComment'
import MoreInfoPopup from '../components/MoreInfoPopup'
import { axiosAPI } from '../axios'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Moment from 'react-moment';
import AuthContext from '../context/AuthContext'
import APIContext from '../context/APIContext'
import {toast} from 'react-toastify';
import ReactMarkdown from 'react-markdown'
import readingTime from 'reading-time/lib/reading-time'
import { socket } from '../socket';

const Article = () => {
    const {userData,} = useContext(AuthContext)
  const navigate = useNavigate()
  const notifyError = (message) => toast.error(message, {
        position: "top-left",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    const notifySuccess = (message) => toast.success(message, {
        position: "top-left",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
  const [moreInfo, setMoreInfo] = useState(false)
  const moreInfoBtnRef = useRef()
  let tableOfContent = document.getElementById('tableOfContent')
  window.addEventListener('scroll', (e)=>{
    tableOfContent.classList.toggle('translate-x-0', window.scrollY > 768)
    tableOfContent.classList.toggle('translate-y-0', window.scrollY > 768)
    tableOfContent.classList.toggle('rotate-0', window.scrollY > 768)
    tableOfContent.classList.toggle('skew-x-0', window.scrollY > 768)
    tableOfContent.classList.toggle('skew-Y-0', window.scrollY > 768)
    tableOfContent.classList.toggle('scale-x-105', window.scrollY > 768)
    tableOfContent.classList.toggle('scale-y-105', window.scrollY > 768)
    
    tableOfContent.classList.toggle('fixed', window.scrollY > 768)
    tableOfContent.classList.toggle('top-0', window.scrollY > 768)
    tableOfContent.classList.toggle('max-h-[62.5px]',window.scrollY > 768) 
    tableOfContent.classList.toggle('overflow-hidden', window.scrollY > 768) 
    tableOfContent.classList.toggle('z-50', window.scrollY > 768)
    tableOfContent.classList.toggle('bg-white', window.scrollY > 768)
    tableOfContent.classList.toggle('xl:w-6/12', window.scrollY > 768)
    tableOfContent.classList.toggle('lg:w-9/12', window.scrollY > 768)
    tableOfContent.classList.toggle('md:w-10/12', window.scrollY > 768)
    tableOfContent.classList.toggle('md:mx-auto', window.scrollY > 768)
    tableOfContent.classList.toggle('sm:w-10/12', window.scrollY > 768)
    tableOfContent.classList.toggle('w-11/12', window.scrollY > 768)

    tableOfContent.classList.toggle('mb-0', window.scrollY > 768)
    tableOfContent.classList.toggle('mt-2', window.scrollY > 768)
    tableOfContent.classList.toggle('rounded-lg', window.scrollY > 768)
    tableOfContent.classList.toggle('shadow-xl', window.scrollY > 768)
    tableOfContent.classList.toggle('shadow-gray-500/50', window.scrollY > 768)

    tableOfContent.classList.toggle('transition-all', window.scrollY > 768)
    tableOfContent.classList.toggle('ease-in-out', window.scrollY > 768)
    tableOfContent.classList.toggle('duration-200', window.scrollY > 768)
  })
  let openTableOfContentBtn = document.getElementById('openTableOfContentBtn')
  window.addEventListener('scroll', (e)=>{
    openTableOfContentBtn.classList.toggle('hidden', window.scrollY > 768)
    openTableOfContentBtn.classList.toggle('hidden', window.scrollY <= 768)
  })
  const openTableOfContentBox = (e)=>{
    tableOfContent.classList.toggle('max-h-[400.5px]')
    tableOfContent.classList.toggle('mt-8')
    tableOfContent.classList.toggle('transition-all', window.scrollY > 768)
    tableOfContent.classList.toggle('ease-in-out', window.scrollY > 768)
    tableOfContent.classList.toggle('duration-500', window.scrollY > 768)
  }
  
  const [showCommentInput, setShowCommentInput] = useState(false)
  const [comments, setComments] = useState([])
  
  
  const [buttonPopupArticle, setButtonPopupArticle] = useState(false)


  /*
  1. when the page reload the first time 
      |--> send get request in async/await manner with try catch block
  2. URL --> article/id
  3. create a Route for this article
  4. if current_logged_in_user === article_author
      |--> give th current user sevral access such as delete/edit article (and draft it als o- addi t later)
  */
  const [articleDetails, setArticleDetails] = useState(null)

  let { article_id } = useParams()
  const fetchArticleDetials = async () => {
    try{
      let {data} = await axiosAPI({
        method: 'get',
        url: `articles/${article_id}`,
        headers:{'Content-Type': 'application/json'}
      })
      setArticleDetails(data?.article_details)
      setComments(data?.comments)
    }catch(error){
      console.log(error)
    }
  }
  
  
  

  const [isLiked, setIsLiked] = useState({
    status: false,
    likesCount: null
  })
  useEffect(() => {
    fetchArticleDetials()
  }, [])
  const {bookmarkHandler, setIsBookmarked, isBookmarked, deleteArticle} = useContext(APIContext)
  useEffect(() => {
    // Check if articleDetails exist
    if (articleDetails) {
      // Get the user's ID from localStorage
      const userId = JSON.parse(localStorage.getItem('user'))?.id;
  
    // Check if the user's ID matches any bookmark ID in articleDetails
    // The benefit of using some(callback_func) is that 
    // some() immediately returns true and stops iterating through the array (when we found the element)
    // Otherwise, if callbackFn returns a falsy value for all elements, some() returns false.
      const isUserBookmarked = articleDetails.bookmarks.some(
        (bookmark) => bookmark.id === userId
      );
      // Update the isBookmarked state based on the bookmark status
      setIsBookmarked(isUserBookmarked);

      const isUserLiked = articleDetails.likes.some(
        (like) => like.id === userId
      );
      // Update the isUserLiked state based on the like status
      setIsLiked({likesCount: articleDetails?.likes.length, status: isUserLiked});
    }
  }, [articleDetails]);
  
  const likeDislikeHandel = async (event)=>{
    try{
      const {data} = await axiosAPI({
        method: 'post',
        url: `article/like-or-dislike`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        params: {
            articleID: articleDetails?.id,
          }
      })
      if (data?.status==='liked'){
        setIsLiked({likesCount: data?.likesCount, status: true})
      }else{
        setIsLiked({likesCount: data?.likesCount, status: false})
      }
    }catch(error){
      if(error.response.status===401){
        notifyError('You are not authorized, Login first')
      }
    }
  }
//   Creating the TABLE OF CONTENT HEADINGS
  const contentRef = useRef(null)
  const headings = contentRef.current && contentRef.current.querySelectorAll("h1, h2")
  headings && Object.values(headings).map(heading=>(
    heading.id = heading.innerText 
  ))
  const stats = articleDetails?.content && readingTime(articleDetails?.content)
  










  const access_token = localStorage.getItem('accessToken')
  const URL = `ws://127.0.0.1:8000/ws/notifications?token=${access_token}`;
  
  useEffect(() => {
    const socket = new WebSocket(URL);
    if(access_token){
        console.log('connecting ...')
        socket.on('connect', () => {
            console.log('WebSocket connection opened');
        });
    }

  }, []);
    
  return (
    <div className='w-screen bg-white h-screen'>
    <article className='w-screen md:w-11/12 lg:w-9/12 md:mx-auto xl:w-8/12 '>
        <div className='w-full'>
            <img className='w-full' src={`http://127.0.0.1:8000${articleDetails?.cover}`} alt={'222'} />
        </div>
        <div className='p-8 pb-0 flex flex-col  items-center gap-8'>
          <h1 className='font-bold text-2xl text-center'>{articleDetails?.title} </h1>
          {/* Author Info */}
          <div className='flex flex-col md:flex-row gap-5 items-center'>
            <Link to={`/profile/${articleDetails?.author.id}`}>
                <div className='flex gap-2 items-center cursor-pointer'>
                    <img className='w-12 h-12 rounded-full' src={`http://127.0.0.1:8000${articleDetails?.author.img}`} alt={'user'} />
                    <p className='font-medium opacity-75'>{articleDetails?.author.fullname}</p>
                </div>
            </Link>
            <div className='flex gap-3 items-center flex-wrap justify-center'>
              <span className='text-[#374151] hidden border'>·</span>
              <p className='text-[#374151]'>
              <Moment format="DD MMM, Y">{articleDetails?.updated_at}</Moment>
              </p>
              <span className='text-[#374151]'>·</span>
              <div className='flex gap-2 items-center'>
                <svg fill='#374151' class="w-5 h-5 opacity-75" viewBox="0 0 576 512"><path d="M540.9 56.77c-45.95-16.66-90.23-24.09-129.1-24.75-60.7.94-102.7 17.45-123.8 27.72-21.1-10.27-64.1-26.8-123.2-27.74-40-.05-84.4 8.35-129.7 24.77C14.18 64.33 0 84.41 0 106.7v302.9c0 14.66 6.875 28.06 18.89 36.8 11.81 8.531 26.64 10.98 40.73 6.781 118.9-36.34 209.3 19.05 214.3 22.19C277.8 477.6 281.2 480 287.1 480c6.52 0 10.12-2.373 14.07-4.578 10.78-6.688 98.3-57.66 214.3-22.27 14.11 4.25 28.86 1.75 40.75-6.812C569.1 437.6 576 424.2 576 409.6V106.7c0-22.28-14.2-42.35-35.1-49.93zM272 438.1c-24.95-12.03-71.01-29.37-130.5-29.37-27.83 0-58.5 3.812-91.19 13.77-4.406 1.344-9 .594-12.69-2.047C34.02 417.8 32 413.1 32 409.6V106.7c0-8.859 5.562-16.83 13.86-19.83C87.66 71.7 127.9 63.95 164.5 64c51.8.81 89.7 15.26 107.5 23.66V438.1zm272-28.5c0 4.375-2.016 8.234-5.594 10.84-3.766 2.703-8.297 3.422-12.69 2.125C424.1 391.6 341.3 420.4 304 438.3V87.66c17.8-8.4 55.7-22.85 107.4-23.66 35.31-.063 76.34 7.484 118.8 22.88 8.2 3 13.8 10.96 13.8 19.82v302.9z"></path></svg>
                <p className='text-[#374151]'> {stats && stats.text} </p>
              </div>
              <span className='text-[#374151]'>·</span>
              <button onClick={likeDislikeHandel}  type='button' className='flex gap-1 opacity-75 items-center'>
                {
                    isLiked?.status ?
                    <svg  fill="red" viewBox="0 0 24 24" class="h-6 w-6 mr-1 pointer-events-none" stroke="red"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    :
                    <svg  fill="none" viewBox="0 0 24 24" class="h-6 w-6 mr-1 pointer-events-none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                }
                <span>{isLiked?.likesCount}</span>
              </button>
              <span className='text-[#374151]'>·</span>
              <button onClick={(event)=>bookmarkHandler(event, articleDetails)} className='hover:bg-[#e5e7eb]  rounded-full py-2 px-2' type="button" variant="transparent" aria-label="Bookmark">
                {
                    isBookmarked ? 
                    <svg viewBox="0 0 18 20" class="h-5 w-5 pointer-events-none" fill="#374151" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.54623 0.326736C3.18797 -0.000244141 4.02805 -0.000244141 5.7082 -0.000244141H12.2918C13.972 -0.000244141 14.8121 -0.000244141 15.4538 0.326736C16.0183 0.614356 16.4772 1.0733 16.7648 1.63778C17.0918 2.27952 17.0918 3.1196 17.0918 4.79976V19.0167C17.0918 19.4453 17.0918 19.6596 17.0016 19.7887C16.9227 19.9014 16.801 19.9767 16.6649 19.9968C16.5091 20.0198 16.3174 19.9239 15.9341 19.7323L11.1466 17.3386C10.3595 16.945 9.966 16.7482 9.55321 16.6708C9.1876 16.6022 8.81243 16.6022 8.44682 16.6708C8.03403 16.7482 7.64048 16.945 6.85339 17.3386L2.06598 19.7323C1.68261 19.9239 1.49093 20.0198 1.33512 19.9968C1.19907 19.9767 1.0773 19.9014 0.998475 19.7887C0.908203 19.6596 0.908203 19.4453 0.908203 19.0167V4.79976C0.908203 3.1196 0.908203 2.27952 1.23518 1.63778C1.5228 1.0733 1.98175 0.614356 2.54623 0.326736ZM12.7672 6.77236C13.0601 6.47946 13.0601 6.00459 12.7672 5.7117C12.4743 5.4188 11.9994 5.4188 11.7065 5.7117L8.07535 9.34287L6.75612 8.02364C6.46323 7.73075 5.98836 7.73075 5.69546 8.02364C5.40257 8.31654 5.40257 8.79141 5.69546 9.0843L7.54502 10.9339C7.83791 11.2268 8.31279 11.2268 8.60568 10.9339L12.7672 6.77236Z"></path></svg>
                    :
                    <svg fill='#374151' className="h-5 w-5 pointer-events-none" viewBox="0 0 1000 1000"><path fill="#374151" fill-rule="evenodd" d="M153.906 69.336c-19.14 0-34.57 15.43-34.57 34.57v766.602l277.148-184.766 277.149 184.766V519.531c0-19.14 15.429-34.57 34.57-34.57s34.57 15.43 34.57 34.57V1000L396.484 769.141 50 1000V103.906C50 46.484 96.68 0 153.906 0h277.149c19.14 0 34.57 15.43 34.57 34.57s-15.43 34.57-34.57 34.57H153.906v.196ZM777.539 0c19.141 0 34.57 15.43 34.57 34.57v138.477c0 19.14-15.429 34.57-34.57 34.57H639.062c-19.14 0-34.57-15.43-34.57-34.57 0-19.141 15.43-34.57 34.57-34.57h103.907V34.57c0-19.14 15.429-34.57 34.57-34.57Z" clip-rule="evenodd"></path><path fill="inherit" fill-rule="evenodd" d="M742.969 173.242c0-19.14 15.43-34.57 34.57-34.57h138.477c19.14 0 34.57 15.43 34.57 34.57 0 19.141-15.43 34.571-34.57 34.571H812.11v103.906c0 19.14-15.43 34.57-34.571 34.57-19.14 0-34.57-15.43-34.57-34.57V173.242Z" clip-rule="evenodd"></path></svg>

                }
              </button>
            </div>
            {(userData && (userData.id ===  articleDetails?.author?.id)) ?
              <div className='relative'>
                <button ref={moreInfoBtnRef} onClick={()=>setMoreInfo(!moreInfo)} className='flex gap-2 items-center py-2 px-3 font-medium rounded-full border text-sm hover:bg-[#e5e7eb]'>
                  <svg fill='#374151' class="w-5 h-5" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-207.5 86.6l115-115.1c4.7-4.7 4.7-12.3 0-17l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L256 303l-99.5-99.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l115 115.1c4.8 4.6 12.4 4.6 17.1-.1z"></path></svg>
                  <p className='text-[#374151]'>More</p>
                </button>
                {/* More Info */}
                <MoreInfoPopup moreInfo={moreInfo} setMoreInfo={setMoreInfo} moreInfoBtnRef={moreInfoBtnRef} >
                  <button className='flex gap-3 items-center py-3 px-4 hover:bg-[#f3f4f6] w-full'>
                    <svg  class="w-5 h-5 opacity-75" viewBox="0 0 448 512"><path d="M224 480a32 32 0 01-32-32h-32a64 64 0 10128 0h-32a32 32 0 01-32 32zm209.37-145.19c-28-26.62-49.34-54.48-49.34-148.9 0-79.6-63.37-144.5-144-152.36V16a16 16 0 00-32 0v17.56C127.35 41.41 64 106.31 64 185.91c0 94.4-21.41 122.28-49.35 148.9a46.47 46.47 0 00-11.27 51.24A47.68 47.68 0 0048 416h352a47.67 47.67 0 0044.62-30 46.47 46.47 0 00-11.25-51.19zM400 384H48c-14.22 0-21.35-16.47-11.32-26C71.54 324.8 96 287.66 96 185.91 96 118.53 153.22 64 224 64s128 54.52 128 121.91c0 101.34 24.22 138.68 59.28 172.07C421.37 367.56 414.16 384 400 384zM296 224h-56v-56a8 8 0 00-8-8h-16a8 8 0 00-8 8v56h-56a8 8 0 00-8 8v16a8 8 0 008 8h56v56a8 8 0 008 8h16a8 8 0 008-8v-56h56a8 8 0 008-8v-16a8 8 0 00-8-8z"></path></svg>
                    <span>Follow</span>
                  </button>
                  <Link state={articleDetails} to={`/edit-story`} className='flex gap-3 items-center py-3 px-4 hover:bg-[#f3f4f6] w-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>
                    <span>Edit</span>
                  </Link>
                  <button onClick={()=>setButtonPopupArticle(true)} className='flex gap-3 items-center py-3 px-4 hover:bg-[#f3f4f6] w-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Delete</span>
                  </button>
                </MoreInfoPopup>
              </div>
            :
              ''
            }
          </div>
          {/* Table of Content */}
          <div id='tableOfContent' className='w-full' >
            <div className='border rounded-lg p-4'>
              <div className='flex justify-between items-baseline'>
                <h3 class="font-semibold tracking-tight text-[#111827] uppercase flex gap-5 mb-5">
                  <svg class="w-5 h-5 opacity-75" viewBox="0 0 512 512"><path d="M88 56H40a16 16 0 00-16 16v48a16 16 0 0016 16h48a16 16 0 0016-16V72a16 16 0 00-16-16zm0 160H40a16 16 0 00-16 16v48a16 16 0 0016 16h48a16 16 0 0016-16v-48a16 16 0 00-16-16zm0 160H40a16 16 0 00-16 16v48a16 16 0 0016 16h48a16 16 0 0016-16v-48a16 16 0 00-16-16zm416 24H168a8 8 0 00-8 8v16a8 8 0 008 8h336a8 8 0 008-8v-16a8 8 0 00-8-8zm0-320H168a8 8 0 00-8 8v16a8 8 0 008 8h336a8 8 0 008-8V88a8 8 0 00-8-8zm0 160H168a8 8 0 00-8 8v16a8 8 0 008 8h336a8 8 0 008-8v-16a8 8 0 00-8-8z"></path></svg>
                  <span>Table of contents</span>
                </h3>
                <button id='openTableOfContentBtn' onClick={openTableOfContentBox} className='p-2 hidden rounded-full text-[#4b5563] hover:bg-[#f3f4f6]'>
                  <svg class="w-5 h-5" viewBox="0 0 448 512"><path d="M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z"></path></svg>
                </button>
              </div>
              <ul className='ml-1 border-l pl-8 font-semibold list-inside w-full'>
                {
                    headings && Object.values(headings).map((heading, index) => (
                        <li key={index} className="text-[#1f2937] p-1 w-full border border-transparent rounded-lg hover:bg-[#e5e7eb] hover:font-bold hover:shadow-lg hover:text-blue-600 shadow-blue-500/50">
                          <a className="w-full overflow-hidden text-ellipsis"  href={`#${heading.id}`}>
                            {heading.innerText}
                          </a>
                        </li>
                      ))
                }
              </ul> 
            </div>
          </div>
          {/* Content */}
          <div className='border-b'>
            <div ref={contentRef} className='mb-8 prose max-w-none'>
                <ReactMarkdown>{articleDetails?.content}</ReactMarkdown>
            </div>
            {/* Article Tags */}
            <div className='flex flex-wrap flex-row mb-5 w-full'>
              <a href="/tag/web-development" class="py-1 px-2 mb-2 mr-3 font-medium text-[#374151] bg-[#f3f4f6] border rounded-lg hover:bg-[#e5e7eb]">
                <span>Web Development</span>
              </a>
              <a href="/tag/web-development" class="py-1 px-2 mb-2 mr-3 font-medium text-[#374151] bg-[#f3f4f6] border rounded-lg hover:bg-[#e5e7eb]">
                <span>React</span>
              </a>
              <a href="/tag/web-development" class="py-1 px-2 mb-2 mr-3 font-medium text-[#374151] bg-[#f3f4f6] border rounded-lg hover:bg-[#e5e7eb]">
                <span>Job Search</span>
              </a>
              <a href="/tag/web-development" class="py-1 px-2 mb-2 mr-3 font-medium text-[#374151] bg-[#f3f4f6] border rounded-lg hover:bg-[#e5e7eb]">
                <span>Frontend Development</span>
              </a>
              <a href="/tag/web-development" class="py-1 px-2 mb-2 mr-3 font-medium text-[#374151] bg-[#f3f4f6] border rounded-lg hover:bg-[#e5e7eb]">
                <span>Astro</span>
              </a>
            </div>
          </div>
          {/* Comments Section Header */}
          <div className='flex flex-col sm:flex-row sm:justify-between w-full items-center p-4 mb-2 border rounded-lg'>
            <h3 className='text-xl font-bold tracking-tight text-[#111827] mb-6 sm:mb-0'>Comments <span>({comments.length})</span></h3>
            <button onClick={()=>setShowCommentInput(true)} className='flex items-center p-2 font-medium hover:bg-[#f3f4f6] gap-2 border border-blue-600 rounded-lg text-blue-600'>
              <svg class="w-5 h-5" viewBox="0 0 384 512" fill='#2962ff'><path d="M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path></svg>
              <span>Write a comment</span>
            </button>
          </div>
          {/* New Comment */}
          <NewComment articleDetails={articleDetails} setComments={setComments} showCommentInput={showCommentInput}  type={'Post'} setShowCommentInput={setShowCommentInput} />
          {/* Comments Section */}
          <div className='w-full mb-8'>
          {
            comments.map((commentDetails)=>{
              return (
              <>
                <Comment setComments={setComments} commentDetails={commentDetails} setShowCommentInput={setShowCommentInput} />
              </>
              )
            })
          }  
          </div>
          {/* Footer */}
          <footer className='py-10 px-5 mt-[-1px] text-center text-[#1f2937] border-t bg-[#f3f4f6] w-screen'>
            <div className='flex flex-col items-center justify-center'>
              <div className='flex flex-col flex-wrap mb-12 items-center'>
                <p className='mb-2 text-[#4b5563]'>©2022 Sarah</p>
                <div className='flex gap-2  text-[#4b5563] items-center'> 
                  <a className='underline'>Archive</a>
                  <span className='font-bold opacity-20 text-black'>.</span>
                  <a className='underline'>Privacy policy</a>
                  <span className='font-bold opacity-20 text-black'>.</span>
                  <a className='underline'>Terms</a>
                </div>
              </div>
              <p className='text-sm text-[#4b5563]'>Powered by <a className='underline'>Hashnode</a> - Home for tech writers and readers</p>
            </div>
          </footer>
        </div>
        
    </article>
    
    {/* Delete the Article Popup */}
    <Popup trigger={buttonPopupArticle} setTrigger={setButtonPopupArticle}>
      <form onSubmit={(event)=>deleteArticle(event, article_id)} className='flex flex-col '>
        <p className='my-8'>Do you really want to delete this article ?</p>
        <button type='submit' className='py-2 self-end w-fit px-4 rounded-full text-white bg-red-500 font-medium self-end'>Delete</button>
      </form>
    </Popup>
    </div>
  )
}
export default Article;