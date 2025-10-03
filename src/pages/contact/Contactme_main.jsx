import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus('sending');
  
  try {
    const serviceID = 'service_82z96es'; 
    const templateID = 'template_vi3k8nn'; 
    const userID = 'yng3_y3anmGYgg77Q';

    // Add current date and time
    const currentDate = new Date().toLocaleString('en-PH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    // Send email using EmailJS
    await emailjs.send(serviceID, templateID, {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      date: currentDate, // Add this line
      to_name: 'Jose Vicent Pelaje',
      reply_to: formData.email
    }, userID);

    setIsSubmitting(false);
    setSubmitStatus('success');
    setSubmitMessage('Thank you! Your message has been sent successfully. I will get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset status after 8 seconds
    setTimeout(() => {
      setSubmitStatus(null);
      setSubmitMessage('');
    }, 8000);
    
  } catch (error) {
    console.error('Error sending email:', error);
    setIsSubmitting(false);
    setSubmitStatus('error');
    setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact me directly via email.');
    
    // Reset status after 8 seconds
    setTimeout(() => {
      setSubmitStatus(null);
      setSubmitMessage('');
    }, 8000);
  }
};

  // Real contact information - UPDATE THESE WITH YOUR ACTUAL DETAILS
  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'josevincentpelaje9@gmail.com', 
      link: 'mailto:josevincentpelaje9@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+63 909 664 9591', 
      link: 'tel:+639123456789'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Northern Bukidnon, Philippines',
      link: 'https://maps.app.goo.gl/Pc3rhGedK6eCEjybA'
    },
  ];

  // Real social links - UPDATE THESE WITH YOUR ACTUAL PROFILES
  const socialLinks = [
    {
      icon: 'fab fa-linkedin-in',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jose-vincent-pelaje-36a759363/',
      color: '#0077b5'
    },
    {
      icon: 'fab fa-github',
      name: 'GitHub',
      url: 'https://github.com/JoseVincent369',
      color: '#333'
    },
{
  icon: 'fab fa-x-twitter',
  name: 'X',
  url: 'https://x.com/Jojee441',
  color: '#000000'
},

    {
      icon: 'fab fa-facebook-f',
      name: 'Facebook',
      url: 'https://www.facebook.com/vincent.pelaje/', // UPDATE WITH YOUR FACEBOOK
      color: '#1877f2'
    }
  ];

  return (
    <section id="contact" className="contact-section py-5">
      {/* Background Elements */}
      {/* <div className="contact-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div> */}

      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center mb-5">
          <h2 className="section-title" style={{marginTop: '30px'}}>Get In Touch</h2>
          <p className="section-subtitle">Let's work together to bring your ideas to life</p>
        </div>

        <div className="row">
          {/* Contact Information */}
          <div className="col-lg-4 mb-4">
            <div className="contact-info-card hover-card">
              <h4 className="card-title mb-4">
                <i className="fas fa-paper-plane me-2"></i>
                Contact Information
              </h4>
              
              <div className="contact-details">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-item">
                    <div className="contact-icon">
                      <i className={item.icon}></i>
                    </div>
                    <div className="contact-content">
                      <h6>{item.title}</h6>
                      <a 
                        href={item.link} 
                        className="contact-link"
                        target={item.link.startsWith('http') ? '_blank' : '_self'}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="social-section mt-4">
                <h6 className="social-title">Follow Me</h6>
                <div className="social-links-grid">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="social-link-item"
                      style={{ '--social-color': social.color }}
                      title={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>

              <div className="card-hover-effect"></div>
            </div>

            {/* Availability Card */}
            {/* <div className="availability-card hover-card mt-4">
              <div className="availability-header">
                <i className="fas fa-calendar-check me-2"></i>
                <h5>Current Availability</h5>
              </div>
              <div className="availability-content">
                <div className="availability-status available">
                  <div className="status-dot"></div>
                  <span>Available for new projects</span>
                </div>
                <p className="availability-text">
                  I'm currently accepting new freelance projects and would love to hear about your ideas.
                </p>
              </div>
              <div className="card-hover-effect"></div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <div className="contact-form-card hover-card">
              <h4 className="card-title mb-4">
                <i className="fas fa-envelope me-2"></i>
                Send Me a Message
              </h4>

              {/* Status Messages */}
              {submitStatus === 'sending' && (
                <div className="alert alert-info alert-dismissible fade show" role="alert">
                  <i className="fas fa-spinner fa-spin me-2"></i>
                  Sending your message...
                </div>
              )}

              {submitStatus === 'success' && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                  <i className="fas fa-check-circle me-2"></i>
                  {submitMessage}
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => setSubmitStatus(null)}
                  ></button>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                  <i className="fas fa-exclamation-triangle me-2"></i>
                  {submitMessage}
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => setSubmitStatus(null)}
                  ></button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        <i className="fas fa-user me-2"></i>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter your full name"
                        required
                        minLength="2"
                        // disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        <i className="fas fa-envelope me-2"></i>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter your email address"
                        required
                        // disabled={isSubmitting}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    <i className="fas fa-tag me-2"></i>
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="What's this about?"
                    required
                    minLength="5"
                    // disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    <i className="fas fa-comment me-2"></i>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    rows="6"
                    placeholder="Tell me about your project, timeline, and budget..."
                    required
                    minLength="10"
                    // disabled={isSubmitting}
                  ></textarea>
                </div>

                <div className="form-footer">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    // disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin me-2"></i>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane me-2"></i>
                        Send Message
                      </>
                    )}
                  </button>
                  
                  <div className="form-note">
                    <i className="fas fa-info-circle me-2"></i>
                    I typically respond within 24 hours
                  </div>
                </div>
              </form>
              <div className="card-hover-effect"></div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="cta-section text-center mt-5">
          <div className="cta-card hover-card">
            <h3 className="cta-title">Ready to Start Your Project?</h3>
            <p className="cta-text">
              Let's discuss how we can work together to bring your vision to life. 
              I'm excited to hear about your ideas and help you achieve your goals.
            </p>
            <div className="cta-buttons">
              <a 
                href="mailto:josevicent.pelaje@gmail.com"  // UPDATE WITH YOUR EMAIL
                className="btn btn-primary btn-lg me-3"
              >
                <i className="fas fa-envelope me-2"></i>
                Email Me Directly
              </a>
              <a 
                href="tel:+639123456789"  // UPDATE WITH YOUR PHONE
                className="btn btn-outline-light btn-lg"
              >
                <i className="fas fa-phone me-2"></i>
                Call Me
              </a>
            </div>
            <div className="card-hover-effect"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;