interface LinkComponentProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

function LinkComponent({ href, className, children }: LinkComponentProps) {
    return (
        <a
            href={href}
            target="_blank"
            className={`link bg-gray-200 text-black transition duration-300 hover:bg-yellow-200 1  ${className}`}
        >
            {children}
        </a>
    );
}

export default LinkComponent;