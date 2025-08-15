
const Services: React.FC = () => {
  const services = [
    {
      title: "Festas de Aniversário",
      description: "Comemorações inesquecíveis com muita diversão e alegria",
      icon: "🎂",
      features: ["Recreação completa", "Atividades temáticas", "Brincadeiras educativas"]
    },
    {
      title: "Festas de Casamento",
      description: "Entretenimento especial para as crianças durante seu grande dia",
      icon: "💒",
      features: ["Espaço kids", "Atividades supervisionadas", "Diversão para toda família"]
    },
    {
      title: "Oficinas Recreativas",
      description: "Workshops criativos e educativos para desenvolvimento infantil",
      icon: "🎨",
      features: ["Atividades artísticas", "Jogos educativos", "Desenvolvimento criativo"]
    }
  ];

  return (
    <section id="services" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-4 fw-bold mb-3" style={{ fontFamily: 'Fredoka', color: '#4169E1' }}>
              Conheça alguns de nossos
            </h2>
            <h3 className="display-5 fw-bold" style={{ fontFamily: 'Fredoka', color: '#ADFF2F' }}>
              PACOTES
            </h3>
          </div>
        </div>
        
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-lg" style={{ borderRadius: '20px' }}>
                <div className="card-body text-center p-4">
                  <div 
                    className="service-icon mx-auto mb-3 d-flex align-items-center justify-content-center"
                    style={{ 
                      width: '80px', 
                      height: '80px', 
                      backgroundColor: '#ADFF2F',
                      borderRadius: '50%',
                      fontSize: '40px'
                    }}
                  >
                    {service.icon}
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#4169E1', fontFamily: 'Fredoka' }}>
                    {service.title}
                  </h4>
                  <p className="text-muted mb-4">
                    {service.description}
                  </p>
                  <ul className="list-unstyled">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="mb-2">
                        <span className="me-2" style={{ color: '#ADFF2F' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
