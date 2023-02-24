import {mount} from '@vue/test-utils'
import {nextTick, ref} from 'vue'
import BNotification from "../Notification";
import BNotificationService from "../notification-service";
import NotificationService from "../notification-service";

describe('b-notification', () => {
  /** 测试notification 基本设置渲染正确 */
  it('render correctly when using compoent', async () => {
    const wrapper = mount({
      setup() {
        const show = ref(true)
        return () => (
          <BNotification v-model={show.value} title='标题'>
            通知提示内容
          </BNotification>
        )
      }
    })
    await nextTick()
    const notification = wrapper.find('.b-notification')
    const notificationTitle = notification.find('.b-notification__title')
    const notificationContent = notification.find('.b-notification__content')
    expect(notification.exists()).toBeTruthy();
    expect(notificationTitle.text()).toBe('标题');
    expect(notificationContent.text()).toBe('通知提示内容');
    wrapper.unmount();
  })

  describe('service', () => {
    let notification: HTMLElement | null;

    afterEach(() => {
      notification?.parentNode?.removeChild(notification)
    })

    it('render correctly when using service', async () => {
      BNotificationService.open({
        content: '通知框消息内容'
      })
      await nextTick()
      notification = document.querySelector('.b-notification')
      const notificationContent = document.querySelector('.b-notification__content')
      expect(notification).toBeTruthy()
      expect(notificationContent?.innerHTML).toBe('通知框消息内容')
    })

    it('title render correctly', async () => {
      BNotificationService.open({
        title: '消息标题',
        content: '通知框消息内容'
      })
      await nextTick()
      notification = document.querySelector('.b-notification__title')
      const notificationTitle = document.querySelector('.b-notification__title')
      expect(notificationTitle?.innerHTML).toBe('消息标题');
    })

    it('notification type', async () => {
      BNotificationService.open({
        title: '消息标题',
        content: '通知框消息内容',
        type: 'normal',
      });
      await nextTick();
      notification = document.querySelector('.b-notification');
      const notificationImage = document.querySelector('.b-notification__image');
      expect(notificationImage?.className).toContain('b-notification__image-normal');
    });

    it('duration', async () => {
      BNotificationService.open({
        title: '消息标题',
        content: '通知框消息内容',
        duration: 1000
      })
      await nextTick()
      notification = document.querySelector('.b-notification')
      expect(notification).toBeTruthy()
      await new Promise((resolve) => {
        setTimeout(resolve, 3000)
      })
      expect(document.querySelector('.b-notification')).toBeFalsy()
      notification = null
    })

    it('close callback', async () => {
      const closeCallback = jest.fn();
      BNotificationService.open({
        title: '消息标题',
        content: '通知框消息内容',
        duration: 1000,
        onClose: closeCallback,
      });
      await nextTick();
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      // toBeCalled 确保调用模拟函数
      expect(closeCallback).toBeCalled();
      notification = null;
    });
  })
})