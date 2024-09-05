import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      width: '100%',
      height: 60,
      backgroundColor: '#282c34',
      color: 'white',
      padding: '10px 20px',
      position: 'fixed',
      top: 0,
      left: 0,
      textAlign: 'center',
      zIndex: 1000, // Navbar'ın diğer içeriğin üzerinde görünmesi için
    }}>
      <ul style={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }}>
        
        <li style={{ margin: '0 15px' }}><Link to="/" style={{ color: 'white', textDecoration: 'none' ,fontSize:20}}>HOME</Link></li>
        <li style={{ margin: '0 15px' }}><Link to="/about" style={{ color: 'white', textDecoration: 'none',fontSize:20 }}>ABOUT</Link></li>
        <li style={{ margin: '0 15px' }}><Link to="/contact" style={{ color: 'white', textDecoration: 'none',fontSize:20 }}>CONTACT</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
