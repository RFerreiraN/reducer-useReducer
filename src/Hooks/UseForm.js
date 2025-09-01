import { useState } from 'react'

export const UseForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm)
  
  const handleInput = ({ target }) => {
    const { value, name } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  return {
    ...formState,
    formState,
    handleInput,

  }
}
