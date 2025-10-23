import Genre from '/src/components/atoms/Genre';
import chilllogo from '/src/assets/chill-logo.png';

const Footer = () => {
  const genres = [
    'Aksi', 'Anak-anak', 'Anime', 'Britania', 'Drama', 
    'Fantasi ilmiah & Fantasi', 'Kejahatan', 'Kdrama', 
    'Komedi', 'Petualangan', 'Perang', 'Romantis', 
    'Sains & Alam', 'Thriller'
  ];

  const helpLinks = [
    'FAQ', 'Kontak Kami', 'Privasi', 'Syarat & Ketentuan'
  ];

  return (
    <Genre 
      logoSrc={chilllogo}
      copyrightText="©2023 Chill All Rights Reserved."
      genres={genres}
      helpLinks={helpLinks}
    />
  );
}

export default Footer;