import { shallowMount } from '@vue/test-utils'
import PhotoGalleryContent from '@/module/photoGallery/component/PhotoGalleryContent.vue'
import PhotoGalleryPhoto from '@/module/photoGallery/domain/PhotoGalleryPhoto.js'
import PhotoGalleryContentImage from '@/module/photoGallery/component/PhotoGalleryContentImage.vue'

const mockPhotos = [
  new PhotoGalleryPhoto({ title: 'one', src: 'http://one.com' }),
  new PhotoGalleryPhoto({ title: 'two', src: 'http://two.com' })
]

describe('PhotoGalleryContent.vue', () => {
  it('renders the correct amount of photo gallery content images', async () => {
    const wrapper = shallowMount(PhotoGalleryContent, { propsData: { images: [] } })

    expect(wrapper.findAllComponents(PhotoGalleryContentImage).length).toBe(0)

    wrapper.setProps({ images: mockPhotos })
    await wrapper.vm.$nextTick()

    expect(wrapper.findAllComponents(PhotoGalleryContentImage).length).toBe(2)
  })

  it('renders photo gallery image with correct props', () => {
    const wrapper = shallowMount(PhotoGalleryContent, { propsData: { images: mockPhotos } })

    wrapper.findAllComponents(PhotoGalleryContentImage).wrappers.forEach((wrapper, i) => {
      const props = wrapper.props()
      expect(props.src).toBe(mockPhotos[i].src)
      expect(props.title).toBe(mockPhotos[i].title)
    })
  })
})
