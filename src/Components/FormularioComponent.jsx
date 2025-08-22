import { useState } from 'react';



export const FormularioComponent = () => {

  const [formState, setFormState] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formState;

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

  return (
    <form onSubmit={formSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          aria-describedby="emailHelp"
          value={email}
          onChange={handleInput}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={password}
          onChange={handleInput}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
