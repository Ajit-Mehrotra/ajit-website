

function Button(props: { title: string }) {
    return (
        <div>
            <button className="m-5 bg-neutral-900 ease-in-out transition duration-500 text-white py-2 px-4 rounded hover:bg-cremey hover:text-slate-900  "> {props.title}</button>
        </div>);
}

export default Button;
