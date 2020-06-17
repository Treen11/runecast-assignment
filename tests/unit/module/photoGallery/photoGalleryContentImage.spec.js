import { shallowMount } from '@vue/test-utils'
import PhotoGalleryContentImage from '@/module/photoGallery/component/PhotoGalleryContentImage.vue'
import PhotoGalleryPhoto from '@/module/photoGallery/domain/PhotoGalleryPhoto.js'

const mockPhoto = new PhotoGalleryPhoto({ title: 'one', src: 'http://two.com' })

describe('PhotoGalleryContentImage.vue', () => {
  it('renders img with correct attributes', () => {
    const mockAlt = 'my alt'
    const wrapper = shallowMount(PhotoGalleryContentImage, {
      propsData: {
        src: mockPhoto.src,
        alt: mockAlt
      }
    })
    const attributes = wrapper.find('img').attributes()

    expect(attributes.src).toBe(mockPhoto.src)
    expect(attributes.alt).toBe(mockAlt)
  })

  it('renders correct title', () => {
    const wrapper = shallowMount(PhotoGalleryContentImage, {
      propsData: {
        title: mockPhoto.title,
        src: mockPhoto.src
      }
    })

    expect(wrapper.find('.title').text()).toBe(mockPhoto.title)
  })

  it('renders correct src', () => {
    const wrapper = shallowMount(PhotoGalleryContentImage, {
      propsData: {
        src: mockPhoto.src
      }
    })

    expect(wrapper.find('.src').text()).toBe(mockPhoto.src)
  })
})
