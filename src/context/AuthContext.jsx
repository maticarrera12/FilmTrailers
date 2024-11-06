import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';  // Asegúrate de que este archivo exporte tu configuración de Firebase
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';  // Asegúrate de importar db desde Firebase

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          const userRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userRef);
  
          if (userDoc.exists()) {
            const userData = userDoc.data();
            console.log("Firestore data:", userData);
  
            setUser({
              uid: user.uid,
              email: user.email,
              name: userData.name || 'Nombre no disponible',
            });
          } else {
            console.log("No se encontró el documento en Firestore");
            setUser({
              uid: user.uid,
              email: user.email,
              name: 'Nombre no disponible',
            });
          }
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error al obtener datos del usuario:", error);
      }
    });
  
    return () => unsubscribe();
  }, []);

  const logOut = async () => {
    try {
      await signOut(auth);
      console.log("Sesión cerrada correctamente");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
