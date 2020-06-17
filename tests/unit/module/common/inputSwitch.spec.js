import { shallowMount, createLocalVue } from '@vue/test-utils'
import InputSwitch from '@/module/common/component/InputSwitch.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const localVue = createLocalVue()
localVue.component('icon', FontAwesomeIcon)

describe('InputSwitch.vue', () => {
  it('renders label correctly', () => {
    const label = 'Switch label'
    const wrapper = shallowMount(InputSwitch, {
      propsData: { label },
      localVue
    })
    expect(wrapper.text()).toBe(label)
  })

  it('emits change event on click', async () => {
    const wrapper = shallowMount(InputSwitch, { localVue })

    wrapper.find('label').trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted().change).toBeTruthy()
  })
})
