import picsumPhotosService from '../../picsumPhotos/service/picsumPhotosService.js'
import picsumPhotosPhotoMapper from '../../picsumPhotos/mapper/picsumPhotosPhotoMapper.js'

export default { getNewPhotos }

function getNewPhotos () {
  return picsumPhotosService
    .getRandomPhotos(4)
    .then(photos => photos.map(photo => picsumPhotosPhotoMapper.picsumPhotosPhotoToPhotoGalleryPhoto(photo)))
}
