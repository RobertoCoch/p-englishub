import { LoginA } from '../Login/LoginA';
import { AppRouter } from '../../router/AppRouter';



function parseJwt (token) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
      
        return JSON.parse(jsonPayload);
  }

const token = localStorage.getItem('token');
let tokenExistAndStillValid = false;

if (token) {
  try {
    tokenExistAndStillValid = parseJwt(token).exp * 1000 > Date.now();
  } catch (error) {
    console.error("Error al parsear el token: ", error);
    tokenExistAndStillValid = false;
  }
}




export const Main = () => {
  return (
     <>
       {tokenExistAndStillValid ? <AppRouter /> : <LoginA />}
     </>
  )
}
