import {useState, useEffect, useRef, useContext} from 'react'
import AuthContext from '../context/AuthContext'
import { axiosAPI } from '../axios'


const NewComment = ({showCommentInput, type, setShowCommentInput, comments, setComments, articleDetails})=>{
	const addNewComment = ()=>setComments([...comments, newComment])
	const [newComment, setNewComment] = useState('')
    const { userData } = useContext(AuthContext)


    const create_new_comment = async (event)=>{
        event.preventDefault()
        try{
          const {data} = await axiosAPI({
            method: 'post',
            url: `/add-comment`,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            data: {
                'content': newComment
            },
            params: {
                articleID: articleDetails?.id,
              }
          })
        setComments(data)
        // cleanup textarea content
        setNewComment('')
        }catch(error){
          console.log(error)
        }
      }
	return(
		<>
			<form onSubmit={create_new_comment} className={`${showCommentInput ? 'flex' : 'hidden'} gap-4 flex-col sm:justify-between w-full items-center p-4 mb-6 border rounded-lg`}>
	            <div className='flex justify-between items-center overflow-hidden  w-full'>
	              <div className='flex items-center gap-2'>
                    <img className='w-10 h-10 rounded-full' src={`${userData?.img}`} alt="" />
	                <p className='font-medium opacity-75 text-ellipsis'>{userData?.fullname}</p>
	              </div>
	              <button onClick={()=>setShowCommentInput(false)} className='p-2 rounded-full hover:bg-[#f3f4f6]'>
	                <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
	              </button>
	            </div>
                    <textarea value={newComment} onChange={(e)=>setNewComment(e.target.value)} className='w-full py-6 resize-none px-4 bg-transparent text-[#111827] min-h-[30vh] text-xl h-[75px] border-y outline outline-transparent ' placeholder="Start typing..." ></textarea>
                    <div className='flex gap-4 justify-end w-full mt-2'>
                    <button onClick={()=>setShowCommentInput(false)} className='rounded-full text-center py-1 px-3 text-[#374151] hover:bg-[#e5e7eb] font-medium'>
                        Cancel
                    </button>
                    <button onClick={addNewComment} className='border hover:bg-[#eff6ff] rounded-full flex justify-center items-center gap-1 text-center py-1 px-3 font-medium border-blue-600'>
                        <span className='text-[#2962ff]'>{type}</span>
                        <svg class="w-5 h-5" fill='#2962ff' viewBox="0 0 512 512"><path d="M464 4.3L16 262.7C-7 276-4.7 309.9 19.8 320L160 378v102c0 30.2 37.8 43.3 56.7 20.3l60.7-73.8 126.4 52.2c19.1 7.9 40.7-4.2 43.8-24.7l64-417.1C515.7 10.2 487-9 464 4.3zM192 480v-88.8l54.5 22.5L192 480zm224-30.9l-206.2-85.2 199.5-235.8c4.8-5.6-2.9-13.2-8.5-8.4L145.5 337.3 32 290.5 480 32l-64 417.1z"></path></svg>
                    </button>
                    </div>
	         </form>
             

		</>
		)
}
export default NewComment;