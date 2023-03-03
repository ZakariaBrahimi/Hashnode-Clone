import {useRef} from 'react'

const Popup = (props) => {
  const popupinner = useRef()
  const closePopup = (e)=>{
    if (!popupinner.current.contains(e.target)){
      props.setTrigger(false)
    }
  }
  return (props.trigger) ? (
    <div onClick={closePopup}  className="fixed top-0 left-0 w-screen z-50 h-screen bg-[#00000033] flex justify-center items-center">
      <div ref={popupinner} className='relative w-full flex flex-col gap-2 bg-white max-w-[30rem] min-w-[10rem] m-6 p-6 rounded-xl shadow-gray-300 shadow-2xl'>
        <button onClick={()=>props.setTrigger(false)} className='p-2 rounded-full hover:bg-[#f3f4f6] absolute top-4 right-4'>
          <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        {props.children}
      </div>
    </div>
    
  ) : ""
}
export default Popup