import React, { useState } from 'react'
import "../App.css"

function Login() {
    const [mange, setMange] = useState(10);
    function changeMange (){setMange(mange+1)};

    function submit(e) {
        e.preventDefault()
        console.log(e.target.email.value);
    }
       

  return (
    <> 
    <div>Login</div>
    <button onClick={changeMange}>Click {mange}</button>

    <form onSubmit={submit} >
        <label htmlFor="email"> Email</label>
        <input type="email" id="email" name="email" placeholder='Email' /><br></br><br></br>
        <label htmlFor="password"> Mot de passe</label>
        <input type="password"  id="password" name="password" placeholder='Mot de passe' /><br></br>
        <button>Submit</button>
    </form>
    
    </>
    
  )
}

export default Login