import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faShoppingCart, faBox, faChartBar, faFileAlt, faBars, faTimes, faRocket } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    { title: 'Financeiro', description: 'Controle financeiro integrado ao seu negócio.', icon: faDollarSign },
    { title: 'Vendas', description: 'Gerencie suas vendas de forma eficiente.', icon: faShoppingCart },
    { title: 'Estoque', description: 'Mantenha o controle do seu estoque em tempo real.', icon: faBox },
    { title: 'Relatórios', description: 'Emita relatórios detalhados e completos.', icon: faChartBar },
    { title: 'Documentos', description: 'Organize todos os seus documentos importantes.', icon: faFileAlt },
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
      <h1 className="logo">
  <FontAwesomeIcon icon={faRocket} style={{ marginRight: '10px', color: '#2563eb' }} />
  Pontal Sistemas
</h1>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" className="nav-link">Início</a></li>
            <li><a href="#features" className="nav-link">Recursos</a></li>
            <li><a href="#testimonials" className="nav-link">Depoimentos</a></li>
            <li><a href="#contact" className="nav-link">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
  <img src="/images/ImgHeader.png" className="imagem" />
  <div className="hero-content">
    <h2 className="hero-title">Equilíbrio ERP - Gestão Empresarial Inteligente</h2>
    <p className="hero-subtitle">Simplifique a administração da sua empresa com um ERP completo e eficiente.</p>
    <button className="hero-button">Saiba Mais</button>
  </div>
</section>
      {/* Features */}
      <section id="features" className="features">
        <h3 className="section-title">Recursos Principais</h3>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <FontAwesomeIcon icon={feature.icon} size="4x" />
              </div>
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
  <h3 className="section-title">Depoimentos</h3>
  <div className="testimonials-grid">
    
    <div className="testimonial-card">
      <div className="testimonial-avatar">
        <img src="/images/user.png" alt="João Silva" className="avatar-img" />
      </div>
      <div className="testimonial-stars">
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star-half-alt" />
      </div>
      <p className="testimonial-text">"Esse sistema revolucionou a forma como gerencio minha empresa!"</p>
      <p className="testimonial-author">— João Silva</p>
    </div>

    <div className="testimonial-card">
      <div className="testimonial-avatar">
        <img src="/images/user2.png" alt="Maria Souza" className="avatar-img" />
      </div>
      <div className="testimonial-stars">
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
      </div>
      <p className="testimonial-text">"Fácil de usar e com ótimos resultados. Recomendo!"</p>
      <p className="testimonial-author">— Maria Souza</p>
    </div>

    <div className="testimonial-card">
      <div className="testimonial-avatar">
        <img src="/images/user3.png" alt="Carlos Pereira" className="avatar-img" />
      </div>
      <div className="testimonial-stars">
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
      </div>
      <p className="testimonial-text">"Excelente suporte e integração perfeita. Muito satisfeito!"</p>
      <p className="testimonial-author">— Carlos Pereira</p>
    </div>

  </div>
</section>



      {/* Contact */}
      <section id="contact" className="contact">
        <h3 className="section-title">Entre em Contato</h3>
        <form className="contact-form">
          <input type="text" placeholder="Seu nome" className="contact-input" />
          <input type="email" placeholder="Seu e-mail" className="contact-input" />
          <textarea placeholder="Sua mensagem" className="contact-textarea"></textarea>
          <button type="button" className="contact-button" onClick={() => {
           const name = document.querySelector('.contact-form input[type="text"]').value;
           const email = document.querySelector('.contact-form input[type="email"]').value;
           const message = document.querySelector('.contact-form textarea').value;
           const whatsappMessage = `Olá, meu nome é ${name}. Meu e-mail é ${email}. Mensagem: ${message}`;
           const encodedMessage = encodeURIComponent(whatsappMessage);
           window.open(`https://wa.me/5562999057740?text=${encodedMessage}`, '_blank');
}}>
  Enviar
</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2025 Pontal Sistemas. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
