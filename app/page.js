import Navbar from "./components/Navbar"
import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar"
import LiveBar from "./components/LiveBar"



export default function Home() {
  return (
    <>
      <Navbar />
      <section className=" flex">
        <Sidebar />

        <MainContent/>
        <LiveBar/>


        
      </section>

    </>
    
  )
}
