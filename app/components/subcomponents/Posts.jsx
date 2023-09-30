



import Image from 'next/image'
import Imageclient from './Imageclient'

const Post=()=>{
    return ( 
    <>
    <div className="flex shadow-lg px-2 py-2  rounded-xl gap-6 md:flex-row flex-col">
        
            <div className='flex relative h-[250px] w-[250px]'>
            <Image src="/post1.jpg" alt="post" fill={true}   className=' rounded-2xl object-cover' />
            </div>
            <div className="flex flex-col ">
              <div className="flex gap-6 mt-6 mr-3">
                    <div className="flex content-center items-center flex-col h-16 w-10 px-6 pt-4 pb-6 justify-center rounded-xl bg-[#67e8f9]">
                       <span className='font-medium text-sm text-blue-700	' >MAY</span>
                       <span className='text-blue-900 font-semibold text-xl tracking-wide' >08</span>
                    </div>
                        <div className='flex flex-col'>
                            <h3 className="text-xl text-stone-950 antialiased font-semibold  font-sans">Lorem ipsum dolor sit amet </h3>
                            <p className="text-base text-gray-400 antialiased line-clamp-1 font-normal font-sans">Lorem ipsum dolor sit eergerg</p>
                        </div>
                        <div className='flex items-start '>
                            <button className="   ">
                             <Image src="options.svg" alt="options" width={48} height={48} />
                            </button>
                        </div>
        
            </div>
            <div className='flex-none mt-6 divide-y-2 divide-dashed divide-gray-400'>
                <p className="text-sm text-gray-400 line-clamp-3 font-light">Lorem ipsum dolor sit amet consectetur </p>
            </div>
            <div className='mt-6'>
            <button className="flex  gap-3   p-2  ">
               <Image src="/avatar.jpg" alt="avatar" width={32} height={32} className='rounded-full  shadow-lg' />
               <div className='flex flex-col items-start'>
                   <span className="text-black font-semibold text-xs">Valentino del More</span>
                   <span className="text-gray-500 text-xs">Product Manager</span>
               </div>
              </button>
            </div>
            <div className='flex justify-end bottom-3'>
                <div className='flex flex-row gap-4'>
                    <div className='flex gap-1 items-center'>
                        <button>
                        <Image 
                        width="32" 
                        height="32" 
                        src="https://img.icons8.com/emoji/48/fire.png" 
                        alt="fire"/>
                            </button>
                        
                        <span className='font-medium'>12</span>
                    </div>
                    
                    <div className='flex gap-1 items-center'>
                        <button>
                            <Image src="share.svg" alt="share" width={24} height={24} className='w-6 h-6' />
                        </button>
                        
                        <span className='font-medium'>12</span>
                    </div>
                </div>
            </div>

           </div>
        
      
    


    </div>
    </>)
   
}

const Posts = () => {
  return (
    <div className="  gap-4 flex flex-col overflow-auto w-full ">
        <Post/>
        <Post/>
        <Post/>
       
      
    </div>
  )
}

export default Posts