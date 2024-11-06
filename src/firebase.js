import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";  // Cambié addDoc por setDoc
import { getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyA8dpUCyuuBmWChmclBFTI6R9kYtEUJCN4",
  authDomain: "kepler-review.firebaseapp.com",
  projectId: "kepler-review",
  storageBucket: "kepler-review.firebasestorage.app",
  messagingSenderId: "948351475340",
  appId: "1:948351475340:web:1fa632a7e331684b00e5a9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Registro de usuario
const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Usamos setDoc para crear un documento con el UID del usuario
    await setDoc(doc(db, 'users', user.uid), {  // Guardamos el documento con el UID como el ID del documento
      name,  // Guardamos el nombre del usuario
      authProvider: 'local',
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
};

const logOut = () => {
  signOut(auth);
};

export { auth, db, login, signUp, logOut };
