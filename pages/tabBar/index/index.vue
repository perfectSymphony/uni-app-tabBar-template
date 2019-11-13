<template>
	<view class="wrapper">
		<view class="uni-margin-wrap">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item>
					<view class="swiper-item uni-bg-red"></view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green"></view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue"></view>
				</swiper-item>
			</swiper>
		</view>
		<view class="navigation-background service">
			<view class="title">
				<view>
					<image class="title-icon" src="/static/placeholder.png" mode="aspectFit"></image>
					uni-app导航
				</view>
			</view>		
			<view>
				<uni-grid
				:column="3"
				:show-border="false"
				:square="false">
				<uni-grid-item
					v-for="(item, index) in list"
					:key="index">
					<image
					:src="item.src"
					class="image"
					mode="aspectFill"
					@click="getDetailPage(index)"
					/>
					<text class="text">{{ item.text }}</text>
				</uni-grid-item>
				</uni-grid>					
			</view>
		</view>
		<view class="navigation-background service">
			<view class="title">
				<view>
					<image class="title-icon" src="/static/placeholder.png" mode="aspectFit"></image>
					uni-app功能展示					
				</view>
				<view v-for="(item,index) in iconClassList" :key="index" class="icon-item">
					更多
					<uni-icons :type="item" :color="activeIndex === index?'#007aff':'#8f8f94'" size="15" />
				</view>	
			</view>
			<view>
				<uni-grid
				:column="4"
				:show-border="false"
				:square="false"
				@change="change">
				<uni-grid-item
					v-for="(item, index) in items"
					:key="index">
					<image
					:src="item.url"
					class="image"
					mode="aspectFill" />
					<text class="text">{{ item.text }}</text>
				</uni-grid-item>
				</uni-grid>				
			</view>
		</view>
	</view>
</template>
<script>
	
	import {uniGrid, uniGridItem, uniIcons } from '@dcloudio/uni-ui'
	
	export default {
		components: {
			uniGrid,
			uniGridItem,
			uniIcons
		},
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				activeIndex: -1,
				iconClassList: [
					'forward'
				],
				currentTabIndex: 0,
				list: [
					{
						src: '/static/placeholder.png',
						text: '导航1',
						url: 'test'
					},
					{
						src: '/static/placeholder.png',
						text: '导航2',
						url: 'test'
					},
					{
						src: '/static/placeholder.png',
						text: '导航3',
						url: 'test'
					}
				],
				items: [{
						url: '/static/placeholder.png',
						text: '示例'
					},
					{
						url: '/static/placeholder.png',
						text: '示例'
					},
					{
						url: '/static/placeholder.png',
						text: '示例'
					},
					{
						url: '/static/placeholder.png',
						text: '示例'
					},
					{
						url: '/static/placeholder.png',
						text: '示例'
					},
					{
						url: '/static/placeholder.png',
						text: '示例'
					},
					{
						url: '/static/placeholder.png',
						text: '示例'
					},
					{
						url: '/static/placeholder.png',
						text: '示例'
					}
				]
			}
		},
		methods: {
			getDetailPage(e){
					const url = this.list[e].url;
					
					console.log(e);	
					// 这里没有实际业务场景，暂时注释
					// uni.navigateTo({
					// 	url: '/pages/' + url + '/' + url
					// })					
			},
			change(){
				console.log(123);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.swiper {
		height: 300upx;
		margin-top: 30rpx;
		.swiper-item {
			display: block;
			height: 300upx;
			line-height: 300upx;
			text-align: center;
		}			
	}
	
	.navigation-background {
		background-color: #FFFFFF;
	}
	
	.service {
		margin-top: 30rpx;
		/deep/ .title {
			display: flex;
			justify-content: space-between;			
			padding: 15rpx 20rpx 15rpx 15rpx;
			border-radius: 15rpx 15rpx 0 0;
			border-bottom: 1rpx solid #EAEAEA;
			color: #8E8E90;
			background-color: #FFFFFF;
		}
	}
	
	.icon-item {
		width: 100rpx;
		height: 30rpx;
		font-size: 28rpx;
		flex-direction: row;
		justify-content: flex-end;
	}
</style>
