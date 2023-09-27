import Arrow from "./components/Arrow";

interface TakeawayProps {
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
}

const takeaways: TakeawayProps[] = [
    {
        title: "LESSON #1",
        subtitle: "A LAYMAN PASSIONATE FOR FOOD",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: "ajit.jpg",
    }, {
        title: "LESSON #2",
        subtitle: "A LAYMAN PASSIONATE FOR FOOD",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: "ajit.jpg",
    }, {
        title: "LESSON #3",
        subtitle: "A LAYMAN PASSIONATE FOR FOOD",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: "ajit.jpg",
    },
    {
        title: "LESSON #4",
        subtitle: "A LAYMAN PASSIONATE FOR FOOD",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: "ajit.jpg",
    }, {
        title: "LESSON #5",
        subtitle: "A LAYMAN PASSIONATE FOR FOOD",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: "ajit.jpg",
    },


    // Add more takeaways as needed
];


function Takeaways() {
    return (
        <div>
            {/* <div className="flex flex-wrap justify-center  md:justify-start md:flex-row">
                <div className="md:w-2/5 sm:pl-20 pr-3">
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
            </div> */}


            <h1 className=" text-center font-bold mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl pb-[4rem]">Key Takeaways from Experience</h1>
            {/* <Arrow padding="py-[2rem]" color="text-gray-400" width={2} /> */}
            <div className="flex flex-wrap p-8 justify-center md:justify-start md:flex-row">
                {takeaways.map((takeaway, index) => (
                    <div>
                        <div key={index} className="flex flex-col lg:flex-row w-full px-[2rem]">
                            <div className={`w-full lg:w-2/5 ${index % 2 !== 0 ? 'lg:order-last' : ''} lg:pl-20 pr-3`}>
                                <h1 className="font-bold mb-0 lg:mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-center sm:text-left">{takeaway.title}</h1>
                                <h2 className="text-sm md:text-xl font-semibold mt-8 text-center sm:text-left">{takeaway.subtitle}</h2>
                                <p className="mt-4 text-center lg:text-left">{takeaway.description}</p>
                            </div>
                            <div className="w-full lg:w-3/5 flex flex-col mt-4 md:mt-0">
                                <div className="h-20"></div>
                                <img className="flex-grow object-cover drop-shadow-xl rounded-xl lg:h-[50vh] lg:mx-[2rem] xl:mx-[8rem] lg:mt-[-2rem]" src={takeaway.imageUrl} alt="Takeaway image" />
                            </div>
                        </div>
                        {index !== takeaways.length - 1 && <Arrow padding="py-[1.5rem]" color="text-yellow-400" width={1} />}
                    </div>

                ))}
            </div>


        </div>


    );
}

export default Takeaways; 