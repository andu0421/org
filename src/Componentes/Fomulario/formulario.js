import { useState } from "react";
import "./formulario.css"
import Campo from '../CampoTexto/CampoTexto';
import ListaOpciones from "../ListaOpciones/index";
import Botom from "../Botom";
const Formulario = (props) => {
    //para que no se recargue la pagina

    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const [equipo,actualizarEquipo] = useState("")
   
    const [titulo, actualiarTitulo] = useState("")
    const [color,actualizarColor] = useState("")

    const {registarColaborador,crearEquipo} = props
      

    const manejaEnvio = (e) =>{
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre: nombre ,
            puesto: puesto,
            foto: foto,
            equipo
        } 
        registarColaborador(datosAEnviar)
    }   

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejaEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2> 
            <Campo 
                titulo='Nombre' 
                placeholder='Ingrese su nombre' 
                required={true} 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />
            <Campo
                titulo='Puesto' 
                placeholder='Ingrese su puesto' 
                required
                valor={puesto} 
                actualizarValor={actualizarPuesto}
                />
            <Campo
                titulo='foto'   
                placeholder='Ingrese enlace de foto' 
                required
                valor={foto} 
                actualizarValor={actualizarFoto}
                />
            <ListaOpciones 
                valor={equipo} 
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            /> 
            <Botom>
                Crear
            </Botom>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el Equipo.</h2> 
            <Campo
                titulo='titulo' 
                placeholder='Ingrese titulo' 
                required={true} 
                valor={titulo} 
                actualizarValor={actualiarTitulo}
            />
            <Campo
                titulo='Color' 
                placeholder='Ingresar el color en Hex' 
                required
                valor={color} 
                actualizarValor={actualizarColor}
                type="color"
                />
              <Botom>
                Registrar Equipo
            </Botom>   
        </form>
    </section>
}

export default Formulario
