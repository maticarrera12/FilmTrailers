import {  Route, Routes, useNavigate } from "react-router-dom"
import HomePage from "./pages/Home/HomePage"
import LoginPage from "./pages/Login/LoginPage"
import PlayerPage from "./pages/Player/PlayerPage"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { auth } from "./firebase"
import { AuthProvider } from "./context/AuthContext.jsx"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  // const navigate = useNavigate();

  // useEffect(()=>{
  //   onAuthStateChanged(auth, async(user)=>{
  //     if(user){
  //       console.log('Sesion Iniciada')
  //       navigate('/')
  //     }else{
  //       console.log("Sesion cerrada");
  //       navigate('/login')
        
  //     }
  //   })
  // },[]);

  return (
    <AuthProvider>
        <ToastContainer theme="dark"/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/player/:id" element={<PlayerPage/>}/>
      </Routes>
      </AuthProvider>
  )
}

export default App