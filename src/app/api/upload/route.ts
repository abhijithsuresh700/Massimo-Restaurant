import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function uploadImageRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { image } = req.body; // Assuming the input field is named "image"
    const imagePath = path.join(process.cwd(), 'public', 'images', image.name);

    // Save the image to the public/images folder
    fs.writeFileSync(imagePath, image.data);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while uploading the image' });
  }
}