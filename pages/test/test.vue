<template>
<view>
	<swiper style="height: 100vh;" :current="currentTabIndex"  @change="swiperChange">
		<swiper-item>
			<index></index>
		</swiper-item>
		<swiper-item>
			<index></index>
		</swiper-item>
		<swiper-item>
			<index></index>
		</swiper-item>
		<swiper-item>
			<personal></personal>
		</swiper-item>
	</swiper>
	<view class="nav-bar">
		<block v-for="(item,index) in tabList" :key="index">
			<view class="navigator" @tap="switchTab(index,item)">
				<image class="nav-icon" :src="currentTabIndex == index ? item.selectedIconPath : item.iconPath" mode="aspectFill" />
				<view class="text" :style="[currentTabIndex == index ? {'color': tintColor} : {'color': color}]">{{item.text}}</view>
			</view>
		</block>
	</view>
</view>
</template>

<script>
	import index from '@/pages/tabBar/index/index.vue'
	import personal from '@/pages/tabBar/personal/personal.vue'
	
	export default {
		components: {
			index,
			personal
		},
		data() {
			return {
				currentTabIndex: this.current,
				tabList: [{
						pagePath: "pages/tabBar/index/index",
						iconPath: "/static/home.png",
						selectedIconPath: "/static/homed.png",
						text: "首页"
					},
					{
						pagePath: "pages/tabBar/index/index",
						iconPath: "/static/cart.png",
						selectedIconPath: "/static/carted.png",
						text: "购物车"
					},
					{
						pagePath: "pages/tabBar/index/index",
						iconPath: "/static/order.png",
						selectedIconPath: "/static/ordered.png",
						text: "订单"
					},
					{
						pagePath: "pages/tabBar/personal/personal",
						iconPath: "/static/mine.png",
						selectedIconPath: "/static/my.png",
						text: "我的"
					}					
				]
			}
		},
		props: {
			current: {
				type: [Number, String],
				default: 0
			},
			backgroundColor: {
				type: String,
				default: '#fbfbfb'
			},
			color: {
				type: String,
				default: '#000'
			},
			tintColor: {
				type: String,
				default: '#F85959'
			}
		},
		methods: {
			switchTab(index,item) {
				console.log(index)
				this.currentTabIndex = index
				this.$emit('click', index)		
			},
			swiperChange(e){
				console.log(e)
				this.currentTabIndex = e.detail.current;
			}
		},
	}
</script>

<style lang="scss" scoped>
	.swiper-item {
		display: flex;
		width: 100%;
		height: 100%;
		text-align: center;
		background-color: #00BFFF;
		justify-content: center;
		align-items: center;
	}
		
	.nav-bar {
		display: flex;
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		padding-bottom: 30rpx;
		border-top: 1px solid #E4E4E4;
		position: fixed;
		left: 0;
		bottom: 0rpx;
		z-index: 1;
		background: #fff;
		.navigator {
			flex: 4;
			text-align: center;
			height: 20rpx;
			padding-top: 10rpx;
			.nav-icon {
				width: 50rpx;
				height: 50rpx;
			}
		}
		/deep/ view:last-child {
			font-size: 22rpx;
		}
	}
</style>
