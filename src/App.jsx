import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./context/AuthContext";
import TasksProvider from "./context/TasksContext";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <ToastContainer />
        <AppRoutes />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
