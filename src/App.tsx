import { useState } from "react"
import ContactForm from "./components/ContactForm"
import LogoImg from "./assets/image.png"
import Footer from "./components/Footer"
function App() {
  const [open, setOpen] = useState(false)
  return (
    <main className="bg-[#0f0f10] px-4 pt-16">
      <h1 className="font-jetbrains text-white text-center text-lg">
        AUTONOMOUS UNDERWATER VEHICLES
        <span className="px-1 bg-white/80 blink"></span>
      </h1>

      <div className="flex justify-center py-5">
        <img src={LogoImg} alt="logo" />
      </div>

      <div className="flex justify-center flex-wrap mt-10 gap-5">
        <button className="relative border-[1px] border-white text-white font-jetbrains uppercase px-3 py-1.5 group hover:text-black transition-all cursor-pointer" onClick={() => setOpen(true)}>
          <p className="relative z-10 flex gap-2 items-center">contact us

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-up-right-icon lucide-move-up-right group-hover:rotate-45 transition-all"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
          </p>


          <div className="w-0 h-full absolute top-0 left-0 bg-white group-hover:w-full transition-all">

          </div>
        </button>
        <button className="relative border-[1px] border-white text-white font-jetbrains uppercase px-3 py-1.5 group hover:text-black transition-all cursor-pointer">
          <p className="relative z-10 flex gap-2 items-center">Watch video

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-up-right-icon lucide-move-up-right group-hover:rotate-45 transition-all"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
          </p>


          <div className="w-0 h-full absolute top-0 left-0 bg-white group-hover:w-full transition-all">

          </div>
        </button>
        <button className="relative border-[1px] border-white text-white font-jetbrains uppercase px-3 py-1.5 group hover:text-black transition-all cursor-pointer">
          <p className="relative z-10 flex gap-2 items-center">join us

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-up-right-icon lucide-move-up-right group-hover:rotate-45 transition-all"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
          </p>


          <div className="w-0 h-full absolute top-0 left-0 bg-white group-hover:w-full transition-all">

          </div>
        </button>
      </div>

      {open && <ContactForm setOpen={setOpen} />}

      <Footer />
    </main>
  )
}

export default App