import { useState } from 'react'
import '../css/formulario.css'
import { v4 as uuidv4 } from 'uuid'

function Formulario(props){

    const manejarEnvio = e => {
        e.preventDefault()
        
        const tareaNueva = {
            id : uuidv4(),
            texto : input,
            completada : false
        }
        props.onSubmit(tareaNueva);
    }
    const [input, setInput] = useState('')
    

    const manejarCambios = e =>{
        setInput(e.target.value)
    }

    return(
        <form action="" className="tarea-formulario" onSubmit={manejarEnvio}>
            <input type="text" className='tarea-input' placeholder='Escribe una tarea' name='texto'
                //onChange = evento "cuando ocurra un cambio"
                onChange={manejarCambios}
            />
            <button className='tarea-btn'>Agregar Tarea</button>
        </form>
    )
}

export default Formulario;