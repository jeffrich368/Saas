
import React from "react";
import { Container } from "../shared/Container";
// FIXED: Use 'import type' for LucideIcon to satisfy verbatimModuleSyntax
import {  
    Twitter, 
    Instagram, // If still deprecated in your IDE, use 'Instagram as InstagramIcon'
    Linkedin, 
    Github, 
    Send
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import logo from "../../assets/Logo.png";

// FIXED: Defined the interface using the type-only import
interface SocialIconProps {
    Icon: LucideIcon;
    href?: string;
}

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Product",
            links: ["Features", "Services", "Pricing", "API Reference"],
        },
        {
            title: "Company",
            links: ["About Us", "Our Team", "Careers", "Contact"],
        },
        {
            title: "Resources",
            links: ["Documentation", "Help Center", "Privacy Policy", "Terms of Service"],
        },
    ];

    return (
        <footer className="bg-slate-50 dark:bg-slate-900 pt-20 pb-10 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    
                    <div className="space-y-6">
                        <a href="/" className="flex items-center gap-3">
                            <img src={logo} alt="Zedge Logo" className="w-8 h-8" />
                            <span className="text-xl font-bold text-slate-900 dark:text-white">
                                Zedge AI
                            </span>
                        </a>
                        <p className="text-slate-600 dark:text-slate-400 max-w-xs">
                            Empowering teams with next-generation AI automation and real-time analytics.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon Icon={Twitter} />
                            <SocialIcon Icon={Linkedin} />
                            <SocialIcon Icon={Github} />
                            <SocialIcon Icon={Instagram} />
                        </div>
                    </div>

                    {footerLinks.map((group, idx) => (
                        <div key={idx}>
                            <h4 className="text-slate-900 dark:text-white font-bold mb-6">
                                {group.title}
                            </h4>
                            <ul className="space-y-4">
                                {group.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <a 
                                            href={`#${link.toLowerCase().replace(/\s+/g, "-")}`} 
                                            className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="space-y-6">
                        <h4 className="text-slate-900 dark:text-white font-bold">
                            Stay Updated
                        </h4>
                        <form className="relative group" onSubmit={(e) => e.preventDefault()}>
                            <input 
                                type="email" 
                                placeholder="Email address" 
                                className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                            />
                            <button className="absolute right-2 top-1.5 p-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                        © {currentYear} Zedge AI. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
};

const SocialIcon: React.FC<SocialIconProps> = ({ Icon, href = "#" }) => (
    <a 
        href={href} 
        className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-200/50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-all"
    >
        <Icon size={20} />
    </a>
);