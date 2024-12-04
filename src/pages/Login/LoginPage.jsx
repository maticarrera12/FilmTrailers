import { useState } from 'react';
import './Login.css'
import { login, signUp } from '../../firebase';
import netflix_spinner from "../../assets/netflix_spinner.gif"

const LoginPage = () => {


  const [signState, setSignState] = useState('Iniciar Sesion');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event)=>{
    event.preventDefault();
    setLoading(true);
    if(signState==='Iniciar Sesion'){
      await login(email, password)
    }else{
      await signUp(name,email,password)
    }
    setLoading(false)
  }



  return (
    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState==='Registrarse'?
          <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Tu nombre de usuario'/>:<></>}

          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='E-mail'/>

          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Contrasena'/>
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox"/>
              <label htmlFor="">Recordar Usuario</label>
            </div>
            <p>Necesitas ayuda?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==='Iniciar Sesion'?<p>Nuevo en Netflix? <span onClick={()=>{setSignState('Registrarse')}}>Registrarse ahora</span></p>
          :<p>Ya tienes una cuenta? <span onClick={()=>{setSignState('Iniciar Sesion')}}>Iniciar Sesion</span></p>
          }        
        </div>
      </div>
    </div>
  )
}

export default LoginPage
