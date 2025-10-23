import '/src/stylesberanda.css';
import { useRef } from 'react';
import MuteButton from '/src/components/atoms/MuteButton';
import video from '/src/assets/squid.mp4';

const HeroScreen = ({ isMuted, toggleMute }) => {
    const videoRef = useRef(null);

    return (
        <section className="hero">
            <div className="hero-content">
                <video ref={videoRef} autoPlay muted={isMuted} loop id="hero-video">
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <div className="hero-screen"></div>
            <div className="hero-text">
                <h1>Squid Game</h1>
                <p>Ratusan pemain yang kekurangan uang menerima undangan aneh untuk bersaing dalam permainan anak-anak. Di dalam, hadiah yang menggoda menunggu dengan taruhan tinggi yang mematikan: game bertahan hidup yang memiliki hadiah 45,6 miliar won yang dipertaruhkan.</p>
                <div className="button-hero"> 
                    <button className="hero-button">Mulai</button>
                    <button className="hero-more">ⓘ Selengkapnya</button> 
                    <p className="umur"> 18+ </p>
                    <MuteButton isMuted={isMuted} toggleMute={toggleMute} /> 
                </div> 
            </div>
        </section>
    );
};

export default HeroScreen;