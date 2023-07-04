import {useState, useRef, useEffect} from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios  from 'axios'
import { axiosAPI } from "../axios";
import {toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const CreateNewArticle = () => {
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
const notifyWarning = (message) => toast.warning(message, {
    position: "top-left",
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});
  const [photos, setPhotos] = useState([])
  const [uploadImg, setUploadImg] = useState(false)
  const [infoBox, setInfoBox] = useState(true)
  const [uploadImgFrom, setUploadImgFrom] = useState('local')
  const [selectedImg, setSelectedImg] = useState(null)
  const [selectedImgFromUnsplash, setselectedImgFromUnsplash] = useState(null)
  const [imgPreview, setImgPreview] = useState(undefined)
  const onSelectPhotoFromUnsplash = (e)=>{
  
    //if (!e.target.files || e.target.files.length === 0) {
      //setSelectedImg(undefined)
      //return
  //}
    setselectedImgFromUnsplash(e.target.src)
    setInfoBox(true)
  }
  useEffect(()=>{
    if (!selectedImgFromUnsplash) {
      setImgPreview(undefined)
      return
    }
    setUploadImg(false)
    //console.log(selectedImgFromUnsplash)
    //const objectUrl = URL.createObjectURL(selectedImgFromUnsplash)
    setImgPreview(selectedImgFromUnsplash)
    // free memory when ever this component is unmounted
    //return () => URL.revokeObjectURL(objectUrl)
  },[selectedImgFromUnsplash,])
  
  const onSelectFile = (e)=>{
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedImg(undefined)
      return
  }
    setSelectedImg(e.target.files[0])
    setInfoBox(true)
  }
  useEffect(()=>{
    if (!selectedImg) {
      setImgPreview(undefined)
      return
    }
    setUploadImg(false)
    const objectUrl = URL.createObjectURL(selectedImg)
    setImgPreview(objectUrl)
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  },[selectedImg])
  
  const fetchPhotos = ()=>{
    axios({
      method: 'get',
      url: 'https://api.unsplash.com/photos/',
      headers: { Authorization: "Client-ID 1yZA8BKiDDm37swWqYwX-O6pswpYU16pgxHtDu3A3i8", },
    }).then((response)=>{
      console.log(response.data[0].user['first_name'] + ' ' + response.data[0].user['last_name'])
      setPhotos(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  }
  const [searchedPhoto, setSearchedPhoto] = useState('')
  const searchPhoto = (e)=>{
    console.log(e)
    axios({
      method: 'get',
      url: `https://api.unsplash.com/search/photos/?query=${searchedPhoto}`,
      headers: { Authorization: "Client-ID 1yZA8BKiDDm37swWqYwX-O6pswpYU16pgxHtDu3A3i8", 
    },
    }).then((response)=>{
      //console.log(response.data.results)
      setPhotos(response.data.results)
    }).catch((error)=>{
      console.log(error)
    })

    
  }
  const titleSubtitle = useRef()
  const setSubtitleInput = `<textarea maxLength='150' style='' className="h-[84px] placeholder-[#0f172a] placeholder-opacity-50 w-full px-4 mt-2 text-4xl overflow-hidden font-extrabold	 text-[#0f172a] bg-transparent outline-transparent outline-2 outline appearance-none outline-offset-2 resize-none " type="text" placeholder="Article Subtitle ..." ></textarea>`
  const addSubtitle = (e)=>{
    document.getElementById('box').innerHTML += setSubtitleInput
  }
  const [showSubtitle, setShowSubtitle] = useState(false)


  const article_create_handler = async (e) => {
    e.preventDefault()
    if(e.nativeEvent.submitter.name === 'publish'){
      console.log(selectedImg)
      console.log(selectedImgFromUnsplash)
      try{
        const formData = new FormData();
        formData.append('title', e.target.title.value);
        formData.append('upload_from', selectedImg ? 'local' : 'unsplash');
        formData.append('subtitle', e.target.subtitle.value);
        formData.append('content', e.target.articleBody.value);
        formData.append('cover', selectedImg ? selectedImg : selectedImgFromUnsplash);
        const {data} = await axiosAPI({
          url: '/create/article',
          method: 'post',
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
          },
          data: formData
        })
        console.log(data)
        navigate(`/article/${data?.id}`)
        notifySuccess('A New Article Created Successfully')
      }catch(errors){
        console.log(typeof(errors))

      }
    }else{
      try{
        const formData = new FormData();
        formData.append('title', e.target.title.value);
        formData.append('subtitle', e.target.subtitle.value);
        formData.append('content', e.target.articleBody.value);
        formData.append('cover', selectedImg);
        const {data} = await axiosAPI({
          url: '/create-draft/article',
          method: 'post',
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
          },
          data: formData
        })
        console.log(data)
        navigate(`/drafts`)
        notifySuccess('Article Created and saved as draft Successfully')
      }catch(e){}
    }
  }
  
  return (
    <div className="bg-white h-full mt-[-20px]">
      <div className="lg:w-[80vw] w-[98vw] sm:w-[88vw] md:w-[78vw] xl:w-[65vw] mx-auto mt-12 ">
        <div className="flex flex-col gap-8">
          <div className="text-[#334155] flex gap-4 relative">
            {/*Add Cover Box */}
            <div className={`${uploadImg ? 'flex' : 'hidden'} w-[80%] flex-col border absolute top-[100%] left-0 z-50 p-4 max-w-[950px] min-w-[320px] bg-white rounded-lg shadow-lg shadow-slate-200`}>
              <button onClick={()=>setUploadImg(false)} type="button" variant="transparent" aria-label="Hide cover image modal" class="opacity-75 hover:bg-[#e2e8f0] absolute right-0 top-0 py-1 px-3 leading-relaxed font-medium rounded-full align-middle flex justify-center items-center m-2 outline-transparent outline outline-2 outline-offset-2">
                <svg class=" w-5 h-5" viewBox="0 0 320 512"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></svg>
              </button>
              <div class="flex gap-4 w-full border-b">
                <button onClick={()=>setUploadImgFrom('local')} type="button" variant="no-style" aria-label="Upload an image for the cover" class={` ${uploadImgFrom === 'local' ? 'text-[#3466f6] border-[#3466f6] border-b-2' : ''} flex  gap-2 flex-nowrap items-center justify-center outline-transparent outline-2 outline-offset-2 py-3 px-4 font-semibold rounded-t-md hover:bg-[#e2e8f0]`}>
                  <svg fill={` ${uploadImgFrom === 'local' ? '#3466f6' : ''} `} class={`w-5 h-5 ${uploadImgFrom === 'local' ? '' : 'opacity-75'} `} viewBox="0 0 512 512"><path d="M122.6 155.1 240 51.63V368c0 8.844 7.156 16 16 16s16-7.156 16-16V51.63l117.4 104.3c3 2.77 6.8 4.07 10.6 4.07 4.406 0 8.812-1.812 11.97-5.375 5.875-6.594 5.25-16.72-1.344-22.58l-144-128a15.949 15.949 0 0 0-21.25 0l-144 128C94.78 137.9 94.16 148 100 154.6s16.1 7.2 22.6.5zM448 320H336c-8.836 0-16 7.162-16 16 0 8.836 7.164 16 16 16h112c17.67 0 32 14.33 32 32v64c0 17.67-14.33 32-32 32H64c-17.67 0-32-14.33-32-32v-64c0-17.67 14.33-32 32-32h112c8.8 0 16-7.2 16-16s-7.2-16-16-16H64c-35.35 0-64 28.65-64 64v64c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64v-64c0-35.3-28.7-64-64-64zm-8 96c0-13.25-10.75-24-24-24s-24 10.75-24 24 10.75 24 24 24 24-10.7 24-24z"></path></svg>
                  <span>Upload</span>
                </button>
                <button onClick={()=>{setUploadImgFrom('unsplash'); fetchPhotos()}} type="button" variant="no-style" aria-label="Choose an Unsplash image for the cover" class={` ${uploadImgFrom === 'unsplash' ? 'text-[#3466f6] border-[#3466f6] border-b-2' : ''} flex gap-2 flex-nowrap items-center justify-center outline-transparent outline-2 outline-offset-2 py-3 px-4 font-semibold rounded-t-md  hover:bg-[#e2e8f0]` }>
                  <svg fill={` ${uploadImgFrom === 'unsplash' ? '#3466f6' : ''} `} class={`w-5 h-5 ${uploadImgFrom === 'unsplash' ? '' : 'opacity-75'} `} viewBox="20 21 96 96"><g fill-rule="evenodd"><path d="M50 21h36v27H50zM20 63h30.087v27.24h36.079V63H116v54H20z"></path></g></svg>
                  <span>Unsplash</span>
                </button>
              </div>
              {uploadImgFrom === 'local' ?
              <>
                <div class="flex justify-center  items-center align-middle mt-10 mb-6">
                  <label class="py-3 px-12 text-sm font-bold rounded-lg text-white bg-blue-600 cursor-pointer hover:bg-opacity-75">
                    <span class="">Choose an image</span>
                    <input name="artical_img"  onChange={onSelectFile} className="hidden" type="file"  data-id="upload-cover" accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg, image/webp, image/bmp, image/x, image/tiff, image/vnd, image/xbm" />
                  </label>
                </div>
                  <p class="text-sm w-full text-center text-[#475569] leading-tight">Recommended dimension is 1600 x 840</p>
              </>
              :
              <div className="flex flex-col ">
                <div className="mt-6">
                  <label for="unsplash-search" class="flex gap-3 w-full mb-5">
                    <div class="w-11/12 relative">
                      <input onKeyUp={searchPhoto} onChange={(e)=>setSearchedPhoto(e.target.value)} value={searchedPhoto} className="rounded-md outline-transparent outline outline-2 outline-offset-2 border py-2 px-4 text-sm w-full bg-[#f8fafc] focus:bg-transparent focus:border-[#3466f6]" id="unsplash-search" type="text" autocomplete="off" placeholder="Type something and press enter"  />
                      <button onClick={()=>setSearchedPhoto('')} className={`${(searchedPhoto === '') ? 'hidden' : 'flex'} w-3 h-3 cursor-pointer absolute right-3 top-3 opacity-75`} disabled="" type="button" variant="no-style" aria-label="Clear image search">
                        <svg class="w-4 h-4" viewBox="0 0 320 512"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></svg>
                      </button>
                    </div>
                    <button onClick={searchPhoto} className="py-1 hover:bg-[#e2e8f0] px-3 font-medium text-[#334155] border-transparent border outline-transparent outline-2 outline-offset-2 rounded-md" type="button" variant="transparent" >
                      <svg fill="" class="w-4 h-4" viewBox="0 0 512 512"><path fill="currentColor" d="M507.3 484.7 365.8 343.2c31.2-36.4 49.3-83.5 49.3-135.2 0-114.9-93.13-208-208-208S0 93.13 0 208s93.12 208 207.1 208c51.68 0 98.85-18.96 135.2-50.15l141.5 141.5c4 3.05 8.1 4.65 12.2 4.65s8.188-1.562 11.31-4.688c6.29-6.212 6.29-16.412-.01-22.612zM208 384c-97.9 0-176-79-176-176S110.1 32 208 32s176 78.1 176 176-79 176-176 176z"></path></svg>
                    </button>
                  </label>
                </div>
                <div className="w-full pr-4 grid grid-cols-12 gap-4 whitespace-wrap overflow-y-auto h-[18rem]">
                {
              photos.map((photo)=>{
              //console.log(photo)
              return (
                    <div className="col-span-6 lg:col-span-4 rounded-md cursor-pointer whitespace-normal">
                      <button onClick={onSelectPhotoFromUnsplash} className="w-full hover:border-[#3466f6] overflow-hidden border-2 rounded-md outline-transparent outline-2 outline-offset-2 bg-transparent">
                        <div className="relative pb-[56.25%] w-full">
                          <div className="absolute inset-0 ">
                              <img src={photo.urls['small']} key={photo['id']} alt={photo.alt_description} srcset="" className="w-full h-full" />
                          </div>
                        </div>
                      </button>
                      <p className="">
                        <a href={photo.user['links']['html']}>by <span className="font-semibold">{photo.user['first_name'] + ' ' + photo.user['last_name']}</span></a>
                      </p>
                    </div>
              )
            })
          }
          </div>
          <p className='mt-6 text-sm text-gray-500 leading-tight font-medium w-full text-center'>Search for More Photos</p>
        </div>
        }
        </div>
        <button onClick={()=>setUploadImg(!uploadImg)} className={`${imgPreview ? 'hidden' : 'flex'} gap-2 justify-center items-center font-medium border rounded-full py-1 px-3 hover:bg-[#e2e8f0]`}>
          <svg fill="#334155" class="w-5 h-5" viewBox="0 0 512 512"><path d="M324.9 157.8c-11.38-17.38-39.89-17.31-51.23-.063L200.5 268.5l-16.4-22.6c-11.4-16.8-38.2-16-49.7 0l-64.52 89.16c-6.797 9.406-7.75 21.72-2.547 32C72.53 377.5 83.05 384 94.75 384h322.5c11.41 0 21.8-6.281 27.14-16.38a30.922 30.922 0 0 0-1.516-31.56L324.9 157.8zM95.8 352l62.39-87.38 29.91 41.34c3.1 4.24 8.3 7.24 13.3 6.64 5.25-.125 10.12-2.781 13.02-7.188l83.83-129.9L415 352H95.8zM447.1 32h-384C28.65 32-.01 60.65-.01 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96c.01-35.35-27.79-64-63.99-64zM480 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h384c17.64 0 32 14.36 32 32v320zM144 192c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm0-64c8.822 0 15.1 7.178 15.1 16s-6.3 16-15.1 16-16-7.2-16-16 7.2-16 16-16z"></path></svg>
          <span>Add Cover</span>
        </button>          
        <button onClick={()=>setShowSubtitle(true)} className={`${showSubtitle ? 'hidden' : 'flex' } gap-2 justify-center items-center font-medium border rounded-full py-1 px-3 hover:bg-[#e2e8f0]`}>
          <svg fill="#334155" class="w-5 h-5" viewBox="0 0 448 512"><path d="M448 48v72a8 8 0 01-8 8h-16a8 8 0 01-8-8V64H240v384h72a8 8 0 018 8v16a8 8 0 01-8 8H136a8 8 0 01-8-8v-16a8 8 0 018-8h72V64H32v56a8 8 0 01-8 8H8a8 8 0 01-8-8V48a16 16 0 0116-16h416a16 16 0 0116 16z"></path></svg>
          <span>Add Subtitle</span>
        </button>
      </div>
      {(selectedImgFromUnsplash || selectedImg) && 
        <div className="relative w-full">
          <img className="rounded-lg object-cover md:w-[1600px] md:h-[600px] w-[1000px] h-[400px]" src={imgPreview} alt=''/>
          <div class="absolute top-0 right-0 flex m-5 gap-2 items-center">
            <button onClick={()=>setUploadImg(true)}  class="flex justify-center items-center py-2 px-4 bg-white border-2 border-transparent rounded-md opacity-75 text-[#333333] hover:opacity-100" data-id="secondary-cover-open" data-title="Go back to select image">
              <svg class="w-5 h-5" viewBox="0 0 448 512"><path d="M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path></svg>
            </button>
            
            <button onClick={()=>{setselectedImgFromUnsplash(undefined); setSelectedImg(undefined)}}  class="flex justify-center items-center py-2 px-4 bg-white border-2 border-transparent rounded-md opacity-75 text-[#333333] hover:opacity-100" data-id="delete-cover" data-title="Remove cover">
              <svg class="w-5 h-5" viewBox="0 0 320 512"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></svg>
            </button>
          </div>
          <div className={`${selectedImgFromUnsplash ? `` : `hidden`} absolute bottom-0 right-0 flex items-center mr-5 py-2 mb-5 my-5 bg-[#e2e8f0] rounded-md`}>
            <p class="sm:px-6 px-2 sm:text-sm text-xs">
              Photo by  
              <a className="underline" href="1" rel="noopener nofollow noreferrer" target="_blank"> Andrew Neel </a>
              on <a className="underline" href="3" rel="noopener nofollow noreferrer" target="_blank"> Unsplash</a>
            </p>
            <button onClick={()=>setInfoBox(false)} type="button" className={`tooltip-handle tooltip-right-aligned flex items-center justify-center p-1 mr-2 border-2 border-transparent rounded-md opacity-75 hover:opacity-1 hover:bg-[#f1f5f9]`} data-id="toggle-attribution" data-title="Toggle image attribution visibility">
              <svg className="w-4 h-4" viewBox="0 0 320 512"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></svg>
            </button>
          </div>
        </div>
      }
      <form onSubmit={article_create_handler}>
        <div id='box' ref={titleSubtitle} className="w-full leading-snug flex flex-col">
          <textarea name="title" id="title" maxLength='150' className="h-[84px] placeholder-[#0f172a] placeholder-opacity-50 w-full px-4 mt-2 text-4xl overflow-hidden font-extrabold text-[#0f172a] bg-transparent outline-transparent outline-2 outline appearance-none outline-offset-2 resize-none " type="text" placeholder="Article Title ..." ></textarea>
          <div className='flex gap-2 flex-row-reverse justify-center items-center'>
            <button onClick={()=>setShowSubtitle(false)} type="button" data-title="Remove sub-title" variant="transparent" class={`${showSubtitle ? 'flex' : 'hidden' } mb-8 hover:bg-[#e2e8f0] px-2 font-medium rounded-full text-sm outline outline-offset-2 outline-transparent outline-2 opacity-75 py-1`}>
              <svg class="w-6 h-6" viewBox="0 0 320 512"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></svg>
            </button>
            <textarea id="subtitle" name="subtitle" maxLength='150' className={`${showSubtitle ? 'block' : 'hidden'} h-[84px] placeholder-[#0f172a] placeholder-opacity-50 w-full px-4 mt-2 text-4xl overflow-hidden font-extrabold text-[#0f172a] bg-transparent outline-transparent outline-2 outline appearance-none outline-offset-2 resize-none`} type="text" placeholder="Article Subtitle ..." ></textarea>
          </div> 
        </div>
        <SimpleMDE id="articleBody" />
        <div className='w-full flex justify-end gap-2'>
          <button type="submit" name="save_as_draft"  className="text-gray-600 hover:bg-gray-500 mb-8 rounded-full py-2 px-5 font-medium text-lg border shadow hover:text-white">Save as Draft</button>
          <button type="submit" name="publish" className="bg-blue-600  mb-8 rounded-full py-2 px-5 text-white font-medium text-lg mr-4 shadow shadow-blue-200">Publish</button>
        </div>

      </form>
    </div>
    </div>
    </div>
  )
}

export default CreateNewArticle