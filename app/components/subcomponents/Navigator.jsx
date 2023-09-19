
import { navbuttons } from "@/public/utils/utils"
const Navigator = () => {

    const isactive="bg-[#075985] hover:bg-sky-700 text-[#5eead4] "
    const isinactive=" text-[#64748b] "
  return (
    <div className=" w-auto  px-6 py-4 content-center bg-[#f0fdfa] rounded-b-xl justify-center ">
        <div className="flex  flex-row space-x-4 justify-center ">
             {navbuttons.map((navbutton,index) => (
           
            <button key={index} className={`w-[35px] h-[35px]   flex  content-center justify-center items-center rounded-md ${navbutton.name=="Home"?isactive:isinactive}  `}>{navbutton.icon}</button>
           
            
        ))}
        </div>
       

    </div>
  )
}

export default Navigator