 // estado inicial

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

  const agregarTarea = {
    type: '[TAREAS] Agregar Tarea',
    payload: nuevaTarea
  }

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
            return [...state,action.payload]
          
        case '[TAREAS] Modificar Tarea':
            return [...state, action.payload]
        case '[TAREAS] Eliminar Tarea':
            return []
        default:
          return state;
      }
  }

  console.log(tareaReducer(initialState, modificarTarea))






export const ListadoTareas = () => {
  return (
    <>
      <h1>reducer/useReducer</h1>
      <hr />
    </>
  )
}
