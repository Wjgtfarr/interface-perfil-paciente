import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../styles/visualizar-perfil.css';

export default function VisualizarPerfilPaciente() {
  const navigate = useNavigate();

  // Dados do paciente
  const pacienteData = {
    nome: 'Paciente',
    sobrenome: 'Silva',
    email: 'paciente.silva@gmail.com',
    cidade: 'Quixadá',
    telefone: '(85) 9 1234-5678',
    senha: '********', // Oculto por segurança
    biografia: 'Olá, sou o Paciente da Silva, e quero me alimentar saudável...',
  };

  const handleLogout = () => {
    alert('Sessão encerrada!');
    // navigate('/login');
  };

  return (
    <div className="layout-app">
      <Sidebar />

      <main className="main-content">
        <header className="page-header">
          <h1 className="page-title">Meu Perfil</h1>
        </header>

        <div className="view-profile-container">
          
          {/* Coluna da Esquerda: Avatar */}
          <aside className="view-profile-sidebar">
            <div className="view-avatar-card">
              <div className="avatar-circle large">P</div>
            </div>
          </aside>

          {/* Coluna da Direita: Dados e Botões */}
          <section className="view-profile-data">
            
            <div className="data-card">
              <h2><span className="material-symbols-outlined">person</span> Informações pessoais</h2>
              
              <div className="data-grid">
                <div className="data-item">
                  <span className="data-label">Nome</span>
                  <span className="data-value">{pacienteData.nome} {pacienteData.sobrenome}</span>
                </div>
                <div className="data-item">
                  <span className="data-label">E-mail</span>
                  <span className="data-value">{pacienteData.email}</span>
                </div>
                <div className="data-item">
                  <span className="data-label">Cidade</span>
                  <span className="data-value">{pacienteData.cidade}</span>
                </div>
                <div className="data-item">
                  <span className="data-label">Telefone</span>
                  <span className="data-value">{pacienteData.telefone}</span>
                </div>
                <div className="data-item">
                  <span className="data-label">Senha</span>
                  <span className="data-value">{pacienteData.senha}</span>
                </div>
              </div>
            </div>

            <div className="data-card mt-4">
              <h2><span className="material-symbols-outlined">description</span> Biografia</h2>
              <div className="data-item">
                <span className="data-label">Sobre mim</span>
                <p className="data-value biography-text">{pacienteData.biografia}</p>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="action-buttons-bottom">
              <button 
                className="btn-view-logout" 
                onClick={handleLogout}
              >
                sair
              </button>
              
              <button 
                className="btn-view-edit" 
                onClick={() => navigate('/editar-perfil')}
              >
                <span className="material-symbols-outlined">edit</span>
                Editar Perfil
              </button>
            </div>

          </section>

        </div>
      </main>
    </div>
  );
}