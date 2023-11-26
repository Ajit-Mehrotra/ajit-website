import { getAllCategories, getAuthors } from "../../lib/Prisma"
import BlogForm from "./BlogForm";


export default async function page() {

    const authors = await getAuthors();
    const categories = await getAllCategories();

    return (
        <div>
            <BlogForm authors={authors} categories={categories} />
        </div>
    )
}

