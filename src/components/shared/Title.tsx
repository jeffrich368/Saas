interface TitleProps {
    children: React.ReactNode;
    className?: string; // Adding '?' makes it optional so other Titles don't break
}

export const Title = ({ children, className }: TitleProps) => {
    return (
        /* We use a template literal here to combine your default styles 
           with whatever extra classes you pass in */
        <h1 className={`text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl ${className || ""}`}>
            {children}
        </h1>
    );
}