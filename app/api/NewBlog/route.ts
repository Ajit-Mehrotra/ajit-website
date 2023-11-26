import { NextResponse } from "next/server";
import { uploadMarkdown } from "../../../lib/uploadMarkdown";
import { createBlog } from "../../../lib/Prisma";

export async function POST(req: Request) {
  console.log("Handling POST request");
  if (req.method === "POST") {
    const { markdownContent, authorID, title, subtitle, categoryID } =
      await req.json();

    console.log("POST REQUEST RECIEVED");
    console.log("Uploading Markdown to Cloud...");
    const url = await uploadMarkdown(markdownContent);

    console.log("Creating Blog...");
    const post = await createBlog(
      authorID,
      title,
      subtitle,
      categoryID,
      url.url
    );
    
    console.log("Blog Created.");
    return NextResponse.json(post);
  }
}
