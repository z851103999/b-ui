import { props } from './../../space/props';
import { mount } from '@vue/test-utils'
import BRate from '../index'
import { nextTick, ref } from 'vue'

describe('rate', () => {
	describe('rate basic', () => {
		const TestComponent = {
			component: {
				'b-rate': BRate
			},
			template: `
			<div>
			  <b-rate v-model='value' icon='coordinates' />
			</div>
			`,
			setup() {
				const value = ref(0)
				return {
					value
				}
			}
		}
		const wrapper = mount(TestComponent)
		it('Rate demo has create successfully', async () => {
			expect(wrapper).toBeTruthy()
		})
	})


	describe('rate change', () => {
		it('Rate can be change', async () => {
			const wrapper = mount({
				components: {
					'b-rate': BRate
				},
				template: `
			  <div>
				  <b-rate v-model='value' icon='coordinates' />
					<div class="count">当前有{{value}}</div>
				</div>
			`,
				setup() {
					const value = ref(0)
					return {
						value
					}
				}
			})

			await nextTick()
			const starEles = wrapper.findAll('.b-star-align')

			const container = wrapper.find('.b-star-container')
			const firstStarEle = starEles[0]
			const thirdStarEle = starEles[2]
			const fourthStarEle = starEles[3]

			expect(starEles.length).toBe(5)

			await fourthStarEle.trigger('mouseover')

			expect(fourthStarEle.find('.b-star-color-active').attributes('style')).toBe('width: 100%;')

			await container.trigger('mouseleave')
			expect(fourthStarEle.find('.b-star-color-active').attributes('style')).toBe('width: 0px;')
			expect(wrapper.find('.count').html()).toContain('0')

			await firstStarEle.trigger('click')

			expect(wrapper.find('.count').html()).toContain('1')

			await thirdStarEle.trigger('click')
			expect(wrapper.find('.count').html()).toContain('3')

			await container.trigger('mouseleave')
			expect(fourthStarEle.find('.b-star-color-active').attributes('style')).toBe('width: 0px;')
			expect(wrapper.find('.count').html()).toContain('3')
		})
	})

	describe('read only', () => {
		const TestComponent = {
			components: {
				'b-rate': BRate,
			},
			template: `
        <div>
          <b-rate v-model="value" icon="star-o" :read="true"/>
          <div class="count">当前有{{ value }}颗星</div>
        </div>
      `,
			setup() {
				const value = ref(3)

				return {
					value,
				}
			},
		}
		const wrapper = mount(TestComponent)

		it('Rate should have content', async () => {
			expect(wrapper.find('.b-star-container').exists()).toBeTruthy()
		})

		it('Rate should not be changed', async () => {
			const starEles = wrapper.findAll('.b-star-align')

			const firstStarEle = starEles[0]
			const thirdStarEle = starEles[2]
			const fourthStarEle = starEles[3]

			await firstStarEle.trigger('click')
			expect(wrapper.find('.count').html()).toContain('3')

			await thirdStarEle.trigger('click')
			expect(wrapper.find('.count').html()).toContain('3')

			await fourthStarEle.trigger('click')
			expect(wrapper.find('.count').html()).toContain('3')
		})
	})
})