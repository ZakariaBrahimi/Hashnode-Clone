import {useRef} from 'react'

const NotificationsPopup = (props) => {
  const popupinner = useRef()
  const closePopup = (e)=>{
    if (!popupinner.current.contains(e.target)){
      props.setTrigger(false)
    }
  }
  return (props.trigger) ? (
    <div onClick={closePopup} className="fixed h-[3rem] text-white font-medium  top-[4.3rem] left-0 w-screen z-50 bg-green-500 flex justify-center items-center">
      <div ref={popupinner} className='w-full relative flex gap-2 items-center justify-between m-6 p-6 w-full'>
        <button onClick={()=>props.setTrigger(false)} className='absolute top-6 font-bold right-0'>
          <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        {props.children}
      </div>
    </div>
    
  ) : ""
}

export default NotificationsPopup;