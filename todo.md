# Todo

- [ ] Better Error Handling For Non-Images Uploaded
- [ ] Check if Markdown is sanitized
- [ ] Learn how to use Blob Storage (best practices, appropriate usage, etc.)
- [ ] Add Stronger Typing to all the APIs cause uploadImage.ts got file: any and stuff. Not good typing in general. Can be better. 
- [ ] Change username to name on "User" in DB
- [ ] Make Author & Post ID required for Comment in DB
- [ ] Add the loading components in the create blog form
- [ ] For the Errors, make sure you're covering all the bases (we'll just call all errors bugs for now to make it seem like it's not catastrophic LOL)
- [ ] Not sure if the Suspense Fallback in BlogForm is working or not
- [ ] Refactor code --> starting to get messy

## Questions 
* Is sending the md as string/text over an API call fine (client-side)? And then doing the converting to .md file and the uploading to blob storage fine if I do that on the server-side. Is that normal or a bad practice? Shouldn't it be idk encoded or something? Seems like a privacy concern lol 
* Do I have to close the connections with the blobs storage? In what applications do I have to "close" a connection and how do I know if that's actually necessary?
* How does the Azure Client shit work? Like I be connecting that shit everytime. Do I gotta do that? Should I just have one file for one connection? For example, I have one file in lib for all methods related to Azure Blob. One file for Azure PostgreSQL Server. One file for Prisma?