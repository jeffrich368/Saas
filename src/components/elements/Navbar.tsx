import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "../shared/Container";
import { NavItem } from "../shared/NavItem";
import { BtnLink } from "../shared/BtnLink";
import { useThemeStore } from "../../store/ThemeStore";
import logo from "../../assets/Logo.png";
import { Menu, X, Sun, Moon } from "lucide-react";

export const Navbar = () => {
    const { toggleTheme, theme } = useThemeStore();
    const [navIsOpened, setNavIsOpened] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const closeMenu = () => setNavIsOpened(false);
    const openMenu = () => setNavIsOpened(true);

    useEffect(() => {
        document.body.style.overflow = navIsOpened ? 'hidden' : 'unset';
    }, [navIsOpened]);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { href: "/", text: "Home" },
        { href: "/services", text: "Services" },
        { href: "/about", text: "About Us" },
        { href: "/pricing", text: "Pricing" }, 
    ];

    return (
        <header 
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                isScrolled 
                ? "py-3 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm" 
                : "py-5 bg-transparent"
            }`}
        >
            <Container>
                <nav className="flex justify-between items-center">
                    
                    {/* LOGO */}
                    <Link to="/" className="flex items-center gap-2 z-50" onClick={closeMenu}>
                        <img src={logo} alt="Logo" className="w-9 h-9" />
                        <span className="text-lg font-semibold text-slate-900 dark:text-white">
                            Zedge AI
                        </span>
                    </Link>

                    {/*  1. OVERLAY (This blurs the BACKpage only)  */}
                    <div 
                        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-md z-60 lg:hidden transition-all duration-300 ${
                            navIsOpened ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                        onClick={closeMenu}
                    />

                    {/* 2. DRAWER (Solid background) */}
                    <div className={`
                        fixed top-0 right-0 h-screen w-280px 
                        bg-white dark:bg-slate-950 // Solid colors for 100% clarity
                        z-70 shadow-2xl transition-transform duration-300 ease-in-out
                        lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:shadow-none lg:translate-x-0
                        flex flex-col lg:flex-row
                        ${navIsOpened ? "translate-x-0" : "translate-x-full"}
                    `}>
                        {/* Sharp X Button */}
                        <button 
                            onClick={closeMenu}
                            className="lg:hidden absolute top-5 right-5 p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        >
                            <X size={28} />
                        </button>
                        
                        {/* Sharp Menu Links */}
                        <ul className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-8 px-10 pt-24 lg:p-0">
                            {navItems.map((item, key) => (
                                <li key={key} onClick={closeMenu} className="text-slate-900 dark:text-white">
                                    <NavItem href={item.href} text={item.text} />
                                </li>
                            ))}
                            <li className="lg:hidden">
                                <BtnLink text="Get Started" href="/pricing" />
                            </li>
                        </ul>
                    </div>

                    {/* 3. HEADER ACTIONS  */}
                    <div className="flex items-center gap-x-3 z-50">
                        <button 
                            onClick={toggleTheme} 
                            className="p-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                        >
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        {!navIsOpened && (
                            <button 
                                onClick={openMenu}
                                className="lg:hidden p-2 text-slate-900 dark:text-white"
                            >
                                <Menu size={28} />
                            </button>
                        )}
                    </div>

                </nav>
            </Container>
        </header>
    );
};