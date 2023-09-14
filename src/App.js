import { useState} from 'react';
import{v4 as uuidv4} from 'uuid';
import './App.css';
import Header from './Componentes/header/Header';
import Formulario from './Componentes/Fomulario/formulario';
import MiOrg from './Componentes/MiOrg/MiOrg';
import Equipo from './Componentes/Equipo';
import Footer from './Componentes/Footer';
console.log(Header)
function App() {
  const [mostrarFormulario,actualizarMostrar]=useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuidv4(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav:true
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav:true
    },

    {
      id: uuidv4(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav:true
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav:true
    },
    {
      id: uuidv4(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav:true
    }
    
  ])
const [equipos,actualizarEquipos]=useState([
  
  {
    id: uuidv4(),
    titulo:"Programación",
    colorPrimario: "#57C278",
    colorSegundario: "#D9F7E9" 
  },
  {
    id: uuidv4(),
    titulo: "Front End",
    colorPrimario: "#82CFFA",
    colorSegundario: "#E8F8FF" 
  },
  {
    id: uuidv4(),
    titulo:"Data Science",
    colorPrimario: "#A6D157",
    colorSegundario: "#F0F8E2" 
  },
  {
    id: uuidv4(),
    titulo:"Devops",
    colorPrimario: "#E06B69",
    colorSegundario: "#FDE7E8" 
  },
  {
    id: uuidv4(),
    titulo:"UX y Diseño",
    colorPrimario: "#DB6EBF",
    colorSegundario: "#FAE9F5" 
  },
  {
    id: uuidv4(),
    titulo:"Móvil",
    colorPrimario: "#FFBA05",
    colorSegundario: "#FFF5D9" 
  },
  {
    id: uuidv4(),
    titulo:"Innovación y Gestión",
    colorPrimario: "#FF8A29",
    colorSegundario: "#FFEEDF" 
  }
])

  //ternario --> condicion ? semuestra : nosemuestra
  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador

  const registarColaborador= (colaborador) => {
    console.log("Nuevo colaborador",colaborador)
    //spread operator copia
    actualizarColaboradores([...colaboradores, colaborador])
  }

  // actualizar color de equipo

  const actualizarColor = (color,id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo 
    })
    actualizarEquipos(equiposActualizados)
  }

  //eliminar colaborador

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador)=> colaborador.id !== id) 
    actualizarColaboradores(nuevosColaboradores); 
  }

  //Crear Equipo
    const crearEquipo = (nuevoEquipo) => {
      console.log(nuevoEquipo)
      actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuidv4()}])
    }

    const like = (id) => {
       const colaboradoresActualizados = colaboradores.map((colaborador) => {
          if (colaborador.id === id) {
            colaborador.fav = !colaborador.fav
          }
          return colaborador
       })

      actualizarColaboradores(colaboradoresActualizados)
    }

  
  return (
    <div>
      <Header />
      {
       mostrarFormulario && <Formulario 
      equipos={equipos.map((equipo)=>equipo.titulo)} 
      registarColaborador={registarColaborador}
      crearEquipo={crearEquipo}
      />
      }
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map((equipo) =>
        <Equipo 
        datos={equipo}  
        key={equipo.titulo}
        colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        /> )
      }
      <Footer />
 </div>
  );
}

export default App;
