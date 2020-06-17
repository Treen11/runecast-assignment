import { shallowMount } from '@vue/test-utils'
import PhotoGallery from '@/module/photoGallery/component/PhotoGallery.vue'
import PhotoGalleryHeader from '@/module/photoGallery/component/PhotoGalleryHeader.vue'
import PhotoGalleryContent from '@/module/photoGallery/component/PhotoGalleryContent.vue'
import PhotoGalleryPhoto from '@/module/photoGallery/domain/PhotoGalleryPhoto.js'
import photoGalleryService from '@/module/photoGallery/service/photoGalleryService.js'

const mockPhotos = [
  new PhotoGalleryPhoto({ title: 'one', src: 'http://one.com' }),
  new PhotoGalleryPhoto({ title: 'two', src: 'http://two.com' })
]

photoGalleryService.getNewPhotos = jest.fn(() => Promise.resolve(mockPhotos))

describe('PhotoGallery.vue', () => {
  it('renders photo gallery header', () => {
    const wrapper = shallowMount(PhotoGallery)

    expect(wrapper.findComponent(PhotoGalleryHeader).exists()).toBeTruthy()
  })

  it('correctly reacts to grayscale-switch-changed event', () => {
    const wrapper = shallowMount(PhotoGallery)
    const header = wrapper.findComponent(PhotoGalleryHeader)

    wrapper.setData({ grayscale: false })
    header.vm.$emit('grayscale-switch-changed', true)

    expect(wrapper.vm.$data.grayscale).toBe(true)
  })

  it('correctly reacts to fetch-button-clicked event', async () => {
    const wrapper = shallowMount(PhotoGallery)
    const header = wrapper.findComponent(PhotoGalleryHeader)

    wrapper.setData({ images: [] })
    header.vm.$emit('fetch-button-clicked')

    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$data.images).toEqual(mockPhotos)
  })

  it('renders photo gallery content with correct props', async () => {
    const wrapper = shallowMount(PhotoGallery)
    const photoGalleryContent = wrapper.findComponent(PhotoGalleryContent)

    await wrapper.vm.$nextTick()
    expect(photoGalleryContent.exists()).toBeTruthy()
    expect(photoGalleryContent.props().images).toEqual(mockPhotos)
  })

  it('correctly adds grayscale class to content', async () => {
    const wrapper = shallowMount(PhotoGallery)
    const content = wrapper.findComponent(PhotoGalleryContent)

    wrapper.setData({ grayscale: false })
    await wrapper.vm.$nextTick()
    expect(content.classes()).not.toContain('grayscale')

    wrapper.setData({ grayscale: true })
    await wrapper.vm.$nextTick()
    expect(content.classes()).toContain('grayscale')
  })
})
