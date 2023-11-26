import { NextResponse } from 'next/server';
import {uploadImage} from '../../../lib/uploadImage';


export async function POST(req: Request) {
  console.log("Handling POST request");
  if (req.method === 'POST') {
    const formData = await req.formData();
    const file = formData.get('image'); // 'image' is the key used in formData.append on the client-side
      const url = await uploadImage(file);
      return NextResponse.json(url);

  }
}
