// Instead of import { PrismaClient } from '@prisma/client';
const { PrismaClient } = require('@prisma/client');


const prisma = new PrismaClient()

// async function createData() {
  
// // Create some dummy users
// const userResponse = await prisma.users.createMany({
//     data: [
//       {
//         username: 'AjitMehrotra',
//         email: 'ajit@example.com',
//         password: 'john123',
//       },
//       {
//         username: 'JaneDoe',
//         email: 'jane@example.com',
//         password: 'jane123',
//       },
//       // Add more users here
//     ],
//   });
  
//   // Fetch the created users to get their IDs
//   const createdUsers = await prisma.users.findMany();
//   const user1Id = createdUsers[0].id;
//   const user2Id = createdUsers[1].id;
  
//   // Create some dummy categories
//   const categoryResponse = await prisma.categories.createMany({
//     data: [
//       { name: 'Technology'},
//       { name: 'Health'},
//       { name: 'Education'},
//       // Add more categories here
//     ],
//   });
  
//   // Fetch the created categories to get their IDs
//   const createdCategories = await prisma.categories.findMany();
//   const category1Id = createdCategories[0].id;
//   const category2Id = createdCategories[1].id;
  
//   // Create some dummy posts
//   const posts = await prisma.posts.createMany({
//     data: [
//       {
//         title: 'Understanding Technology',
//         subtitle: 'A deep dive into tech',
//         content: 'Technology is fascinating...',
//         sentiment_score: 0.8,
//         category_id: category1Id,
//         author_id: user1Id,
//       },
//       {
//         title: 'Health and Wellness',
//         subtitle: 'Taking care of yourself',
//         content: 'Health is wealth...',
//         sentiment_score: 0.9,
//         category_id: category2Id,
//         author_id: user2Id,
//       },
//       // Add more posts here
//     ],
//   });
  
//   // Fetch the created posts to get their IDs
//   const createdPosts = await prisma.posts.findMany();
//   const post1Id = createdPosts[0].id;
//   const post2Id = createdPosts[1].id;
  
//   // Create some dummy comments
//   const comments = await prisma.comments.createMany({
//     data: [
//       {
//         content: 'Great post!',
//         author_id: user2Id,
//         post_id: post1Id,
//       },
//       {
//         content: 'Very informative!',
//         author_id: user1Id,
//         post_id: post2Id,
//       },
//       // Add more comments here
//     ],
//   });
  
//   console.log('Dummy data inserted');
  
// }

// createData()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })

async function getData() {
    
    console.log('Dummy data inserted');
    
  }
  
  getData()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })
  
