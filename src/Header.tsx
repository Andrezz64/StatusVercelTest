import { Heartbeat } from "phosphor-react"
export function Header() {
   return(
      <header 
      className="bg-define-black text-white text-center h-10 flex items-center justify-center flex-row mb-20 ">
       Alterdata <p className="ml-2 text-orange-500"> ServiceStatus <Heartbeat size={25} className="inline text-green-400 mb-0.5"/></p>
      </header>
   ) 
}