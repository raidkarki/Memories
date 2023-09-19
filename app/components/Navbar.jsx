'use client'
import { useSession } from "next-auth/react";
import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
    const status="authenticated"
  return (
    <div className="flex justify-between p-4 mx-auto relative ">
        <div className="">
            <button>
                <img src="menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain" />
            </button>


        </div>
        <div>
            <h1>memories</h1>
        </div>
        <div className="flex gap-2">
            {status=="authenticated"?

                <div className="flex gap-4 items-center">
                <img src="./avatar.jpg" alt="user" className="block w-[24px] h-[24px] object-contain rounded-full " />
                <p className="text-sm font-medium">Hi, John Doe</p>
                <button className="rounded-full ">
                   <BiChevronDown/>
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