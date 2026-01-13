import download from "image-downloader";
import mime from "mime-types";

export const downloadImage = async (link, destination) => {
  const extension = mime.extensions(link);
  const { filename } = `${Date.now()}.${extension}`;
  options = {
    url: link,
    dest: `${destination}${filename}`,
  };

  try {
    await download.image(options);

    console.log("Saved to", filename);
  } catch (error) {
    console.error(error);
  }
};
