const { BlobServiceClient } = require('@azure/storage-blob');
import { v4 as uuidv4 } from 'uuid';

const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.BLOB_STORAGE_CONNECTION_STRING);

export async function uploadMarkdown(markdown: string) {

  // Get a reference to the Azure container
  const containerClient = blobServiceClient.getContainerClient(process.env.BLOB_MARKDOWN_CONTAINER_NAME);

  const fileName = `markdown-${uuidv4()}.md`

  const blobName = fileName;
  const blockBlobClient = containerClient.getBlockBlobClient(blobName); // supposed to be file name

console.log("// Create a new block blob for Markdown...");
    const uploadBlobResponse = await blockBlobClient.upload(markdown, Buffer.byteLength(markdown));
    console.log(`Uploaded block blob ${blobName} successfully,`);
    console.log(
      `requestId - ${uploadBlobResponse.requestId}, statusCode - ${uploadBlobResponse._response.status}\n`
    );

return {url: blockBlobClient.url }
}