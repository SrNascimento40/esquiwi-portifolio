import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: '#4169E1' }}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <div 
            className="rounded-circle me-3 d-flex align-items-center justify-content-center"
            style={{ 
              width: '50px', 
              height: '50px', 
              backgroundColor: '#ADFF2F',
              fontSize: '24px'
            }}
          >
            🐿️🥝
          </div>
          <div>
            <h4 className="mb-0 text-white fw-bold" style={{ fontFamily: 'Fredoka' }}>
              ESQUIWI
            </h4>
            <small className="text-light">LAZER & RECREAÇÃO</small>
          </div>
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          style={{ borderColor: '#ADFF2F' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold" href="#home">Início</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold" href="#services">Serviços</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold" href="#team">Equipe</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold" href="#about">Sobre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold" href="#contact">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
