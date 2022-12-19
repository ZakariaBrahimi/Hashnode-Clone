import {useState, useRef, useEffect} from 'react'

const MoreInfoPopup = (props)=>{
	const moreInfoBoxRef = useRef()
  	useEffect(()=>{
    const handler = (e)=>{

      if(!moreInfoBoxRef.current.contains(e.target) && !props.moreInfoBtnRef.current.contains(e.target)){
        props.setMoreInfo(false)

      }
    }
    document.addEventListener('click', handler)
    return ()=> {
      document.removeEventListener('click', handler)
    }
  })
	return (
		<>
			<div ref={moreInfoBoxRef} className={`${props.moreInfo ? '' : 'hidden'} absolute z-40 bg-white shadow-sm shadow-blue-500/50 border rounded-lg right-0 top-full w-40 font-semibold text-[#6b7280] text-sm mt-1`}>
                {props.children}     
            </div>
		</>

	)
}
export default MoreInfoPopup;