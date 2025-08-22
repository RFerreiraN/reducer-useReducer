import {useState} from 'react'

export const UseForm = () => {

  const [formState, setFormState] = useState({
    email: '',
    password: ''
  })


  const handleInput = ({ target }) => {
    const {value, name} = target
    setFormState({
      ...formState,
      [name] : value
    })
  }

  const resetForm = () => {
    setFormState({
      email: '',
      password: ''
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()
    if(formState.email.trim() === '' || formState.password.trim() === '') return
    console.log(formState)
    resetForm()
  }
  return {
      formState,
      handleInput,
      formSubmit,
      resetForm
  }
}
