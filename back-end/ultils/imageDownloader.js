import download from "image-downloader";
import mime from "mime-types";

export const downloadImage = async (link, destination) => {
  const mimeType = mime.lookup(link);
  const contentType = mime.contentType(mimeType);
  const extension = mime.extension(contentType);

  const filename = `${Date.now()}.${extension}`;

  console.log({mime, contentType, link, extension});

  try {
    const options = {
      url: link,
      dest: `${destination}${filename}`,
    };

    await download.image(options);

    console.log("Saved to", filename);
  } catch (error) {
    console.error(error);
  }
};
