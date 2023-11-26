import { PrismaClient, categories, comments, users } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllPosts(): Promise<Post[]> {
  try {
    const allPosts = await prisma.posts.findMany();
    return allPosts;
  } catch (error) {
    console.error("Could Not Load All Posts: " + error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

export async function getAllUsers(): Promise<users[]> {
  try {
    const allUsers = await prisma.users.findMany();
    return allUsers;
  } catch (error) {
    console.error("Could Not Load All Users: " + error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

export async function getAuthors(): Promise<users[]> {
  try {
    const allAuthors = await prisma.users.findMany({
      where: {
        posts: {
          some: {}, // This condition checks if there is at least one related post
        },
      },
      // Include the posts in the result (optional based on your needs)
      // include: {
      //   posts: true,
      // },
    });
    return allAuthors;
  } catch (error) {
    console.error("Could Not Load All Authors: " + error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

export async function getAllCategories(): Promise<categories[]> {
  try {
    const categories = await prisma.categories.findMany();
    return categories;
  } catch (error) {
    console.error("Could Not Load All Categories: " + error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

export async function getAllCommentsByPostID(
  postId: string
): Promise<comments[]> {
  try {
    const comments = await prisma.comments.findMany({
      where: {
        post_id: postId,
      },
    });
    return comments;
  } catch (error) {
    console.error("Could Not Load All Comments by " + postId + ": " + error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

export async function getAllCommentsByAuthorID(
  authorId: string
): Promise<comments[]> {
  try {
    const comments = await prisma.comments.findMany({
      where: {
        author_id: authorId,
      },
    });
    return comments;
  } catch (error) {
    console.error("Could Not Load All Comments by " + authorId + ": " + error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

export async function createBlog(
  authorID: string,
  title: string,
  subtitle: string,
  categoryID: string,
  contentUrl: string
): Promise<Post> {
  try {
    const blog = await prisma.posts.create({
      data: {
        title: title,
        subtitle: subtitle,
        category_id: categoryID,
        content: contentUrl,
        author_id: authorID,
      },
    });
    return blog;
  } catch (error) {
    console.error("Could not Upload Blog Post: " + error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

export async function createUser(
  name: string,
  email: string,
  password: string
): Promise<users> {
  try {
    const user = await prisma.users.create({
      data: {
        username: name,
        email: email,
        password: password, // hashed password
      },
    });
    return user;
  } catch (error) {
    console.error("Could not create User: " + error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

export async function createCategory(name: string): Promise<categories> {
  try {
    const category = await prisma.categories.create({
      data: {
        name: name,
      },
    });
    return category;
  } catch (error) {
    console.error("Could not create Category: " + error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

export async function createComment(
  content: string,
  author: string,
  post_id: string
): Promise<comments> {
  try {
    const comment = await prisma.comments.create({
      data: {
        content: content,
        author_id: author,
        post_id: post_id,
      },
    });
    return comment;
  } catch (error) {
    console.error("Could not create User: " + error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}
