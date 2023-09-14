import { useState } from "react"
import "./miOrg.css"

const MiOrg = (props) =>{

    //estado  - hooks
    //useState
    //useState()
    //conts[NombreVAriable,funcionActualiza]=useState("Valro inicial")

    // const [mostrar,actualizarMostrar] = useState(true)
    // const manejarEvento = () =>{
    // console.log("Mostra/ocultar",mostrar)
    // actualizarMostrar(!mostrar)//switch 
    // }

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="./img/add.png " alt="agregar" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg