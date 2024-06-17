import React from 'react';

function MainContent() {
    return (
        <div style={mainContentStyle}>
            <p>Hello! I’m Narain Sriram, and this is my personal website. Here you’ll find information about me, my projects, and my interests.</p>
        </div>
    );
}

const mainContentStyle = {
    flex: 1,
    padding: '20px',
    textAlign: 'center',
};

export default MainContent;
