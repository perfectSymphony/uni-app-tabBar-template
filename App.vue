<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onTabItemTap:function(item) {
			console.log(item.pagePath)
			console.log(item.text)
		}		
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import './common/uni.css';
	@import './common/common.css';
	
	.wrapper {
		margin: 0 30rpx;
		.navigation-background {
			margin: 20rpx 0;
			border-radius: 15rpx;
			.image {
				width: 80upx;
				height: 80upx;
			}
			.text {
				font-size: 26upx;
				margin-top: 10upx;
			}		
		}
		
		.service {
			.btns {
				border: 1rpx solid #216EBE;
				border-radius: 10rpx;
				margin-top: -10rpx;
				padding: 8rpx;
				background: #216EBE;
				color: #fff;
				font-size: 24rpx;
			}
			.title-icon {
				display: inline-block;
				width: 35rpx;
				height: 35rpx;
				margin-right: 10rpx;
				vertical-align: middle;
			}
		}	
	}
</style>
