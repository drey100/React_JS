import React, { useState } from 'react'

function Register() {
    function submit(e) {
        e.preventDefault()
        console.log(e.target.email.value)
        
    }
  return (
    <>
    <div>Register</div>
    <form onSubmit={submit} >
        <label htmlFor="email"> Email</label>
        <input type="email" id="email" placeholder='Email' /><br></br><br></br>
        <label htmlFor="password"> Mot de passe</label>
        <input type="password"  id="password" placeholder='Mot de passe' /><br></br>
        <button >Submit</button>
    </form>
    <br></br>
   
    </>
  )
}

export default Register