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
        position: 'relative', // Ensure gradient is positioned within this container
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    } : {
        position: 'relative', // Ensure gradient is positioned within this container
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const imageSizeStyle = isMobile ? {
        width: '80vw', // Responsive width on mobile devices
        height: 'auto', // Maintain aspect ratio
        zIndex: 10,
        maxWidth: '100%', // Ensure it doesn't exceed container's width
        maxHeight: '100vh', // Prevent image from being taller than the viewport
    } : {
        width: '500px', // Fixed width for non-mobile devices
        height: 'auto', // Adjust height automatically to maintain aspect ratio
        zIndex: 10,
        maxWidth: '100%', // Prevent exceeding container's width
        maxHeight: '680px', // Limit height to prevent overly tall images
    };



    const gradientStyle = {
        position: 'absolute',
        bottom: '0', // Make sure this aligns the gradient at the bottom of the imageContainer
        width: isMobile ? '50vw' : '350px',
        height: isMobile ? '100px' : '300px', // Consider setting a fixed height for mobile as well
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
