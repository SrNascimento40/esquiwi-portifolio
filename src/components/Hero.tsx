
const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section" style={{ 
      background: 'linear-gradient(135deg, #4169E1 0%, #ADFF2F 100%)',
      minHeight: '100vh',
      paddingTop: '100px'
    }}>
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6">
            <div className="hero-content text-white">
              <h1 className="display-3 fw-bold mb-4" style={{ fontFamily: 'Fredoka' }}>
                ESQUIWI
              </h1>
              <h2 className="h3 mb-4" style={{ color: '#FFD700' }}>
                LAZER & RECREAÇÃO
              </h2>
              <p className="lead mb-5" style={{ fontSize: '1.2rem' }}>
                Tenha uma experiência <span className="fw-bold" style={{ color: '#ADFF2F' }}>inesquecível</span> com suas crianças! 
                Com criatividade, <span className="fw-bold" style={{ color: '#ADFF2F' }}>alegria e energia contagiante</span>, 
                transformamos cada evento em uma celebração memorável e cheia de 
                <span className="fw-bold" style={{ color: '#ADFF2F' }}> diversão!</span>
              </p>
              <div className="hero-buttons">
                <a 
                  href="#contact" 
                  className="btn btn-lg me-3 mb-3"
                  style={{ 
                    backgroundColor: '#FFD700',
                    color: '#4169E1',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '15px 40px',
                    fontWeight: 'bold',
                    fontSize: '1.1rem'
                  }}
                >
                  CHAME NO WHATSAPP
                </a>
                <a 
                  href="#services" 
                  className="btn btn-outline-light btn-lg mb-3"
                  style={{ 
                    borderRadius: '50px',
                    padding: '15px 40px',
                    fontWeight: 'bold'
                  }}
                >
                  Nossos Serviços
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-image text-center">
              <div 
                className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                style={{ 
                  width: '300px', 
                  height: '300px', 
                  backgroundColor: '#ADFF2F',
                  fontSize: '120px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                }}
              >
                🐿️🥝
              </div>
              <h3 className="text-white fw-bold" style={{ fontFamily: 'Fredoka' }}>
                Diversão Garantida!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
