import { mount } from '@vue/test-utils'
import BBadge from '../badge'

const contentClass = 'b-badge__content';
const dotClass = 'b-badge--dot';
const dotHiddenClass = 'b-badge--hidden';
const dotShowClass = 'b-badge--show';
const infoStatusClass = 'b-badge--info';
const dangerStatusClass = 'b-badge--danger';
const warningStatusClass = 'b-badge--warning';
const waitingStatusClass = 'b-badge--waiting';
const successStatusClass = 'b-badge--success';
const commonStatusClass = 'b-badge--common';
const topLeftPositionClass = 'b-badge--top-left';
const topRightPositionClass = 'b-badge--top-right';
const bottomLeftPositionClass = 'b-badge--bottom-left';
const bottomRightPositionClass = 'b-badge--bottom-right';

const SLOT = 'This is a slot test'

describe('badge', () => {
    // 基本测试
    it('badge base', () => {
        const wrapper = mount(BBadge, {
            props: { count: 80 },
            slots: { default: SLOT }
        })
        expect(wrapper.vm.count).toEqual(80)
    })
    // 默认不传递show-dot 默认为基本徽章
    it('badge dot', async () => {
        const wrapper = mount(BBadge, {
            slots: { default: SLOT }
        })
        expect(wrapper.find(contentClass + dotClass).exists()).toBe(false)
        await wrapper.setProps({
            showDot: true
        })
        expect(wrapper.find(contentClass + dotClass).exists()).toBe(true);
        await wrapper.setProps({
            showDot: false,
        });
        expect(wrapper.find(contentClass + dotClass).exists()).toBe(false);
    })
    // 
    it('badge max', () => {
        const wrapper = mount(BBadge, {
            props: { count: 100 },
        });
        expect(wrapper.find(contentClass).text()).toBe('99+');

        const wrapper2 = mount(BBadge, {
            props: { count: 100, maxCount: 1000 },
        });
        expect(wrapper2.find(contentClass).text()).toBe('100');
    });

    it('badge bgColor', () => {
        const wrapper = mount(BBadge, {
            props: { bgColor: 'red' },
            slots: { default: SLOT },
        });
        expect(wrapper.find(contentClass).attributes().style).toBe('background: red;');
    });

    it('badge offsetXY', () => {
        const wrapper = mount(BBadge, {
            props: { offset: [-10, 10], position: 'top-right' },
            slots: { default: SLOT },
        });
        // TODO: 未覆盖 position
        expect(wrapper.find(contentClass).attributes().style).toBe('top: 10px; right: -10px;');
    });

    it('badge hidden', async () => {
        const wrapper = mount(BBadge, {
            props: { hidden: false },
            slots: { default: SLOT },
        });
        expect(wrapper.find(dotHiddenClass).exists()).toBe(false);
        expect(wrapper.find(dotShowClass).exists()).toBe(true);

        await wrapper.setProps({
            hidden: true,
        });

        expect(wrapper.find(dotHiddenClass).exists()).toBe(true);
        expect(wrapper.find(dotShowClass).exists()).toBe(false);
    });

    it('props status work well.', async () => {
        // 不传递status时，默认为info
        const wrapper = mount(BBadge, {
            slots: { default: SLOT },
        });
        expect(wrapper.find(contentClass + infoStatusClass).exists()).toBe(true);

        await wrapper.setProps({
            status: 'danger',
        });
        expect(wrapper.find(contentClass + dangerStatusClass).exists()).toBe(true);

        await wrapper.setProps({
            status: 'warning',
        });
        expect(wrapper.find(contentClass + warningStatusClass).exists()).toBe(true);

        await wrapper.setProps({
            status: 'waiting',
        });
        expect(wrapper.find(contentClass + waitingStatusClass).exists()).toBe(true);

        await wrapper.setProps({
            status: 'success',
        });
        expect(wrapper.find(contentClass + successStatusClass).exists()).toBe(true);

        await wrapper.setProps({
            status: 'info',
        });
        expect(wrapper.find(contentClass + infoStatusClass).exists()).toBe(true);

        await wrapper.setProps({
            status: 'common',
        });
        expect(wrapper.find(contentClass + commonStatusClass).exists()).toBe(true);
    });

    it('props position work well.', async () => {
        const wrapper = mount(BBadge, {
            props: { position: 'top-left' },
            slots: { default: SLOT },
        });
        expect(wrapper.find(contentClass + topLeftPositionClass).exists()).toBe(true);

        await wrapper.setProps({
            position: 'top-right',
        });
        expect(wrapper.find(contentClass + topRightPositionClass).exists()).toBe(true);

        await wrapper.setProps({
            position: 'bottom-left',
        });
        expect(wrapper.find(contentClass + bottomLeftPositionClass).exists()).toBe(true);

        await wrapper.setProps({
            position: 'bottom-right',
        });
        expect(wrapper.find(contentClass + bottomRightPositionClass).exists()).toBe(true);
    });


})
