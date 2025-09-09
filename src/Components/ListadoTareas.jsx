// estado inicial

import { useReducer } from "react";
import { UseForm } from "../Hooks/UseForm";

const initialState = [{
  id: new Date().getTime(),
  tarea: 'Tarea inicial',
  finalizada: false
}];

// estado modificado

const nuevaTarea = {
  id: new Date().getTime(),
  tarea: 'Agregar Tarea',
  finalizada: false
}

const updateTarea = {
  id: new Date().getTime(),
  tarea: 'Modificar Tarea',
  finalizada: false
}


//acciones



const modificarTarea = {
  type: '[TAREAS] Modificar Tarea',
  payload: updateTarea
}

const eliminarTarea = {
  type: '[TAREAS] Eliminar Tarea',
}

//Reducer
const tareaReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case '[TAREAS] Agregar Tarea':
      return [...state, action.payload]
    case '[TAREAS] Modificar Tarea':
      console.log('Modificar')
    case '[TAREAS] Eliminar Tarea':
      console.log('Borrar Todo')
      return []
    default:
      return state;
  }
}


export const ListadoTareas = () => {

  const [state, dispatch] = useReducer(tareaReducer, initialState)
  
  const { tarea, formState, handleInput } = UseForm({ tarea: '' });
  const agregarTarea = (event) => {
    event.preventDefault();
    if( formState.tarea.trim() == '') return
    const tarea = {
      id: new Date().getTime(),
      tarea: formState.tarea,
      finalizada: false
    }
    const action = {
      type : '[TAREAS] Agregar Tarea',
      payload : tarea
    }
    console.log(formState)
    dispatch( action )
  }

  return (
    <>
      <h1>reducer/useReducer</h1>
      <hr />
      <form onSubmit={agregarTarea}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese Tarea"
            name="tarea"
            value={tarea}
            onChange={handleInput}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <hr />
      <ul>
        {state.map(item => {
          return (
            <li key={item.id}>
              {item.tarea}
              {item.finalizada ? '✅' : '⛔'}
              </li>
          )
        })}
      </ul>
    </>
  )
}
