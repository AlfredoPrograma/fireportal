export const MAX_IMAGE_SIZE = 5 * 1024 * 1024 // 5MB
export const acceptedImageTypes = ['image/png', 'image/jpeg', 'image/jpg']


export function imageToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject("FileReader result is not a string");
      }
    };
    reader.onerror = (error) => reject(error);
  });
}