
const Contact: React.FC = () => {
  const whatsappNumber = "5512999999999"; // Replace with actual WhatsApp number
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços da Esquiwi Lazer & Recreação!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const weddingServices = [
    "Estação de jogos",
    "Brincadeiras",
    "Pintura Facial",
    "Oficinas Artísticas"
  ];

  return (
    <section id="contact" className="py-5" style={{ backgroundColor: '#4169E1' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="contact-content text-white">
              <h2 className="display-4 fw-bold mb-4" style={{ fontFamily: 'Fredoka' }}>
                Entre em Contato!
              </h2>
              
              <div className="mb-5">
                <h3 className="h4 fw-bold mb-3" style={{ color: '#ADFF2F' }}>
                  Eventos com Recreação?
                </h3>
                <p className="lead mb-4">
                  Criamos um espaço acolhedor, tornamos os pequenos parte da festa!
                </p>
                
                <div className="wedding-services">
                  <h5 className="fw-bold mb-3" style={{ color: '#FFD700' }}>
                    PACOTES INCLUEM:
                  </h5>
                  <div className="row g-2">
                    {weddingServices.map((service, index) => (
                      <div key={index} className="col-md-6">
                        <div className="d-flex align-items-center">
                          <span className="me-2" style={{ color: '#ADFF2F' }}>🐿️</span>
                          <span>{service}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="location-info mb-4">
                <div className="d-flex align-items-center mb-2">
                  <span className="me-2" style={{ fontSize: '24px' }}>📍</span>
                  <h5 className="mb-0 fw-bold">Taubaté-SP</h5>
                </div>
                <p className="mb-0">Atendemos toda a região do Vale do Paraíba</p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="contact-card text-center">
              <div 
                className="card border-0 shadow-lg mx-auto"
                style={{ 
                  borderRadius: '30px',
                  maxWidth: '400px',
                  backgroundColor: '#ADFF2F'
                }}
              >
                <div className="card-body p-5">
                  <div 
                    className="contact-icon mx-auto mb-4 d-flex align-items-center justify-content-center"
                    style={{ 
                      width: '100px', 
                      height: '100px', 
                      backgroundColor: '#4169E1',
                      borderRadius: '50%',
                      fontSize: '50px'
                    }}
                  >
                    🐿️🥝
                  </div>
                  
                  <h3 className="fw-bold mb-3" style={{ color: '#4169E1', fontFamily: 'Fredoka' }}>
                    Gostou?
                  </h3>
                  <h4 className="fw-bold mb-4" style={{ color: '#4169E1', fontFamily: 'Fredoka' }}>
                    Mande um DM!
                  </h4>
                  
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg w-100 mb-3"
                    style={{ 
                      backgroundColor: '#FFD700',
                      color: '#4169E1',
                      border: 'none',
                      borderRadius: '50px',
                      padding: '15px',
                      fontWeight: 'bold',
                      fontSize: '1.2rem'
                    }}
                  >
                    📱 CHAME NO WHATSAPP
                  </a>
                  
                  <p className="small mb-0" style={{ color: '#4169E1' }}>
                    Resposta rápida garantida!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
