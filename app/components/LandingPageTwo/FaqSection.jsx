import React, {useEffect} from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'; // Assuming global Bootstrap CSS is imported in _app.js
import '@/app/appPages/_app'

const FaqSection = () => {
    useEffect(() => {
        const initializeBootstrap = async () => {
            await import('bootstrap/dist/js/bootstrap.bundle.min');
            // Check if jQuery is available before using it
            if (typeof window.jQuery === 'function') {
                window.jQuery('.accordion-button').on('click', function() {
                    const target = $(this).data('bs-target');
                    $(target).collapse('toggle');
                });
            } else {
                console.error('jQuery is not available.');
            }
        };
        initializeBootstrap();
    }, []);
    return (
      <section className="bsb-faq-3 py-3 py-md-5 py-xl-8">
        <div className="container" >
          <div>
            <div>
              <p className="mb-2 text-center mt-5" style={{color:'#0A273E', fontFamily:'Lexend', fontWeight:'bold', fontSize:'48px', lineHeight:'68px'}}>Frequently Asked Questions</p>
              <p className="mb-16 text-center" style={{color:'#9095A1', fontFamily:'Manrope', fontSize:'18px', lineHeight:'28px'}}>Exercitation dolore reprehenderit fugi</p>
            </div>
          </div>
  
          {/* FAQ: My Account */}
          <div className="mb-8">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-11 col-xl-10">
                  <div className="accordion accordion-flush" id="faqAccount">
                    {/* Dynamically generate these accordion items in real projects */}
                    {[
                      { id: 1, question: "What is an account?", answer: "An account is a personal or organizational record that allows you to access and manage various services, often requiring authentication through a username and password." },
                      { id: 2, question: "How do I create an account?", answer: "To create an account, visit the website or application and look for a 'Sign Up' or 'Create Account' button. Follow the instructions to enter your information and create a username and password." },
                      { id: 3, question: "How do I secure my account?", answer: "To secure your account, use a robust and unique password, enable two-factor authentication if available, and be cautious about sharing your login information. Regularly update your password and avoid using easily guessable information like birthdays or names." },
                      { id: 4, question: "What should I do if I forget my password?", answer: "If you forget your password, most websites and services offer a 'Forgot Password' or 'Reset Password' option. Follow the steps to reset your password, often involving an email or SMS verification." },
                      { id: 5, question: "What should I do if my account is compromised or hacked?", answer: "If you suspect your account has been compromised, change your password immediately. Contact the service provider for further assistance, and consider enabling two-factor authentication for added security." }
                    ].map(faq => (
                      <div key={faq.id} className="accordion-item bg-transparent border-top border-bottom py-3">
                        <h2 className="accordion-header" id={`faqAccountHeading${faq.id}`}>
                          <button className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary" type="button" data-bs-toggle="collapse" data-bs-target={`#faqAccountCollapse${faq.id}`} aria-expanded="false" aria-controls={`faqAccountCollapse${faq.id}`}>
                          <span style={{color: '#171A1F', fontFamily:'Manrope', fontWeight:'bold', fontSize:'20px', lineHeight:'30px'}}>{faq.question}</span>
                          </button>
                        </h2>
                        <div id={`faqAccountCollapse${faq.id}`} className="accordion-collapse collapse" aria-labelledby={`faqAccountHeading${faq.id}`}>
                          <div className="accordion-body">
                            <p style={{color:'#323743', fontFamily:'Manrope', fontSize:'16px', lineHeight:'26px'}}>{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  

export default FaqSection