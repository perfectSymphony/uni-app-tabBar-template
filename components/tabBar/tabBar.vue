<template>
<view>
	<swiper style="height: 100vh;" v-show="hidden" :current="currentTabIndex"  @change="swiperChange">
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
	export default {
		data() {
			return {
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
						pagePath: "pages/tabBar/process/process",
						iconPath: "/static/order.png",
						selectedIconPath: "/static/ordered.png",
						text: "订单"
					},
					{
						pagePath: "pages/tabBar/personal/personal",
						iconPath: "/static/my.png",
						selectedIconPath: "/static/my.png",
						text: "我的"
					}					
				],
				currentTabIndex: this.current,
				hidden: false
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
				default: '#999'
			},
			tintColor: {
				type: String,
				default: '#F85959'
			}
		},
		methods: {
			switchTab(index,item) {
				this.currentTabIndex = index
				this.$emit('click', index)		
			},
			swiperChange(e){
				this.currentTabIndex = e.detail.current;
			}
		},
	}
</script>

<style lang="scss" scoped>
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
