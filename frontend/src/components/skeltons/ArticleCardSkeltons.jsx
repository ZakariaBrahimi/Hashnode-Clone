
const ArticleCardSkeltons = ({article}) => {
  return (
    <>
      <div className={`p-5 border-b dark:text-white dark:border-[#1e293b] md:relative bg-white dark:bg-[#0f172a]`}>
          {/* The autor */}
          <div className='flex items-center gap-3 mb-2 animate-pulse'>
              {/* IMAGE */}
            <div className='w-12 h-12 rounded-full bg-slate-200 '></div>
            <div className=' space-y-2'>
              {/* AUTHOR FULL NAME */}
              <div className="bg-slate-200 px-24 py-2 rounded-2xl"></div>
              {/* CREATED AT */}
              <div className='inline-block bg-slate-200 px-16 py-2 rounded-2xl' ></div>
            </div>
          </div>

          {/* Content */}
          <div className='md:flex'>
            <div className='md:w-2/3 md:pr-5 animate-pulse'>
              {/* Featured badge */}
            <div className='mb-2 md:absolute md:top-5 md:right-5'>
              <div  className="bg-slate-200 px-24 py-3 rounded-full md:bg-slate-200 dark:bg-[#064d3b] dark:border-[#1e293b] border w-fit pr-4"></div>
            </div>
            <div>
              {/* ARTICLE TITLE */}
              <div className='bg-slate-200 px-0 py-3 rounded-lg mb-2'></div>
              {/* Reading Time */}
              <div  className="bg-slate-200 px-12 py-2 rounded-lg w-fit mb-2"></div>
              {/* ARTICLE CONTENT */}
              <p className='bg-slate-200 px-2 py-2 rounded-lg mt-4'></p>
              <p className='bg-slate-200 px-2 py-2 rounded-lg mt-4'></p>
              <p className='bg-slate-200 px-2 py-2 rounded-lg mt-4'></p>
              <p className='bg-slate-200 px-2 py-2 rounded-lg mt-4'></p>
            
            </div>
            </div>
            
            <div className='ml-4 md:w-1/3 animate-pulse'>
              <div className='bg-slate-200 px-2 py-24 rounded-lg w-full'></div>
            </div>

          </div>

          {/* likes & comments & gategories */}
          <div className='mt-3 md:flex md:justify-between md:items-center animate-pulse'>
            <div className='flex gap-4 md:order-2 md:mt-3'>
              {/* likes */}
              <div className="bg-slate-200 px-6 py-6 rounded-full"></div>
              {/* comments */}
              <div className="bg-slate-200 px-6 py-6 rounded-full"></div>
            </div>

            <div className='mt-3 flex items-center gap-5 md:order-1'>
              {/* bookmark */}
              <div className="bg-slate-200 px-6 py-6 rounded-full"></div>
              {/* Categories */}
              <div className='flex gap-2  '> 
                <div className="rounded-md  dark:border-[#1e293b] border w-24 bg-slate-200 px-16 py-3 h-fit"></div>
                <div className="rounded-md  dark:border-[#1e293b] border w-24 bg-slate-200 px-16 py-2"></div>
                <div className="rounded-md  dark:border-[#1e293b] border w-24 bg-slate-200 px-16 py-2"></div>
              </div>
            </div>
          </div>
      </div>
      <div className={`p-5 border-b dark:text-white dark:border-[#1e293b] md:relative bg-white dark:bg-[#0f172a]`}>
        {/* The autor */}
        <div className='flex items-center gap-3 mb-2 animate-pulse'>
            {/* IMAGE */}
          <div className='w-12 h-12 rounded-full bg-slate-200 '></div>
          <div className=' space-y-2'>
            {/* AUTHOR FULL NAME */}
            <div className="bg-slate-200 px-24 py-2 rounded-2xl"></div>
            {/* CREATED AT */}
            <div className='inline-block bg-slate-200 px-16 py-2 rounded-2xl' ></div>
          </div>
        </div>

        {/* Content */}
        <div className='md:flex'>
          <div className='md:w-2/3 md:pr-5 animate-pulse'>
            {/* Featured badge */}
          <div className='mb-2 md:absolute md:top-5 md:right-5'>
            <div  className="bg-slate-200 px-24 py-3 rounded-full md:bg-slate-200 dark:bg-[#064d3b] dark:border-[#1e293b] border w-fit pr-4"></div>
          </div>
          <div>
            {/* ARTICLE TITLE */}
            <div className='bg-slate-200 px-0 py-3 rounded-lg mb-2'></div>
            {/* Reading Time */}
            <div  className="bg-slate-200 px-12 py-2 rounded-lg w-fit mb-2"></div>
            {/* ARTICLE CONTENT */}
            <p className='bg-slate-200 px-2 py-2 rounded-lg mt-4'></p>
            <p className='bg-slate-200 px-2 py-2 rounded-lg mt-4'></p>
            <p className='bg-slate-200 px-2 py-2 rounded-lg mt-4'></p>
            <p className='bg-slate-200 px-2 py-2 rounded-lg mt-4'></p>
          
          </div>
          </div>
          
          <div className='ml-4 md:w-1/3 animate-pulse'>
            <div className='bg-slate-200 px-2 py-24 rounded-lg w-full'></div>
          </div>

        </div>

        {/* likes & comments & gategories */}
        <div className='mt-3 md:flex md:justify-between md:items-center animate-pulse'>
          <div className='flex gap-4 md:order-2 md:mt-3'>
            {/* likes */}
            <div className="bg-slate-200 px-6 py-6 rounded-full"></div>
            {/* comments */}
            <div className="bg-slate-200 px-6 py-6 rounded-full"></div>
          </div>

          <div className='mt-3 flex items-center gap-5 md:order-1'>
            {/* bookmark */}
            <div className="bg-slate-200 px-6 py-6 rounded-full"></div>
            {/* Categories */}
            <div className='flex gap-2  '> 
              <div className="rounded-md  dark:border-[#1e293b] border w-24 bg-slate-200 px-16 py-3 h-fit"></div>
              <div className="rounded-md  dark:border-[#1e293b] border w-24 bg-slate-200 px-16 py-2"></div>
              <div className="rounded-md  dark:border-[#1e293b] border w-24 bg-slate-200 px-16 py-2"></div>
            </div>
          </div>
        </div>
    </div>
    <div className={`p-5 border-b dark:text-white dark:border-[#1e293b] md:relative bg-white dark:bg-[#0f172a]`}>
        {/* The autor */}
        <div className='flex items-center gap-3 mb-2 animate-pulse'>
            {/* IMAGE */}
          <div className='w-12 h-12 rounded-full bg-slate-200 '></div>
          <div className=' space-y-2'>
            {/* AUTHOR FULL NAME */}
            <div className="bg-slate-200 px-24 py-2 rounded-2xl"></div>
            {/* CREATED AT */}
            <div className='inline-block bg-slate-200 px-16 py-2 rounded-2xl' ></div>
          </div>
        </div>

        {/* Content */}
        <div className='md:flex'>
          <div className='md:w-2/3 md:pr-5 animate-pulse'>
            {/* Featured badge */}
          <div className='mb-2 md:absolute md:top-5 md:right-5'>
            <div  className="bg-slate-200 px-24 py-3 rounded-full md:bg-slate-200 dark:bg-[#064d3b] dark:border-[#1e293b] border w-fit pr-4"></div>
          </div>
          <div>
            {/* ARTICLE TITLE */}
            <div className='bg-slate-200 px-0 py-3 rounded-lg mb-2'></div>
            {/* Reading Time */}
            <div  className="bg-slate-200 px-12 py-2 rounded-lg w-fit mb-2"></div>
            {/* ARTICLE CONTENT */}
            <p className='bg-slate-200 px-2 py-2 rounded-lg mt-4'></p>
            <p className='bg-slate-200 px-2 py-2 rounded-lg mt-4'></p>
            <p className='bg-slate-200 px-2 py-2 rounded-lg mt-4'></p>
            <p className='bg-slate-200 px-2 py-2 rounded-lg mt-4'></p>
          
          </div>
          </div>
          
          <div className='ml-4 md:w-1/3 animate-pulse'>
            <div className='bg-slate-200 px-2 py-24 rounded-lg w-full'></div>
          </div>

        </div>

        {/* likes & comments & gategories */}
        <div className='mt-3 md:flex md:justify-between md:items-center animate-pulse'>
          <div className='flex gap-4 md:order-2 md:mt-3'>
            {/* likes */}
            <div className="bg-slate-200 px-6 py-6 rounded-full"></div>
            {/* comments */}
            <div className="bg-slate-200 px-6 py-6 rounded-full"></div>
          </div>

          <div className='mt-3 flex items-center gap-5 md:order-1'>
            {/* bookmark */}
            <div className="bg-slate-200 px-6 py-6 rounded-full"></div>
            {/* Categories */}
            <div className='flex gap-2  '> 
              <div className="rounded-md  dark:border-[#1e293b] border w-24 bg-slate-200 px-16 py-3 h-fit"></div>
              <div className="rounded-md  dark:border-[#1e293b] border w-24 bg-slate-200 px-16 py-2"></div>
              <div className="rounded-md  dark:border-[#1e293b] border w-24 bg-slate-200 px-16 py-2"></div>
            </div>
          </div>
        </div>
    </div>
    <div className={`p-5 border-b dark:text-white dark:border-[#1e293b] md:relative bg-white dark:bg-[#0f172a]`}>
        {/* The autor */}
        <div className='flex items-center gap-3 mb-2 animate-pulse'>
            {/* IMAGE */}
          <div className='w-12 h-12 rounded-full bg-slate-200 '></div>
          <div className=' space-y-2'>
            {/* AUTHOR FULL NAME */}
            <div className="bg-slate-200 px-24 py-2 rounded-2xl"></div>
            {/* CREATED AT */}
            <div className='inline-block bg-slate-200 px-16 py-2 rounded-2xl' ></div>
          </div>
        </div>

        {/* Content */}
        <div className='md:flex'>
          <div className='md:w-2/3 md:pr-5 animate-pulse'>
            {/* Featured badge */}
          <div className='mb-2 md:absolute md:top-5 md:right-5'>
            <div  className="bg-slate-200 px-24 py-3 rounded-full md:bg-slate-200 dark:bg-[#064d3b] dark:border-[#1e293b] border w-fit pr-4"></div>
          </div>
          <div>
            {/* ARTICLE TITLE */}
            <div className='bg-slate-200 px-0 py-3 rounded-lg mb-2'></div>
            {/* Reading Time */}
            <div  className="bg-slate-200 px-12 py-2 rounded-lg w-fit mb-2"></div>
            {/* ARTICLE CONTENT */}
            <p className='bg-slate-200 px-2 py-2 rounded-lg mt-4'></p>
            <p className='bg-slate-200 px-2 py-2 rounded-lg mt-4'></p>
            <p className='bg-slate-200 px-2 py-2 rounded-lg mt-4'></p>
            <p className='bg-slate-200 px-2 py-2 rounded-lg mt-4'></p>
          
          </div>
          </div>
          
          <div className='ml-4 md:w-1/3 animate-pulse'>
            <div className='bg-slate-200 px-2 py-24 rounded-lg w-full'></div>
          </div>

        </div>

        {/* likes & comments & gategories */}
        <div className='mt-3 md:flex md:justify-between md:items-center animate-pulse'>
          <div className='flex gap-4 md:order-2 md:mt-3'>
            {/* likes */}
            <div className="bg-slate-200 px-6 py-6 rounded-full"></div>
            {/* comments */}
            <div className="bg-slate-200 px-6 py-6 rounded-full"></div>
          </div>

          <div className='mt-3 flex items-center gap-5 md:order-1'>
            {/* bookmark */}
            <div className="bg-slate-200 px-6 py-6 rounded-full"></div>
            {/* Categories */}
            <div className='flex gap-2  '> 
              <div className="rounded-md  dark:border-[#1e293b] border w-24 bg-slate-200 px-16 py-3 h-fit"></div>
              <div className="rounded-md  dark:border-[#1e293b] border w-24 bg-slate-200 px-16 py-2"></div>
              <div className="rounded-md  dark:border-[#1e293b] border w-24 bg-slate-200 px-16 py-2"></div>
            </div>
          </div>
        </div>
    </div>
  
    </>
  )
}

export default ArticleCardSkeltons