import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import apLogo from '../assets/Ap Logo-02.png';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Dashboard', path: '/' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-display font-bold text-foreground tracking-widest flex items-center gap-3">
          <img 
            src={apLogo} 
            alt="AP Logo" 
            className="h-8 w-auto object-contain brightness-0 invert" 
          />
          <span>AJEET PRABHAKAR</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path && location.hash === '';
            return (
              <a
                key={link.name}
                href={link.path}
                className="text-sm font-display tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
