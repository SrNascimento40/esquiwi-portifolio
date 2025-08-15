
const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "TIA ESQUILO",
      description: "Atuando a 3 anos na recreação, é uma recreadora animada, extrovertida e brincalhona. Ela está sempre pensando em novas maneiras de entreter e garantir a segurança das crianças durante as atividades.",
      image: "👩‍🦱",
      backgroundColor: "#4169E1"
    },
    {
      name: "TIO KIWI",
      description: "Atuando a 3 anos na recreação com uma personalidade colorida e vibrante, assim como a própria fruta kiwi! Ele é amigável e sempre pronto para embarcar em aventuras com as crianças. Tio Kiwi é um mestre do lúdico! Constantemente inventando novas brincadeiras e atividades para divertir as crianças!",
      image: "👨‍🦱",
      backgroundColor: "#ADFF2F"
    }
  ];

  return (
    <section id="team" className="py-5" style={{ backgroundColor: '#4169E1' }}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: 'Fredoka' }}>
              NOSSOS
            </h2>
            <h3 className="display-5 fw-bold" style={{ fontFamily: 'Fredoka', color: '#ADFF2F' }}>
              RECREADORES
            </h3>
          </div>
        </div>
        
        <div className="row g-5">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-6">
              <div className="row align-items-center">
                <div className="col-md-5 text-center mb-4 mb-md-0">
                  <div 
                    className="team-image mx-auto d-flex align-items-center justify-content-center position-relative"
                    style={{ 
                      width: '250px', 
                      height: '250px', 
                      backgroundColor: member.backgroundColor,
                      borderRadius: '20px',
                      fontSize: '100px',
                      transform: 'rotate(-5deg)',
                      boxShadow: '0 15px 30px rgba(0,0,0,0.3)'
                    }}
                  >
                    {member.image}
                    <div 
                      className="position-absolute bottom-0 start-50 translate-middle-x"
                      style={{ 
                        backgroundColor: '#FFD700',
                        color: '#4169E1',
                        padding: '8px 20px',
                        borderRadius: '20px',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        fontFamily: 'Fredoka',
                        transform: 'translateY(50%)'
                      }}
                    >
                      {member.name}
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="team-content text-white">
                    <p className="lead" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
