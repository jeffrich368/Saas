interface BtnLinkProps {
  href: string;
  text: string;
  className?: string;
}

export const BtnLink = ({ href, text, className = "" }: BtnLinkProps) => {
  return (
    <a
      href={href}
      className={`
        relative px-6 py-3 rounded-full outline-none overflow-hidden border cursor-pointer
        transition-colors duration-300 ease-in-out
        
        /* 1. Light Mode Styles (Default) */
        /* Currently set to dark text and transparent background */
        bg-transparent border-gray-300 text-gray-800
        
        /* 2. Dark Mode Styles */
        /* Changes background to violet, text to white, and b order to violet */
        dark:bg-violet-600 dark:text-white dark:border-violet-600
        
        ${className}
      `}
    >
      {/* Removed 'text-white' here so it inherits from the parent */}
      <span className="relative z-10 font-medium">
        {text}
      </span>
    </a>
  );
};