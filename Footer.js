import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      width: '100%',
      height: 60,
      backgroundColor: '#282c34',
      color: 'white',
      padding: 20,
      position: 'fixed',
      bottom: 0,
      left: 0,
      textAlign: 'center',
      borderRadius:5,
    }}>
      <p>&copy; 2024 My Mini Site</p>
    </footer>
  );
};

export default Footer;
