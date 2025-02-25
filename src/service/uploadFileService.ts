import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from '../awsConfig';

export async function uploadFile(bucket: string, filePath: string, file: Express.Multer.File): Promise<string> {
    const params = {
      Bucket: bucket,
      Key: filePath,
      Body: file.buffer,
      ContentType: file.mimetype
    };
  
    try {
      const data = await s3Client.send(new PutObjectCommand(params));
      const publicUrl = `https://kdkwuxvoydubcwehmxfy.supabase.co/storage/v1/object/public/image/${filePath}`;
      console.log('File uploaded successfully:', publicUrl);
      return publicUrl;
         } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  }