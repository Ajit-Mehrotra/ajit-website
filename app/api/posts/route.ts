import { NextResponse } from "next/server"
import {getAllPosts} from "../../../lib/Prisma"

export async function GET(request: Request) {
    const posts = await getAllPosts();
    return NextResponse.json(posts)
}