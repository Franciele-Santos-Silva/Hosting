import download from "image-downloader"

options = {
  url: 'http://someurl.com/image2.jpg',
  dest: '/path/to/dest/photo.jpg',     // will be saved to /path/to/dest/photo.jpg
};

download.image(options)
  .then(({ filename }) => {
    console.log('Saved to', filename); // saved to /path/to/dest/photo.jpg
  })
  .catch((err) => console.error(err));