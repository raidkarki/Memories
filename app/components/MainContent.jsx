
import { Stories,Form,Navigator,Posts } from "./subcomponents"

const MainContent = () => {
  return (
    <section className="flex  flex-col w-full items-start content-center justify-center">
        
    <div className="px-14 mt-4">  
      <Stories />
        <Posts />
        </div>      
        
        
       
    </section>
  )
}

export default MainContent