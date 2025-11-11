import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TaskManager from "./pages/TaskManager";
import { useAuth } from "./hooks/useAuth";
import Home from './pages/Home';

function App() {
  const user = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tasks" element={user ? <TaskManager /> : <Navigate to="/login" />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;