import React from 'react';

const pageStyle = {
    main : {
        display: 'flex',
        height: '100vh',
        width: '100vw',
        margin: '0 auto',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        letterSpacing: '2px'
    }
}

const Home = () => {
    return (
        <div>
            <p style={pageStyle.text}>Welcome!</p>
        </div>
    )
}

export default Home;