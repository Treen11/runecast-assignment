import PhotoGalleryPhoto from '../../photoGallery/domain/PhotoGalleryPhoto.js'

export default { picsumPhotosPhotoToPhotoGalleryPhoto }

function picsumPhotosPhotoToPhotoGalleryPhoto (source) {
  return new PhotoGalleryPhoto({ src: source.imgSrc, title: source.author })
}
