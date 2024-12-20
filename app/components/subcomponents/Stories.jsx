import { stories,} from "@/public/utils/utils"
import  {AiOutlinePlus} from "react-icons/ai"

const Stories = () => {
  return (
    <div className=" my-4">
      <div className="flex flex-row gap-6">
        {
          stories.map((story,index) => (

            <div key={index} className="flex flex-col items-center justify-center ">
              <div className="relative drop-shadow-xl">
                <button className="rounded-full outline outline-offset-2 outline-2 outline-cyan-500">
                  <img src={story.img} alt={story.name} className="w-[50px] h-[50px] rounded-full object-cover overflow-hidden " />
                  </button>
                
                
                <div className="absolute bottom-0 right-0 bg-[#075985] rounded-full w-[15px] h-[15px] flex items-center justify-center">
                  <button>
                    <AiOutlinePlus className="text-[#5eead4] w-[10px] h-[10px] " />
                  </button>
                  
                </div>
              </div>
              <p className="text-xs font-medium">{story.name}</p>
            </div>


          ))

         
        }
      </div>

    </div>
  )
}

export default Stories