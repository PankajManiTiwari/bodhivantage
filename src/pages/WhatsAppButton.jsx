import React from 'react';
import whatsappIcon from '../images/whatsapp.png'; // Replace with your actual image path
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const openWhatsAppChat = () => {
    window.open('https://wa.me/917349553867', '_blank'); // Replace with your number
  };

  return (
    <div className="whatsapp-float" onClick={openWhatsAppChat}>
      <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
    </div>
  );
};

export default WhatsAppButton;