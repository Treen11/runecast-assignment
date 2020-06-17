import { shallowMount } from '@vue/test-utils'
import BtnPrimary from '@/module/common/component/BtnPrimary.vue'

describe('BtnPrimary.vue', () => {
  it('renders text correctly', () => {
    const text = 'My button text'
    const wrapper = shallowMount(BtnPrimary, {
      propsData: { text }
    })
    expect(wrapper.text()).toBe(text)
  })

  it('emits click event on click', async () => {
    const wrapper = shallowMount(BtnPrimary)

    wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted().click).toBeTruthy()
  })
})
