import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
const CreateNewArticle = () => {
  return (
    <div className="bg-white h-full mt-[-20px]">
    <div className="lg:w-[80vw] w-[98vw] sm:w-[88vw] md:w-[78vw] xl:w-[65vw]  mx-auto  mt-12 ">
        <div className="flex flex-col gap-8">
          <div className="text-[#334155] flex gap-4 relative">
            {/*Add Cover Box */}
            <div className="flex flex-col min-w-[750px] border absolute top-[100%] left-0 z-50 p-4 overflow-auto bg-white rounded-lg shadow-lg shadow-slate-200">
              <button type="button" variant="transparent" aria-label="Hide cover image modal" class="opacity-75 hover:bg-[#e2e8f0] absolute right-0 top-0 py-1 px-3 leading-relaxed font-medium rounded-full align-middle flex justify-center items-center m-2 outline-transparent outline outline-2 outline-offset-2">
                <svg class=" w-5 h-5" viewBox="0 0 320 512"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></svg>
              </button>
              <div class="flex gap-4 w-full border-b">
                <button type="button" variant="no-style" aria-label="Upload an image for the cover" class="flex  gap-2 flex-nowrap items-center justify-center outline-transparent outline-2 outline-offset-2 py-3 px-4 font-semibold border-b-2 rounded-t-md text-[#3466f6] border-[#3466f6] hover:bg-[#e2e8f0]">
                  <svg fill="#3466f6" class="w-5 h-5" viewBox="0 0 512 512"><path d="M122.6 155.1 240 51.63V368c0 8.844 7.156 16 16 16s16-7.156 16-16V51.63l117.4 104.3c3 2.77 6.8 4.07 10.6 4.07 4.406 0 8.812-1.812 11.97-5.375 5.875-6.594 5.25-16.72-1.344-22.58l-144-128a15.949 15.949 0 0 0-21.25 0l-144 128C94.78 137.9 94.16 148 100 154.6s16.1 7.2 22.6.5zM448 320H336c-8.836 0-16 7.162-16 16 0 8.836 7.164 16 16 16h112c17.67 0 32 14.33 32 32v64c0 17.67-14.33 32-32 32H64c-17.67 0-32-14.33-32-32v-64c0-17.67 14.33-32 32-32h112c8.8 0 16-7.2 16-16s-7.2-16-16-16H64c-35.35 0-64 28.65-64 64v64c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64v-64c0-35.3-28.7-64-64-64zm-8 96c0-13.25-10.75-24-24-24s-24 10.75-24 24 10.75 24 24 24 24-10.7 24-24z"></path></svg>
                  <span>Upload</span>
                </button>
                <button type="button" variant="no-style" aria-label="Choose an Unsplash image for the cover" class="flex opacity-75 gap-2 flex-nowrap items-center justify-center outline-transparent outline-2 outline-offset-2 py-3 px-4 font-semibold rounded-t-md  hover:bg-[#e2e8f0]">
                  <svg class="w-5 h-5 opacity-75" viewBox="20 21 96 96"><g fill-rule="evenodd"><path d="M50 21h36v27H50zM20 63h30.087v27.24h36.079V63H116v54H20z"></path></g></svg>
                  <span>Unsplash</span>
                </button>
              </div>
              <div class="flex justify-center  items-center align-middle mt-10 mb-6">
                <label class="py-3 px-12 text-sm font-bold rounded-lg text-white bg-blue-600 cursor-pointer hover:bg-opacity-75">
                  <span class="css-1glcwfl">Choose an image</span>
                  <input className="hidden" type="file" id="inputUpload" data-id="upload-cover" accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg, image/webp, image/bmp, image/x, image/tiff, image/vnd, image/xbm" />
                </label>
              </div>
               <p class="text-sm w-full text-center text-[#475569] leading-tight">Recommended dimension is 1600 x 840</p>
            </div>


            <button className="flex gap-2 justify-center items-center font-medium border rounded-full py-1 px-3 hover:bg-[#e2e8f0]">
              <svg fill="#334155" class="w-5 h-5" viewBox="0 0 512 512"><path d="M324.9 157.8c-11.38-17.38-39.89-17.31-51.23-.063L200.5 268.5l-16.4-22.6c-11.4-16.8-38.2-16-49.7 0l-64.52 89.16c-6.797 9.406-7.75 21.72-2.547 32C72.53 377.5 83.05 384 94.75 384h322.5c11.41 0 21.8-6.281 27.14-16.38a30.922 30.922 0 0 0-1.516-31.56L324.9 157.8zM95.8 352l62.39-87.38 29.91 41.34c3.1 4.24 8.3 7.24 13.3 6.64 5.25-.125 10.12-2.781 13.02-7.188l83.83-129.9L415 352H95.8zM447.1 32h-384C28.65 32-.01 60.65-.01 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96c.01-35.35-27.79-64-63.99-64zM480 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h384c17.64 0 32 14.36 32 32v320zM144 192c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm0-64c8.822 0 15.1 7.178 15.1 16s-6.3 16-15.1 16-16-7.2-16-16 7.2-16 16-16z"></path></svg>
              <span>Add Cover</span>
            </button>
            <button className="flex gap-2 justify-center items-center font-medium border rounded-full py-1 px-3 hover:bg-[#e2e8f0]">
              <svg fill="#334155" class="w-5 h-5" viewBox="0 0 448 512"><path d="M448 48v72a8 8 0 01-8 8h-16a8 8 0 01-8-8V64H240v384h72a8 8 0 018 8v16a8 8 0 01-8 8H136a8 8 0 01-8-8v-16a8 8 0 018-8h72V64H32v56a8 8 0 01-8 8H8a8 8 0 01-8-8V48a16 16 0 0116-16h416a16 16 0 0116 16z"></path></svg>
              <span>Add Subtitle</span>
            </button>
          </div>
          <div className="w-full leading-snug">
            <textarea maxLength='150' className="h-[84px] placeholder-[#0f172a] placeholder-opacity-50 w-full px-4 mt-2 text-4xl overflow-hidden font-extrabold	 text-[#0f172a] bg-transparent outline-transparent outline-2 outline appearance-none outline-offset-2 resize-none " type="text" placeholder="Article Title ..." ></textarea>
          </div>
          
        </div>

        <SimpleMDE />

        <button className="bg-blue-600 mb-8 rounded-full py-2 px-5 text-white font-medium text-lg">Publish</button>
        
    </div>
    </div>
  )
}

export default CreateNewArticle