import { Link } from "react-router-dom";

interface NavItemProps {
    href: string;
    text: string;
}

export const NavItem = ({ href, text }: NavItemProps) => {
    return (
        <li>
            <Link 
                to={href} 
                className="duration-300 font-medium hover:text-blue-600 dark:hover:text-blue-400"
            >
                {text}
            </Link>
        </li>
    );
};