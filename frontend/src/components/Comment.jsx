import Moment from 'react-moment';
import Popup from '../components/Popup'
import { useContext, useState } from 'react';
import { axiosAPI } from '../axios';
import {toast} from 'react-toastify';
import AuthContext from '../context/AuthContext'

const Comment = ({setShowCommentInput, commentDetails, setComments, showCommentInput})=>{
    const {userData} = useContext(AuthContext)
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
    const [buttonPopup, setButtonPopup] = useState(false)
    const [commentupdatePopup, setCommentupdatePopup] = useState(false)
    const [commentupdateContent, setCommentupdateContent] = useState(commentDetails?.content)
    const comment_update = async (event)=>{
        event.preventDefault();
        try{
            const {data} = await axiosAPI({
              method: 'post',
              url: `/edit-comment`,
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
              }, 
              params: {
                commentID: commentDetails?.id,
                },
              data: {
                'content': commentupdateContent
              }
            })
            console.log(data)
            setComments(data)
            setCommentupdatePopup(false)
          }catch(error){
            if(error.response.status===401){
              notifyError('You are not authorized, Login first')
            }
          }
    }
    const comment_delete = async (event)=>{
        event.preventDefault();
        try{
            const {data} = await axiosAPI({
              method: 'post',
              url: `/delete-comment`,
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
              }, 
              params: {
                commentID: commentDetails?.id,
                }
            })
            console.log(data)
            setComments(data)
            setButtonPopup(false)
          }catch(error){
            if(error.response.status===401){
              notifyError('You are not authorized, Login first')
            }
          }
    }
    console.log(commentupdateContent)
  return (
    <div key={commentDetails?.id} className=' p-4 mb-6 border rounded-lg'>
      <div className='flex flex-col gap-4 sm:gap-0 sm:flex-row sm:justify-between sm:items-center w-full'>
        <div className='flex gap-2 overflow-hidden'>
            <img className="w-10 h-10 rounded-full" src={'http://127.0.0.1:8000'+commentDetails?.author.img} alt="user" />
          <div className='flex flex-col justify-between'>
            <p className='font-medium opacity-75 text-ellipsis'>{commentDetails?.author.fullname}</p>
            <p className='text-sm text-[#374151] overflow-hidden text-ellipsis'>{commentDetails?.profile_tagline}</p>
          </div>
        </div>
        <div className='flex gap-2 items-center ml-12 sm:ml-0 justify-between sm:justify-start relative'>
          
          {/* <p className='text-sm font-medium text-[#9ca3af]'>5 hrs ago</p> */}
          <Moment className='text-sm font-medium text-[#9ca3af]'  fromNowDuring={861540000-1} format="DD MMM, Y" >{commentDetails?.created_date}</Moment>
          <button onClick={()=>setCommentupdatePopup(true)} className='flex rounded-full items-center p-2 hover:bg-[#f3f4f6] opacity-75'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>
          </button>
          <button onClick={()=>setButtonPopup(true)} className='flex rounded-full items-center p-2 hover:bg-[#f3f4f6] opacity-75'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </button>
        </div>
      </div>
      <p className=' ml-12 my-5 max-w-[65ch] text-lg break-words'>{commentDetails?.content}</p>
      
      {/* <button className='flex gap-2 opacity-75 items-center ml-12'>
        <span>10</span>
        <svg fill="red" viewBox="0 0 24 24" class="h-6 w-6 mr-1" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
      </button>     */}

      {/* Delete a Comment Popup */}
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <form onSubmit={comment_delete} className='flex flex-col '>
            <p className='my-8'>Do you really want to delete your comment ?</p>
            <button type='submit' className='py-2 self-end w-fit px-4 rounded-full text-white bg-red-500 font-medium self-end'>Delete</button>
        </form>
        </Popup>
        <Popup customWidth={'max-w-[60rem]'} closeBTN={true} trigger={commentupdatePopup} setTrigger={setCommentupdatePopup}>
        <form onSubmit={comment_update} className={`${commentupdatePopup ? 'flex' : 'hidden'} gap-4 flex-col sm:justify-between w-full  items-center p-4 mb-6 border rounded-lg`}>
	            <div className='flex justify-between items-center overflow-hidden  w-full'>
	              <div className='flex items-center gap-2'>
                    <img className='w-10 h-10 rounded-full' src={`${userData?.img}`} alt="user" />
	                <p className='font-medium opacity-75 text-ellipsis'>{userData?.fullname}</p>
	              </div>
	              <button onClick={()=>setCommentupdatePopup(false)} className='p-2 rounded-full hover:bg-[#f3f4f6]'>
	                <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
	              </button>
	            </div>
                <textarea value={commentupdateContent} onChange={(e)=>setCommentupdateContent(e.target.value)} className='w-full py-6 resize-none px-4 bg-transparent text-[#111827] min-h-[30vh] text-xl h-[75px] border-y outline outline-transparent ' placeholder="Start typing..." ></textarea>
                <div className='flex gap-4 justify-end w-full mt-2'>
                    <button onClick={()=>setCommentupdatePopup(false)} className='rounded-full text-center py-1 px-3 text-[#374151] hover:bg-[#e5e7eb] font-medium'>
                        Cancel
                    </button>
                    <button type='submit' className='border hover:bg-[#eff6ff] rounded-full flex justify-center items-center gap-1 text-center py-1 px-3 font-medium border-blue-600'>
                        <span className='text-[#2962ff]'>Update a Comment</span>
                        <svg class="w-5 h-5" fill='#2962ff' viewBox="0 0 512 512"><path d="M464 4.3L16 262.7C-7 276-4.7 309.9 19.8 320L160 378v102c0 30.2 37.8 43.3 56.7 20.3l60.7-73.8 126.4 52.2c19.1 7.9 40.7-4.2 43.8-24.7l64-417.1C515.7 10.2 487-9 464 4.3zM192 480v-88.8l54.5 22.5L192 480zm224-30.9l-206.2-85.2 199.5-235.8c4.8-5.6-2.9-13.2-8.5-8.4L145.5 337.3 32 290.5 480 32l-64 417.1z"></path></svg>
                    </button>
                </div>
	         </form>
        </Popup>
        
    </div>
    )
}
export default Comment
