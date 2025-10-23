import MovieList from '/src/components/atoms/MovieList';

import dontLook from '/src/assets/dontlook.png';
import allOfUs from '/src/assets/allofus.png';
import blueLock from '/src/assets/bluelock.png';
import otto from '/src/assets/otto.png';

import top1 from '/src/assets/top1.png';
import top2 from '/src/assets/top2.png';
import top3 from '/src/assets/top3.png';
import top4 from '/src/assets/top4.png';
import top5 from '/src/assets/top5.png';

import trend1 from '/src/assets/trend1.png';
import trend2 from '/src/assets/trend2.png';
import trend3 from '/src/assets/trend3.png';
import trend4 from '/src/assets/trend4.png';
import trend5 from '/src/assets/trend5.png';

const movies = [
    { src: dontLook, alt: "Don't Look Up" },
    { src: allOfUs, alt: "All of Us Are Dead" },
    { src: blueLock, alt: "Blue Lock" },
    { src: otto, alt: "A Man Called Otto" },
];

const topMovies = [
    { src: top1, alt: "Avatar 1" },
    { src: top2, alt: "Avatar 2" },
    { src: top3, alt: "Avatar 3" },
    { src: top4, alt: "Avatar 4" },
    { src: top5, alt: "Avatar 5" }
];

const trendingMovies = [
    { src: trend1, alt: "Trending 1" },
    { src: trend2, alt: "Trending 2" },
    { src: trend3, alt: "Trending 3" },
    { src: trend4, alt: "Trending 4" },
    { src: trend5, alt: "Trending 5" }
];

function Movie() {
    return (
        <div>
            <MovieList 
                movies={movies} 
                topMovies={topMovies} 
                trendingMovies={trendingMovies} 
            />
        </div>
    );
}

export default Movie;