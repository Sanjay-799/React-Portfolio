import React from "react";
import { Contact } from "../contact";

function ContactPage() {
  return (
    <section className="contact-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="top-heading">Contact Me</h1>
          <p className="contact-subheading">
            Below are the details to reach out to me!
          </p>
        </div>

        <div className="row g-4">
          {Contact.map((contact) => (
            <div className="col-md-4 col-sm-6" key={contact.id}>
              <div className="contact-card h-100">
                <div className="contact-icon-container">
                  <img 
                    src={contact.image} 
                    alt={contact.Name} 
                    className="contact-icon"
                    width={80}
                    height={80}
                    loading="lazy"
                  />
                </div>
                <div className="contact-content">
                  <h3 className="contact-title">{contact.Name}</h3>
                  <a 
                    href={contact.link || `mailto:${contact.Value}`} 
                    className="contact-info"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {contact.Value}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="contact-qus-card">
            <h1 className="">Have a Question?</h1>
            <button className="download-btn" onClick={()=>
              window.open("https://docs.google.com/forms/d/e/1FAIpQLScrlpBZt3lbiYU2r89HgINpg4ewQg5cmbXnvrtKrr__oopuEA/viewform",'_blank')
            }>CLICK HERE</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;