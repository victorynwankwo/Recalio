import cloudinary from "../Config/cloudinary";

export const uploadToCloudinary = (fileBuffer: Buffer, folder: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        { resource_type: "raw", folder },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      )
      .end(fileBuffer);
  });
};