

import { BiChevronDown } from "react-icons/bi";
import { Navigator } from "./subcomponents";
import Image from "next/image";

const Navbar = () => {
    const status="authenticated"
  return (
    
       
        <div className="flex justify-between items-center px-4 mx-auto relative ">
        <div className="basis-1/4 ">
            <button>
                <Image src="menu.svg" alt="menu" width={24} height={24} className=" object-contain" />
            </button>


        </div>
        <div className="basis-2/4  flex  content-center justify-center   ">
            <div className="w-max">
                <Navigator></Navigator>
            </div>
            
        </div>
        
        <div className="flex basis-1/4 justify-end  gap-2">
            {status=="authenticated"?

                <div className="flex gap-4 items-center">
                <button className="relative">
                 <span class="absolute right-0 z-0 flex h-3 w-3">
                     <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                     <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                   </span>
                     <Image 
                    src="https://img.icons8.com/material-outlined/48/000000/appointment-reminders--v2.png" 
                    width={24} 
                    height={24} 
                    alt="notification"
                    className="object-contain z-10"
                    >
                        
                    </Image>
                    
                </button>
                <Image src="/avatar.jpg" alt="user" width={24} height={24} className="block  object-contain rounded-full " />
                <p className="text-sm font-medium">Hi, John Doe</p>
                <button className="rounded-full ">
                   <Image src="/down.svg" width={15} height={15} alt="menu" ></Image>
                </button>
                
                </div>:
                <div>
                    <button className="rounded-full bg-indigo-500 hover:bg-sky-700 text-white p-2 ">Login</button>
                </div>
            }
               
                
            


            



        </div>


    </div>
    
    
  )
}

export default Navbar