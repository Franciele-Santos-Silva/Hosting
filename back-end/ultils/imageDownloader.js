import download from "image-downloader";
import mime from "mime-types";
import path from "node:path";

export const downloadImage = async (link, destination) => {
  const mimeType = mime.lookup(link);
  if (!mimeType) {
    throw new Error("Tipo MIME inválido ou não reconhecido.");
  }

  const extension = mime.extension(mimeType);
  if (!extension) {
    throw new Error("Extensão inválida para o tipo MIME.");
  }

  const filename = `${Date.now()}.${extension}`;

  try {
    const options = {
      url: link,
      dest: path.join(destination, filename),
    };

    await download.image(options);

    console.log("Saved to", filename);

    return filename;
  } catch (error) {
    console.error("Erro ao baixar a imagem:", error);
    throw error;
  }
};
