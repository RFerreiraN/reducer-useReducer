import { useState } from 'react';
import { UseForm } from '../Hooks/UseForm';


export const FormularioComponent = () => {

  const { formState, handleInput } = UseForm({
    email: '',
    password: ''
  })

  const { email, password } = formState;

  const formSubmit = (event) => {
    event.preventDefault()
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
