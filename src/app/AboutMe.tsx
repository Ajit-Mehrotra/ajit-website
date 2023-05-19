function AboutMe(props: { className: string }) {
    return (

        <div className="flex flex-wrap justify-center  sm:justify-start sm:flex-row">
            <div className="sm:w-2/5 sm:pl-20 pr-3">
                <h1 className="font-bold mb-0 sm:mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-6xl sm:-ml-16 2xl:-ml-40 text-center sm:text-left">WHO AM I</h1>
                <h2 className="text-sm md:text-xl font-semibold mt-8 text-center sm:text-left">A LAYMAN PASSIONATE FOR FOOD</h2>
                <p className="mt-4 text-center sm:text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className="w-full sm:w-3/5 flex flex-col">
                <div className="h-20"></div>
                <img
                    className="flex-grow object-cover drop-shadow-xl rounded-t-xl"
                    src="https://placehold.co/200x150"
                    alt="Your image"
                />

            </div>
        </div>



    );
}

export default AboutMe; 