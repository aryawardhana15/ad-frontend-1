import '/src/stylesberanda.css';

const MovieList = ({ movies, topMovies, trendingMovies }) => {
    return (
        <section className="movies">
            <div id="movies-container">
                <h2 className="section-title">Melanjutkan Tonton Film</h2>
                <div className="list">
                    {movies.map((movie, index) => (
                        <img
                            key={index}
                            className="melanjutkan"
                            src={movie.src}
                            alt={movie.alt}
                        />
                    ))}
                </div>
            </div>

            <div id="movies-container">
                <h2 className="section-title">Top Rating Film dan Series Hari ini</h2>
                <div className="list">
                    {topMovies.map((topMovie, index) => (
                        <img
                            key={index}
                            className="top"
                            src={topMovie.src}
                            alt={topMovie.alt}
                        />
                    ))}
                </div>
            </div>

            <div id="movies-container">
                <h2 className="section-title">Trending Hari Ini</h2>
                <div className="list">
                    {trendingMovies.map((trend, index) => (
                        <img
                            key={index}
                            className="top"
                            src={trend.src}
                            alt={trend.alt}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MovieList;