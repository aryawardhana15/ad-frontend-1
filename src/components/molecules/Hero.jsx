import { useState } from 'react';
import HeroScreen from '/src/components/atoms/HeroScreen';

const Hero = () => {
    const [isMuted, setIsMuted] = useState(true);

    const toggleMute = () => {
        setIsMuted((prev) => !prev);
    };

    return <HeroScreen isMuted={isMuted} toggleMute={toggleMute} />;
};

export default Hero;