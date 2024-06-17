import React from 'react';

const footerStyle = {
    background: '#333333', // Dark gray background (shade of black)
    padding: '10px',
    textAlign: 'center',
    color: 'white',
    position: 'fixed',
    bottom: '0',
    width: '100%',
};

function Footer() {
    return (
        <footer style={footerStyle}>
            <p>&copy; 2024 My Personal Website</p>
        </footer>
    );
}

export default Footer;
