import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "5512999999999"; // Replace with actual WhatsApp number
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços da Esquiwi!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="py-5" style={{ backgroundColor: '#2c3e50' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="d-flex align-items-center mb-3">
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
                <h5 className="mb-0 text-white fw-bold" style={{ fontFamily: 'Fredoka' }}>
                  ESQUIWI
                </h5>
                <small className="text-light">LAZER & RECREAÇÃO</small>
              </div>
            </div>
            <p className="text-light mb-3">
              Transformando eventos em momentos inesquecíveis com muita diversão, 
              criatividade e alegria para toda a família.
            </p>
            <div className="d-flex align-items-center text-light">
              <span className="me-2">📍</span>
              <span>Taubaté-SP e região</span>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-white fw-bold mb-3">Nossos Serviços</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#services" className="text-light text-decoration-none">
                  🎂 Festas de Aniversário
                </a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-light text-decoration-none">
                  💒 Festas de Casamento
                </a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-light text-decoration-none">
                  🎨 Oficinas Recreativas
                </a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-light text-decoration-none">
                  🎪 Eventos Corporativos
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-white fw-bold mb-3">Links Rápidos</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className="text-light text-decoration-none">Início</a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-light text-decoration-none">Serviços</a>
              </li>
              <li className="mb-2">
                <a href="#team" className="text-light text-decoration-none">Equipe</a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-light text-decoration-none">Sobre</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-light text-decoration-none">Contato</a>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-3">
            <h6 className="text-white fw-bold mb-3">Entre em Contato</h6>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg w-100 mb-3"
              style={{ 
                backgroundColor: '#25D366',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                padding: '12px',
                fontWeight: 'bold'
              }}
            >
              📱 WhatsApp
            </a>
            <p className="text-light small mb-0">
              Resposta rápida garantida! Estamos prontos para tornar seu evento inesquecível.
            </p>
          </div>
        </div>
        
        <hr className="my-4" style={{ borderColor: '#4169E1' }} />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-light mb-0">
              © {currentYear} Esquiwi Lazer & Recreação. Todos os direitos reservados.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="text-light mb-0">
              Feito com ❤️ para levar alegria às famílias
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
