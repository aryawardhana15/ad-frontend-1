import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import NavBar from '../components/organisms/NavBar';
import Hero from '../components/molecules/Hero';
import Movie from '../components/molecules/Movie';
import Footer from '../components/organisms/Footer';
import '/src/stylesberanda.css';

const HomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('isAuthenticated') !== 'true') {
            navigate('/'); 
        }
    }, [navigate]);

    return (
        <>
            <NavBar />
            <main>
                <Hero />
                <Movie />
            </main>
            <Footer />
        </>
    );
}

export default HomePage;