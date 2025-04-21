import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-art-burgundy to-art-navy py-6 text-center fixed bottom-0 w-full shadow-lg">
      <p className="text-base text-white">
        Developed by{' '}
        <span className="font-bold text-art-gold hover:text-art-gold/90 transition-colors">
          Rahul, Sweety Biju, Sachit Sood
        </span>
      </p>
    </footer>
  );
};

export default Footer;
