import { db } from "../config";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// agregar nueva tarea
export const createTask = async (userId, taskname) => {
  if (!userId) throw new Error("Usuario no autenticado");

  const tasksRef = collection(db, "profiles", userId, "tasks");

  const docRef = await addDoc(tasksRef, {
    taskname: taskname,
    completed: false,
    creaatedAt: serverTimestamp(),
  });

  return docRef.id;
};

// obtener tareas por usuario
export const getTasksByUser = (userId, setTasks, setLoading) => {
  if (!userId) throw new Error("Usuario no autenticado");

  const collectionRef = collection(db, "profiles", userId, "tasks");

  const unsub = onSnapshot(collectionRef, (snapshot) => {
    const tasksData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setTasks(tasksData);
    setLoading(false);
  });

  return unsub;
};

// marcar completar una tarea
export const markCompletedTask = async (userId, taskId, status) => {
  if (!userId) throw new Error("Usuario no autenticado");

  const taskRef = doc(db, "profiles", userId, "tasks", taskId);

  await updateDoc(taskRef, { completed: status });
};

// eliminar tarea
export const deleteTask = async (userId, taskId) => {
  if (!userId) throw new Error("Usuario no autenticado");

  const taskRef = doc(db, "profiles", userId, "tasks", taskId);

  await deleteDoc(taskRef);
};
