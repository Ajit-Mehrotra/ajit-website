import Link from "next/link";
import { getAllPosts } from "../../lib/Prisma";
import Navbar from "../components/Navbar";



export default async function ThoughtBubble() {
    const posts = await getAllPosts();


    return (
        <div>
            <Navbar />
            <div id="thought-bubble">
                <h1 className=" text-center font-bold mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl py-[4rem]">Thought Bubble</h1>
                {posts.map((post, index) => (
                    <div key={index}>
                        <Link className="mb-2 decoration-sky-500 underline text-xl sm:text-2xl md:text-4xl" href={""}>{post.title}</Link>
                        <h2 className=" sm:text-l md:text-xl">{post.subtitle}</h2>
                        {post.created_at ? <h3 className="text-sm mb-4">{post.created_at.toString()}</h3> : null}
                        <p>{post.content}</p>

                        <br />



                        <p></p>
                    </div>
                ))}


            </div>

        </div>
    )
}
