import React, { useState, useEffect } from 'react';
import LeftBanner from './LeftBanner';
import { bannerimg, transparent } from '../../assets';

function Banner() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const bannerStyle = {
        width: '100%',
        paddingTop: '10px',
        paddingBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid black',
        fontFamily: 'your-title-font-here', // Replace with your actual font
    };

    const imageContainerStyle = isMobile ? {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    } : {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const imageSizeStyle = isMobile ? {
        width: '80vw',
        height: 'auto',
        zIndex: 10,
        maxWidth: '100%',
    } : {
        width: '500px',
        height: '680px',
        zIndex: 10,
    };

    const gradientStyle = {
        position: 'absolute',
        bottom: '0',
        width: isMobile ? '50vw' : '350px',
        height: isMobile ? 'auto' : '300px',
        maxWidth: '100%',
        background: 'linear-gradient(to right, #1e2024, #202327)',
        boxShadow: 'your-shadow-style-here', // Replace with your actual shadow style
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <section style={bannerStyle} id="home">
            <LeftBanner />
            <div style={imageContainerStyle}>
                <img style={imageSizeStyle} src={transparent} alt="banner" />
                <div style={gradientStyle}></div>
            </div>
        </section>
    );
}

export default Banner;
