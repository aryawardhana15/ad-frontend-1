import '/src/stylesberanda.css';

const Genre = ({ logoSrc, copyrightText, genres, helpLinks }) => {
  return (
    <footer className="footer">
      <div id="copyright">
        <img className="footer-logo" src={logoSrc} alt="logo" />
        <p className="subtitle">{copyrightText}</p>
      </div>
      <div className="symbol">
        <p className="subtitle">Genre</p><p className="arah"></p>
        <div className="genre">
          {genres.map((genre) => (
            <a key={genre} href="#" className="teks">{genre}</a>
          ))}
        </div>
      </div>
      <div className="symbol">
        <p className="subtitle">Bantuan</p><p className="arah"></p>
        <div className="genre">
          {helpLinks.map((help) => (
            <a key={help} href="#" className="teks">{help}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Genre;