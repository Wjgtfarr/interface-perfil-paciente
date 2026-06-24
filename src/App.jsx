import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import EditarPerfilPaciente from './pages/EditarPerfilPaciente';
import VisualizarPerfilPaciente from './pages/VisualizarPerfilPaciente';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redireciona a raiz para a visualização */}
        <Route path="/" element={<Navigate to="/perfil" replace />} />
        
        {/* Novas rotas */}
        <Route path="/perfil" element={<VisualizarPerfilPaciente />} />
        <Route path="/editar-perfil" element={<EditarPerfilPaciente />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;