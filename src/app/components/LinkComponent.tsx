interface LinkComponentProps {
    href: string;
    children: React.ReactNode;
}

function LinkComponent({ href, children }: LinkComponentProps) {
    return (
        <a
            href={href}
            target="_blank"
            className="link bg-gray-200 text-black transition duration-300 hover:bg-yellow-200 1"
        >
            {children}
        </a>
    );
}

export default LinkComponent;