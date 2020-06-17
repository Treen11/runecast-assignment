import picsumPhotosService from '@/module/picsumPhotos/service/picsumPhotosService.js'
import PicsumPhotosPhoto from '@/module/picsumPhotos/domain/PicsumPhotosPhoto.js'
import picsumPhotosPhotoMapper from '@/module/picsumPhotos/mapper/picsumPhotosPhotoMapper.js'
import photoGalleryService from '@/module/photoGallery/service/photoGalleryService.js'
import PhotoGalleryPhoto from '@/module/photoGallery/domain/PhotoGalleryPhoto.js'

const mockGetRandomPhotosReturn = [
  new PicsumPhotosPhoto({
    author: 'First guy',
    downloadUrl: 'http://one.com',
    size: 200
  }),
  new PicsumPhotosPhoto({
    author: 'Second guy',
    downloadUrl: 'http://two.com',
    size: 350
  })
]

const mockGalleryPhotos = [
  new PhotoGalleryPhoto({ title: 'First guy', src: 'http://one.com' }),
  new PhotoGalleryPhoto({ title: 'Second guy', src: 'http://two.com' })
]

describe('photoGalleryService.getNewPhotos()', () => {
  let mockGetRandomPhotos
  let mockMapPicsumPhotoToGalleryPhoto

  beforeEach(() => {
    mockGetRandomPhotos = jest.fn(() => Promise.resolve(mockGetRandomPhotosReturn))

    mockMapPicsumPhotoToGalleryPhoto = jest.fn((picsumPhoto) => {
      return mockGalleryPhotos.find(p => p.title === picsumPhoto.author)
    })

    picsumPhotosPhotoMapper.picsumPhotosPhotoToPhotoGalleryPhoto = mockMapPicsumPhotoToGalleryPhoto
    picsumPhotosService.getRandomPhotos = mockGetRandomPhotos
  })

  it('calls picsumPhotosService.getRandomPhotos exactly once', () => {
    photoGalleryService.getNewPhotos()

    expect(mockGetRandomPhotos.mock.calls.length).toBe(1)
  })

  it('calls picsumPhotosPhotoMapper.picsumPhotosPhotoToPhotoGalleryPhoto exactly twice with correct params', () => {
    photoGalleryService.getNewPhotos()

    process.nextTick(() => {
      expect(mockMapPicsumPhotoToGalleryPhoto.mock.calls.length).toBe(mockGetRandomPhotosReturn.length)
      expect(mockMapPicsumPhotoToGalleryPhoto.mock.calls[0][0]).toBe(mockGetRandomPhotosReturn[0])
      expect(mockMapPicsumPhotoToGalleryPhoto.mock.calls[1][0]).toBe(mockGetRandomPhotosReturn[1])
    })
  })

  it('returns a Promise, that resolves to an array of return values of picsumPhotosPhotoMapper.picsumPhotosPhotoToPhotoGalleryPhoto', async () => {
    expect(await photoGalleryService.getNewPhotos()).toEqual(mockGalleryPhotos)
  })
})
