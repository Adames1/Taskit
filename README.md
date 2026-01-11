# Taskit ✅

Taskit es una aplicación web de gestión de tareas enfocada en la simplicidad y en una arquitectura clara.  
Permite a los usuarios registrarse, iniciar sesión y gestionar sus tareas de forma persistente y en tiempo real.

Este proyecto fue desarrollado como parte de mi portafolio personal para practicar y consolidar conocimientos en React y Firebase.

---

## 🚀 Características

- Autenticación de usuarios con Firebase Auth
- Creación y persistencia de perfiles de usuario en Firestore
- Gestión de tareas por usuario:
  - Crear tareas
  - Marcar tareas como completadas
  - Eliminar tareas
- Actualización en tiempo real con `onSnapshot`
- Arquitectura basada en Context API
- Layout principal y estados de carga (loading)
- Rutas protegidas

---

## 🧩 Arquitectura

La aplicación está dividida en contextos con responsabilidades claras:

- **AuthContext**

  - Manejo de autenticación
  - Estado del usuario
  - Lectura del perfil desde Firestore

- **TasksContext**
  - Obtención de tareas del usuario autenticado
  - Suscripción en tiempo real a Firestore
  - Estado global de las tareas

Cada usuario tiene su propio espacio de datos en Firestore utilizando subcolecciones.

---

## 🛠️ Tecnologías utilizadas

- React
- React Router
- Context API
- Firebase Authentication
- Cloud Firestore
- Tailwind CSS
- React Hook Form
- Zod

---

## 🎯 Estado del proyecto

Taskit se encuentra en una primera versión funcional (MVP).  
Algunas mejoras y features adicionales están planificadas para futuras iteraciones.

---

## 📌 Autor

Desarrollado por **Argenis Adames**
