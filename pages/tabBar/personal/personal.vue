<template>
	<view class="wrapper">
		<form @submit="formSubmit">
			<view style="padding-top: 20rpx;">
				<uni-card title="基本信息" thumbnail="/static/placeholder.png" is-shadow="true" is-full="true">
					<view class="lzw-select">
						<view>
							<view>姓名:</view>
							<view>
								<input class="uni-input" name="name" placeholder="请填写姓名" />
							</view>				
						</view>				
						<view>
							<view>身份证号:</view>
							<view>
								<input type="idcard" class="uni-input" name="idCard" placeholder="请填写身份证号" />
							</view>
						</view>				
						<view>
							<view>性别:</view>
							<view>
								<radio-group class="uni-flex" name="gender">
									<label>
										<radio value="男" color="#F85959" />男</label>
									<label>
										<radio value="女" color="#F85959" />女</label>
								</radio-group>						
							</view>
						</view>				
						<view>
							<view>出生日期:</view>
							<view class="calendar">
								<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange" name="calendar">
									<view class="uni-input">{{date}}</view>
								</picker>
								<image src="/static/calendar.png" mode="aspectFill" />
							</view>
						</view>				
						<view>
							<view>手机号码:</view>
							<view>
								<input type="number" class="uni-input" name="phone" placeholder="请填写手机号码" />
							</view>
						</view>				
						<view>
							<view>水果种类:</view>
							<input type="hidden" style="height: 0; width: 0;" name="street" v-model="globalVal" value="" />
							<lzw-select
								:list="list"
								:clearable="false"
								:listShow="false"
								:isCanInput="true"  
								:style_Container="'height: 45px; font-size: 26rpx;border:none;'"
								:initValue="'请选择水果种类'"
								:selectHideType="'hideAll'"
								@change="change"
							 />				
						</view>				
						<view>
							<view>应聘职位:</view>
							<view>
								<input type="text" class="uni-input" name="settle" placeholder="请填写应聘职位" />
							</view>
						</view>
						<view>
							<view>现居住地址:</view>
							<view>
								<input type="text" class="uni-input" name="address" placeholder="请填写现居住地址" />
							</view>
						</view>
					</view>
				</uni-card>
			</view>
			<view class="step-btns">
				<button type="primary">上一步</button>
				<button type="primary" formType="submit">下一步</button>
			</view>
		</form>
	</view>
</template>

<script>
	
	import { UniCard } from '@dcloudio/uni-ui'
	import lzwSelect from '../../../components/select/select.vue'
	var  graceChecker = require("../../../common/graceChecker.js");
	
	function getDate(type) {
		const date = new Date();
	
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
	
		if (type === 'start') {
			year = year - 60;
		} else if (type === 'end') {
			year = year + 2;
		}
		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;
	
		return `${year}-${month}-${day}`;
	}
	
	export default {
		components: {
			UniCard,
			lzwSelect
		},
		data() {
			return {
				globalVal: '',
				list: [       
					'苹果',
					'香蕉',
					'葡萄',
					'芒果',
					'大白菜',
					'葡萄',
					'芒果',
					'大白菜',
				],
				date: '请选择出身日期',
				startDate:getDate('start'),
				endDate:getDate('end')
			}
		},
		methods: {
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			change: function({newVal}){ 
				this.globalVal = newVal;
			},
			formSubmit: function(e){
				var rule = [
					{name:"name", checkType : "string", checkRule:"1,5",  errorMsg:"姓名应为1-3个字符"},
					{name:"idCard", checkType : "notnull", checkRule:"",  errorMsg:"请填写正确的身份证号"},
					{name:"gender", checkType : "in", checkRule:"男,女",  errorMsg:"请选择性别"},
					{name:"calendar", checkType : "notnull", checkRule:"",  errorMsg:"请选择出生日期"},
					{name:"phone", checkType : "phoneno", checkRule:"",  errorMsg:"请填写手机号"},
					{name:"street", checkType : "notnull", checkRule:"",  errorMsg:"请选择喜欢的水果"},
					{name:"settle", checkType : "notnull", checkRule:"",  errorMsg:"请填写应聘职位"},
					{name:"address", checkType : "notnull", checkRule:"",  errorMsg:"请填写现居住地址"}
				];
				
				var formData = e.detail.value;
				var checkRes = graceChecker.check(formData, rule);
				if(checkRes){					
					uni.showToast({title:"验证通过!", icon:"none"});
					// uni.navigateTo({
					// 		url: ''
					// })	
				}else{
					uni.showToast({ title: graceChecker.error, icon: "none" });
				}							
			}							
		}
	}
</script>

<style lang="scss" scoped>
	
	/deep/ .uni-card--full {
		border-radius: 15rpx;
		.uni-card__header-extra-img {
			width: 30rpx;
			height: 30rpx;
		}
		.uni-card__content--pd {
			color: #9F9F9F;
			font-size: 26rpx;
		}
	}
	
	/deep/ .uni-card__header:after {
		height: 0;
	}
	
	/deep/ .uni-steps-item-circle-container {
		background-color: transparent;
	}
	
	.lzw-select {
		width: 80%; 
		margin: auto;
		border-top:1rpx solid #E4E4E4; 
		padding: 15rpx;
		z-index: -1;
		& > view {
			color: #000;
			display: flex;
			margin-top: 10rpx;	
			border-bottom: 1rpx solid #E4E4E4;
			view:first-child {
				flex: 3;
				text-align: right;
				margin-top: 20rpx;
				margin-right: 30rpx;
			}
			view:last-child {
				flex: 6;
			}
			.calendar {
				display: flex;
				cursor: pointer;
				position: relative;
				
				.uni-input {
					width: 280rpx;
					margin: 0;
					text-align: left;
					color: #808080;
				}
				
				image {
					width: 30rpx;
					height: 30rpx;
					position: absolute;
					top: 40%;
					right: 0%;
				}
			}
		}

		.uni-flex {
			margin: 10rpx 0 0 10rpx;
			
			label {
				padding-right: 59rpx;
				
				radio {
					transform:scale(0.7);
				}				
			}
		}

		& > view:first-child {
			margin-top: 0;
		}		
		& > view:last-child {
			border: none;
		}
		
		/deep/ .show-box .list-container {
			position: absolute; 
			top: -300rpx;
			left: -220rpx;			
		}
		
	}
	
	.step-btns {
		display: flex;
		button[type="primary"]{
			width: 250rpx;
			margin-top: 60rpx;
			border-radius: 70rpx;
			font-size: 30rpx;
		}
		button:first-child {
			background: #fff;
			border: 1rpx solid #F85959;
			color: #F85959;
		}
		button:last-child {
			background: #F85959;			
		}
	}
</style>
