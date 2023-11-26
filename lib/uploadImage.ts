import { Stream } from "stream";

const { BlobServiceClient } = require('@azure/storage-blob');


// Create the BlobServiceClient object which will be used to create a container client
const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.BLOB_STORAGE_CONNECTION_STRING);

export async function uploadImage(file: any) {

  // Get a reference to the Azure container
  const containerClient = blobServiceClient.getContainerClient(process.env.BLOB_IMAGE_CONTAINER_NAME);

  const blobName = new Date().getTime() + file.name;
  const blockBlobClient = containerClient.getBlockBlobClient(blobName); // supposed to be file name

  const arrayBuffer = await file.arrayBuffer();
 

console.log("// Create a new block blob...");
    const uploadBlobResponse = await blockBlobClient.uploadData(arrayBuffer);
    console.log("Completred")
    console.log(`Uploaded block blob ${blobName} successfully,`);
    console.log(
      `requestId - ${uploadBlobResponse.requestId}, statusCode - ${uploadBlobResponse._response.status}\n`
    );

    
    
return {url: blockBlobClient.url }
}