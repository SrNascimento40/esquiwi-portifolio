
const About: React.FC = () => {
  const features = [
    {
      title: "Experiência Inesquecível",
      description: "Tenha uma experiência inesquecível com suas crianças! Com criatividade, alegria e energia contagiante, transformamos cada evento em uma celebração memorável e cheia de diversão!",
      icon: "🎉"
    },
    {
      title: "Eventos Únicos",
      description: "Cada evento é único, por isso personalizamos o evento do seu jeito! Seja qual for o tema da festa ou as expectativas dos pais, estamos comprometidos em superá-las!",
      icon: "⭐"
    },
    {
      title: "Criatividade é Nossa Marca",
      description: "Na Esquiwi, a criatividade é nossa marca registrada. Sempre criando novas atividades e jogos para encantar as crianças.",
      icon: "🎨"
    }
  ];

  return (
    <section id="about" className="py-5" style={{ backgroundColor: '#ADFF2F' }}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-4 fw-bold mb-3" style={{ fontFamily: 'Fredoka', color: '#4169E1' }}>
              Por que escolher a
            </h2>
            <div className="d-flex align-items-center justify-content-center mb-4">
              <div 
                className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                style={{ 
                  width: '60px', 
                  height: '60px', 
                  backgroundColor: '#4169E1',
                  fontSize: '30px'
                }}
              >
                🐿️🥝
              </div>
              <h3 className="display-5 fw-bold mb-0" style={{ fontFamily: 'Fredoka', color: '#4169E1' }}>
                ESQUIWI
              </h3>
            </div>
            <h4 className="h5" style={{ color: '#4169E1' }}>
              LAZER & RECREAÇÃO
            </h4>
            <p className="lead mt-3" style={{ color: '#4169E1' }}>
              na sua festa?
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-4">
              <div className="text-center h-100">
                <div 
                  className="feature-icon mx-auto mb-3 d-flex align-items-center justify-content-center"
                  style={{ 
                    width: '80px', 
                    height: '80px', 
                    backgroundColor: '#4169E1',
                    borderRadius: '50%',
                    fontSize: '40px'
                  }}
                >
                  {feature.icon}
                </div>
                <h4 className="fw-bold mb-3" style={{ color: '#4169E1', fontFamily: 'Fredoka' }}>
                  {feature.title}
                </h4>
                <p className="lead" style={{ color: '#4169E1', fontSize: '1.1rem' }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h5 className="fw-bold mb-3" style={{ color: '#4169E1', fontSize: '1.3rem' }}>
              TODAS AS VANTAGENS
            </h5>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <span className="me-2" style={{ color: '#4169E1', fontSize: '20px' }}>✓</span>
                      <span style={{ color: '#4169E1', fontWeight: '500' }}>Crianças entretidas e felizes</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <span className="me-2" style={{ color: '#4169E1', fontSize: '20px' }}>✓</span>
                      <span style={{ color: '#4169E1', fontWeight: '500' }}>Mais tranquilidade para os pais</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <span className="me-2" style={{ color: '#4169E1', fontSize: '20px' }}>✓</span>
                      <span style={{ color: '#4169E1', fontWeight: '500' }}>Atividades com propósito</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <span className="me-2" style={{ color: '#4169E1', fontSize: '20px' }}>✓</span>
                      <span style={{ color: '#4169E1', fontWeight: '500' }}>Memórias afetivas para todos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
