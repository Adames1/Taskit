import { auth } from "../config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// crear usuario en firebase
export const registerFirebase = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// iniciar sesion con firebase
export const loginFirebase = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// terminar sesion
export const logoutFirebase = () => {
  return signOut(auth);
};
