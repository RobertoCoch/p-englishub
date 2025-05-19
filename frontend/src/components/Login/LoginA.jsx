import React, { useState } from 'react'

export const LoginA = () => {
  const [matricula, setMatricula] = useState('');
  const [contraseña, setContraseña] = useState('');
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
            localStorage.setItem('token', result.token);
            localStorage.setItem('matricula', matricula);
            localStorage.setItem('tipo', result.tipo)
            switch (result.tipo) {
              case 'alumno':
                window.location.href = '/'; // o '/inicio-alumno' si lo manejas así
                break;
              case 'maestro':
                window.location.href = '/maestro';
                break;
              case 'admin':
                window.location.href = '/admin';
                break;
              default:
                setErrorMessage('Tipo de usuario desconocido');
            }
        }else {
          setErrorMessage('Usuario o contraseña incorrectos');
        }
      })
      .catch(error => {
        console.log(error)
        setErrorMessage('Error en el servidor');
      })

  }
  return (
    <>
    <div className='login'>
      <div className='head-form'>
        {/*<button><img className="w-10 h-10" src="/src/assets/images/backreturn.png" alt="" /></button>*/}
        <h2 className="tittle-form">Acceso</h2>
      </div>
      <div className='container-form'>
          <form className='form-style'>
              <h2 className='text-alumno'>Inicio</h2>
              {errorMessage && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
                {errorMessage}
                </div>
              )}
              <input placeholder='Matricula *' onChange={(event) => {setMatricula(event.target.value)}} className='input-form' type="text" />
              <input placeholder='Contraseña *' onChange={(event) => {setContraseña(event.target.value)}} className='input-form' type="password" />
              <button onClick={handdleLogin} className='button-form'>Iniciar Sesión</button>
          </form>      
      </div>
      
    </div></>
    
  )
}
