import Arrow from "../Arrow";
import Button from "../Button";
import LinkComponent from "../LinkComponent";



const takeaways: String[] = [
    "Collective vision drives innovation",
    "Trust builds inclusivity & happiness in teams",
    "Good leaders earn respect",
    "Mistakes create opportunities",
    "The \"right\" answer is not always the best answer",
    "Celebrate small victories",
    "Opt for simplicity",
    "Add a bit of yourself to everything you do",
    "Learn what not to do",
    "Miscommunication and lack of communication causes most problems.",

];


function Takeaways() {
    return (
        <div className="">
            <h1 className=" text-center font-bold mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Key Takeaways from Experience</h1>
            <div className="grid grid-rows-auto items-center justify-center p-5">
                <ol className="list-decimal" type="1" >
                    {takeaways.map((takeaway, index) => (
                        <div key={index}>
                            <li >
                                <LinkComponent href={`/Takeaways#${index}`}>{takeaway}</LinkComponent>
                            </li>

                        </div>
                    ))}
                </ol>

            </div>
            <div className="flex justify-center ">
                <Button href="/Takeaways" title="Read in-depth!" />
            </div>
        </div>


    );
}

export default Takeaways; 