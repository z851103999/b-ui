import { defineConfig } from '@varlet/cli'

export default defineConfig({
	logo: './logo.svg',
	name: 'B-UI',
	namespace: 'b',
	title: 'B-UI',
	useMobile: false,
	pc: {
		header: {
			darkMode: null,
			i18n: null,
			playground: null,
		},
		menu: [
			{
				text: {
					'zh-CN': '开发指南',
				},
				doc: 'index',
				type: 1,
			},
			{
				text: {
					'zh-CN': '基本介绍',
				},
				doc: 'home',
				type: 3,
			},
			{
				text: {
					'zh-CN': '基础组件',
				},
				type: 1,
			},
			{
				text: {
					'zh-CN': 'Button 按钮',
				},
				doc: 'button',
				type: 2,
			},
			{
				text: {
					'zh-CN': 'Icon 图标',
				},
				doc: 'icon',
				type: 3,
			},
			{
				text: {
					'zh-CN': 'Layout 布局',
				},
				doc: 'col',
				type: 4,
			},
			{
				text: {
					'zh-CN': 'Space 间隔',
				},
				doc: 'space',
				type: 5,
			},
			{
				text: {
					'zh-CN': 'Card 卡片',
				},
				doc: 'card',
				type: 6,
			},
			{
				text: {
					'zh-CN': 'BreadCrumb 面包屑',
				},
				doc: 'breadcrumb',
				type: 7,
			},
			{
				text: {
					'zh-CN': 'Tag 标签',
				},
				doc: 'tags',
				type: 8,
			},
			{
				text: {
					'zh-CN': 'Slider 滑动输入条',
				},
				doc: 'slider',
				type: 9,
			},
			{
				text: {
					'zh-CN': 'Switch 开关',
				},
				doc: 'switch',
				type: 10,
			},
			{
				text: {
					'zh-CN': 'Alert 提示',
				},
				doc: 'alert',
				type: 11,
			},
			{
				text: {
					'zh-CN': 'Rate 评星',
				},
				doc: 'rate',
				type: 12,
			},
			{
				text: {
					'zh-CN': 'Message 消息',
				},
				doc: 'message',
				type: 13,
			},
			{
				text: {
					'zh-CN': 'Collapse 折叠'
				},
				doc: 'collapse',
				type: 14,
			}
		],
	},
	mobile: {
		header: {
			i18n: null,
			darkMode: null
		}
	}
})