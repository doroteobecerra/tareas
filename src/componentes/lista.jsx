import { useState } from 'react';
import '../css/lista.css'
import Formulario from "./formulario";
import Tarea from './tarea';

function Lista(){
    const [tareas, setTarea] = useState([])
    const addTarea = tarea => {
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim()
            const tareasActualizadas = [tarea, ...tareas]
            setTarea(tareasActualizadas)
        }else{
            alert("ingresa una tarea")
        }
    }

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
        setTarea(tareasActualizadas)
    }

    const tareaCompletada = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if(tarea.id === id){
                tarea.completada = !tarea.completada
            }
            return tarea
        })
        setTarea(tareasActualizadas)
    }

    return(
        //<> son etiquetas vacias en caso de no querer agregar una etiqueta padre
        <>
            <Formulario onSubmit={addTarea} />
            <div className="lista-contenedor">
                {
                    tareas.map( (tarea) => <Tarea 
                        key={tarea.id}
                        id={tarea.id}
                        texto={tarea.texto} 
                        completada = {tarea.completada}
                        completarTarea = {tareaCompletada}
                        eliminarTarea = {eliminarTarea}/> )
                }
            </div>
        </>
    )
}

export default Lista;
