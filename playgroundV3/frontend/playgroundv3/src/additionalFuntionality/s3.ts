import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

const BUCKET_NAME =  process.env.REACT_APP_BUCKET_NAME;
const REGION = process.env.REACT_APP_REGION;
export const s3 = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY as string
  },
});

export const uploadFileToS3 = async (file: File, ) => {
  try{
    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: file.name,
      Body: file
    });

    await s3.send(command);
  } catch (error) {
    alert("Couldn't upload the file! Please try again!");
    return "";
  }
}

export const getFileS3Url = (fileName: string) => {
  return `https://${BUCKET_NAME}.s3.${REGION}.amazonaws.com/${fileName}`;
} 