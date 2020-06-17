import { shallowMount } from '@vue/test-utils'
import PhotoGalleryHeader from '@/module/photoGallery/component/PhotoGalleryHeader.vue'
import InputSwitch from '@/module/common/component/InputSwitch.vue'
import BtnPrimary from '@/module/common/component/BtnPrimary.vue'

describe('PhotoGalleryContentHeader.vue', () => {
  it('renders input switch', () => {
    const wrapper = shallowMount(PhotoGalleryHeader)

    expect(wrapper.findComponent(InputSwitch).exists()).toBe(true)
  })

  it('renders button primary', () => {
    const wrapper = shallowMount(PhotoGalleryHeader)

    expect(wrapper.findComponent(BtnPrimary).exists()).toBe(true)
  })

  it('correctly reacts to change event on the input switch', async () => {
    const wrapper = shallowMount(PhotoGalleryHeader)
    const inputSwitch = wrapper.findComponent(InputSwitch)
    const mockEvent = { target: { checked: true } }

    inputSwitch.vm.$emit('change', mockEvent)
    await wrapper.vm.$nextTick()
    const emitted = wrapper.emitted()['grayscale-switch-changed']

    expect(emitted).toBeTruthy()
    expect(emitted[0]).toEqual([true])
  })

  it('correctly reacts to click event on the btn primary', async () => {
    const wrapper = shallowMount(PhotoGalleryHeader)
    const btnPrimary = wrapper.findComponent(BtnPrimary)

    btnPrimary.vm.$emit('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted()['fetch-button-clicked']).toBeTruthy()
  })
})
