import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Jensen Deli. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
