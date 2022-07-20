import { useQuery } from "@apollo/client"
import { Header } from "./Header"
import { Status } from "./Status"
import SERVICE_STATUS from "./querys/index.js"
import React, { useState, useEffect } from 'react'
import { ReactDOM } from "react"
function App() {

  interface IProducts {
    id: number;
    title: string;
    Status: object;
}
const [state, setState] = useState<IProducts[]>([])


function getquery () {
const { loading, error, data } = useQuery(SERVICE_STATUS,
  {onCompleted: () =>{setState(data.alterdata_Services)}})


if (loading) return null
if (error) return `Error! ${error}`
 


return (
  
  data.alterdata_Services.map(data => {
    return (
     <Status service={data.serviceName} status={data.state} key={data.id}/>
    )
  })
)
}

return(
  <div>
    <Header/>
    <div className="flex items-center justify-center">
    <div className="bg-define-black w-[30rem]  flex justify-center flex-col items-center rounded-md pb-2">
            
            <header className="text-white mt-4 mb- border-b-2 border-zinc-500">Status de Serviço</header>
            
            <div className="mt-10">
            {getquery()}

           
            </div>
            
        </div>
    </div>
    <section className="flex flex-col justify-center items-center mt-24 text-gray-200">
    <h2>Está com problemas ?</h2>
    <p>Acesse o Karoo</p>
    <a href="https://www.karoo.com.br/chat/#/entrada?conta=136" className="mt-10 mb-2 border-2 border-emerald-900 bg-emerald-900 rounded-md h-12 w-32 flex justify-center items-center text-xl hover:bg-theGreen  transition duration-300" title="Acessar Karoo">Acessar</a>
    </section>
    <footer className="text-gray-400 text-xs mt-2">By INFRA</footer>
    </div>
    
  )
}

export default App
