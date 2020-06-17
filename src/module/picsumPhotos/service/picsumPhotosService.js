import picsumPhotosClient from '../client/picsumPhotosClient.js'

export default { getRandomPhotos }

function getRandomPhotos (numOfPhotos, photoSize = 500) {
  const randomPage = Math.round(Math.random() * 200)

  return picsumPhotosClient
    .getPhotos(randomPage, numOfPhotos)
    .catch((err) => {
      console.error('A request for picsum photos failed', err)
      return Promise.reject(err)
    })
    .then((photos) => {
      photos.forEach((photo) => {
        photo.size = photoSize
      })
      return photos
    })
}
