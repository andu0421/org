import "./ListaOpciones.css"

const ListaOpciones = (props) =>{
    //Metodo map -> Arreglo.map((equipos,index) =>{
    //  return <option></option>
    //})
    //enterder como recorrer el arglo


    const manejarCambio = (e) =>{
        console.log("Cambio",e.target.value)
         props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">  
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            {props.equipos.map( (equipo,index) => {
                return <option key={index} value={equipo}>{equipo}</option>
            })}
        </select>
    </div>

    /*Otra opcion return <div className="lista-opciones">  
        <label>Equipos</label>
        <select>
            {equipos.map( (equipo,index) =><option key={index}>{equipo}</option>)}
        </select>
    </div>
    */
}

export default ListaOpciones