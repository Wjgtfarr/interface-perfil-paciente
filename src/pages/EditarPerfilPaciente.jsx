import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProfilePatientHeader from '../components/ProfilePatientHeader';
import ProfilePatientForm from '../components/ProfilePatientForm';
import '../styles/editar-perfil.css';

export default function EditarPerfil() {
  /* Inicializando o estado para o perfil do Paciente */
  const [formData, setFormData] = useState({
    nome: 'Paciente',
    sobrenome: 'Silva',
    email: 'paciente.silva@gmail.com',
    cidade: 'Quixadá',
    telefone: '(85) 9 1234-5678',
    sobreMim: 'Olá, sou o Paciente da Silva, e quero me alimentar saudável...'
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === 'telefone') {
      value = value.replace(/\D/g, ''); 
      if (value.length > 11) value = value.slice(0, 11); 

      if (value.length > 6) {
        value = value.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4');
      } else if (value.length > 2) {
        value = value.replace(/(\d{2})(\d{0,9})/, '($1) $2');
      }
    }

    if (name === 'sobreMim') {
      const MAX_LENGTH = 300; 
      if (value.length > MAX_LENGTH) {
        value = value.slice(0, MAX_LENGTH); 
      }
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Alterações salvas com sucesso!');
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="main-content">
        <h1 className="page-title">Editar Perfil</h1>
        <p className="page-subtitle">Atualize suas informações pessoais</p>

        <div className="profile-layout">
          {/* Componente renomeado */}
          <div className="card-box">
            <ProfilePatientHeader nome={formData.nome} />
          </div>

          {/* Componente renomeado */}
          <ProfilePatientForm 
            formData={formData} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
          />
        </div>
      </main>
    </div>
  );
}