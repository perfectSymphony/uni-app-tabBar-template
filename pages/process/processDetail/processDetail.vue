<template>
	<view class="wrapper">
		<view class="process-wapper">
			<view>
				<uni-card title="城乡居民医疗保险登记" thumbnail="/static/thumbnail.png" is-shadow="true" is-full="true">
						<view class="base-info">
							申报编号: xxxxxxxxxxxx  <br />
							申报时间: xxxxxxxxxxxx  <br />
							办件状态: xxxx
						</view>
				</uni-card>
			</view>
			<view style="margin-top: 20rpx;">
				<uni-card title="办事人信息" thumbnail="/static/thumbnail.png" is-shadow="true" is-full="true">
						<view class="base-info">
							办事人姓名：xxxx  <br />
							身份证号: xxxxxxxxxxxxxx  <br />
							所属街道: xxxxxx     <br />
							所属社区: xxxxxx     <br />
						</view>
				</uni-card>
			</view>			
		</view>
		<view class="uni-padding-wrap uni-common-mt">
			<button type="primary" @click="processDetail()">返回</button>
		</view>		
	</view>
</template>

<script>
	
	import { UniCard } from '@dcloudio/uni-ui'
	
	export default {
		components: {
			UniCard
		},
		data() {
			return {

			}
		},
		methods: {
			processDetail: function(){
				uni.navigateTo({
					url: 'pages/tabBar/process/process'
				})				
			}
		}
	}
</script>

<style lang="scss" scoped>

	.process-wapper {
		margin-top: 40px;
		
		.base-info {
			width: 80%;
			margin: 0rpx auto;
			padding: 30rpx;
			line-height: 2.4;
			font-size: 26rpx;
		}
		
		/deep/ .uni-steps-item-circle-container {
			background-color: transparent;
		}
		
		/deep/ .uni-card__header-title-text {
			font-size: 27rpx;
			font-weight: 700;
		}
		
		/deep/ .uni-card--full {
			border-radius: 15rpx;
			.uni-card__header-extra-img {
				width: 8rpx;
				height: 30rpx;
			}
			.uni-card__content--pd {
				color: #9F9F9F;
				font-size: 26rpx;
			}
		}				
	}
	
	/deep/ .uni-padding-wrap {
		width: 300rpx;
		margin: 60rpx auto;
		button[type=primary] {
			background-color: #216EBE;
			border-radius: 70rpx;
			font-size: 30rpx;
		}
	}	
	
</style>
