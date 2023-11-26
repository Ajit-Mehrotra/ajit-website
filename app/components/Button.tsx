import Link from 'next/link';




function Button(props: { title: string, href: string, className?: string, onClick?: React.MouseEventHandler}) {
    return (
        <div>
            <Link href={props.href} target='_blank'>
                <button className={`m-5 bg-neutral-900 ease-in-out transition duration-500 text-white py-2 px-4 rounded hover:bg-yellow-200 hover:text-slate-900 ${props.className}` } onClick={props.onClick}>
                    {props.title}
                </button>
            </Link>
        </div>
    );
}

export default Button;
