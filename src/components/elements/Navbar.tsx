import { useState, useEffect } from "react";
import { Container } from "../shared/Container";
import logo from "../../assets/Logo.png";
import { NavItem } from "../shared/NavItem";
import { BtnLink } from "../shared/BtnLink";
import { useThemeStore } from "../../store/ThemeStore";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";

const navItems = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: "/about", text: "About Us" },
    { href: "/pricing", text: "Pricing" }, 
];

export const Navbar = () => {
    const { toggleTheme, theme } = useThemeStore();
    const [navIsOpened, setNavIsOpened] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const closeMenu = () => setNavIsOpened(false);
    const toggleMenu = () => setNavIsOpened(!navIsOpened);

    // Sticky Logic: Detect scroll position
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header 
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                isScrolled 
                ? "py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 shadow-sm" 
                : "py-6 bg-transparent"
            }`}
        >
            <Container>
                <nav className="w-full flex justify-between gap-6 relative items-center">
                    {/* Logo */}
                    <Link to="/" className="relative flex items-center gap-3 z-60" onClick={closeMenu}>
                        <img src={logo} alt="Zedge Logo" className="w-10 h-10" />
                        <span className="text-lg font-semibold text-slate-900 dark:text-white">
                            Zedge AI
                        </span>
                    </Link>

                    {/* 1. OVERLAY */}
                    <div 
                        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
                            navIsOpened ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                        onClick={closeMenu}
                    />

                    {/* 2. SLIDE-IN MENU PANEL */}
                    <div className={`
                        fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-white dark:bg-slate-900 
                        z-50 shadow-2xl lg:shadow-none transition-transform duration-300 ease-in-out
                        lg:static lg:w-auto lg:max-w-none lg:bg-transparent lg:translate-x-0
                        flex flex-col lg:flex-row 
                        ${navIsOpened ? "translate-x-0" : "translate-x-full"}
                    `}>
                        {/* Mobile Header Spacer */}
                        <div className="h-24 flex items-center px-8 lg:hidden">
                            <span className="text-lg font-bold text-blue-600">Zedge AI</span>
                        </div>
                        
                        {/* Menu Links - lg:flex-1 and lg:justify-center centers links on desktop */}
                        <ul className="flex flex-col lg:flex-row gap-y-6 gap-x-8 px-8 lg:p-0 text-xl lg:text-lg font-medium text-slate-700 dark:text-slate-300 lg:flex-1 lg:justify-center">
                            {navItems.map((item, key) => (
                                <li key={key} onClick={closeMenu} className=" border-slate-100 dark:border-slate-800 lg:border-none pb-4 lg:pb-0">
                                    <NavItem href={item.href} text={item.text} />
                                </li>
                            ))}
                        </ul>

                        {/* Footer inside Drawer - mt-auto ensures it hits the bottom */}
                        <div className="mt-auto lg:mt-0 p-8 lg:p-0 border-t lg:border-none border-slate-100 dark:border-slate-800 pb-12 lg:pb-0">
                            <div onClick={closeMenu}>
                                <BtnLink text="Get Started" href="/pricing" />
                            </div>
                        </div>
                    </div>

                    {/* 3. PERMANENT BUTTONS */}
                    <div className="flex items-center gap-x-3 z-60">
                        <button 
                            onClick={toggleTheme} 
                            className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <button 
                            onClick={toggleMenu}
                            className="lg:hidden p-2.5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900"
                        >
                            {navIsOpened ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>
            </Container>
        </header>
    );
}