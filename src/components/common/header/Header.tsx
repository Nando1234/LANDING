import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext_1';
import Logo from './Logo';
import NavLinks from './NavLinks';
import ClientAccessButton from './ClientAccessButton';
import MobileMenu from './MobileMenu';
import DarkModeToggle from '../DarkModeToggle';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { isAuthenticated, user } = useAuth();
    const location = useLocation();
    const isPublicPage = !location.pathname.startsWith('/dashboard');
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };
        if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isMenuOpen]);

    const headerBg = isScrolled || isMenuOpen
        ? 'bg-white dark:bg-gray-950 shadow-md py-2 backdrop-blur-md'
        : isPublicPage
            ? 'bg-transparent py-4'
            : 'bg-white py-2';

    const textColor = isScrolled ||isMenuOpen ? 'text-primary-600 dark:text-white' : 'text-white';

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${headerBg}`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between transition-colors duration-300">
                <Logo
                    isScrolled={isScrolled}
                    isPublicPage={isPublicPage}
                    isMenuOpen={isMenuOpen}
                />

                {/* Navegación escritorio */}
                <nav
                    role="navigation"
                    className="hidden md:flex items-center space-x-2"
                >
                    <NavLinks isScrolled={isScrolled} isPublicPage={isPublicPage} />
                    <DarkModeToggle />
                </nav>

                {/* Botón de acceso */}
                <div className="hidden md:block">
                    <ClientAccessButton isAuthenticated={isAuthenticated} userRole={user?.role} />
                </div>

                {/* Botón hamburguesa */}
                <button
                    className={`md:hidden focus:outline-none transition-colors duration-300 ${textColor}`}
                    aria-label="Abrir menú"
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isMenuOpen && (
                <div ref={menuRef}>
                    <MobileMenu isAuthenticated={isAuthenticated} userRole={user?.role} />
                </div>
            )}
        </header>
    );
};

export default Header;
