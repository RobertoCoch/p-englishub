import React, { useState } from 'react'
import { HomeA } from '../Home/HomeA';

export const LoginA = () => {

  const [matricula, setMatricula] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [loginSuccesful, setLoginSuccesful] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handdleLogin = (e) => {
    e.preventDefault();
    const data = {
      matricula: matricula,
      contraseña: contraseña
    };
    console.log(data);

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'

      },
      body: JSON.stringify(data)
    })

      .then(response => response.json())
      .then(result => {
        if (result.token) {
          localStorage.setItem('token', result.token)
          setLoginSuccesful(true);
        }else {
          setLoginSuccesful(false);
          setErrorMessage('Usuario o contraseña incorrectos');
        }
      })
      .catch(error => {
        console.log(error)
        setErrorMessage('Error en el servidor');
      })

  }
  return (
    <>{loginSuccesful ? <HomeA /> : 
    <div className='login'>
      <div className='head-form'>
        {/*<button><img className="w-10 h-10" src="/src/assets/images/backreturn.png" alt="" /></button>*/}
        <h2 className="tittle-form">Acceso</h2>
      </div>
      <div className='container-form'>
          <form className='form-style'>
              <h2 className='text-alumno'>Alumno</h2>
              {errorMessage && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
                {errorMessage}
                </div>
              )}
              <input placeholder='Matricula *' onChange={(event) => {setMatricula(event.target.value)}} className='input-form' type="text" />
              <input placeholder='Contraseña *' onChange={(event) => {setContraseña(event.target.value)}} className='input-form' type="password" />
              <div className='10/10 flex flex-row gap-5'>
                <button className=' text-white w-20 h-10 bg-[#0B1138] rounded-lg hover:bg-[#3E55DA]'>Alumno</button>
                <button className=' text-white w-20 h-10 bg-[#0B1138] rounded-lg hover:bg-[#3E55DA]'>Maestro</button>
                <button className=' text-white w-20 h-10 bg-[#0B1138] rounded-lg hover:bg-[#3E55DA]'>Admin</button>
              </div>
              <button onClick={handdleLogin} className='button-form'>Iniciar Sesión</button>
          </form>      
      </div>
      
    </div>}</>
    
  )
}
