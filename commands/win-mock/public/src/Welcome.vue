<template>
	<div class="welcome">
		<div class="login-form">
			<div class="close">Welcome</div>
			<div class="head-info">
				<label class="lbl-1"> </label>
				<label class="lbl-2"> </label>
				<label class="lbl-3"> </label>
			</div>
			<div class="main">
				欢迎使用win-mock，当前为内部评估版本，不需要登录即可使用！
			</div>
			<div class="signin">
				<input type="submit" value="Get started now" @click="start()">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'welcome',
		methods:{
			start(){
				this.$router.replace({
					name: 'dashboard'
				});
			}
		}
	}
</script>

<style>
	.welcome {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-image: url(assets/imgs/bg1.jpg);
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}

	.login-form {
		background: #2b2b36;
		position: relative;
		width: 30%;
		margin: 5% auto 0 auto;
		text-align: center;
		border-radius: 15px;
		-webkit-border-radius: 15px;
		-moz-border-radius: 15px;
		-o-border-radius: 15px;
	}

	.login-form .main{
		color: #f1f1f1;
		text-align: center;
		min-height: 150px;
		padding-top: 20px;
	}

	.head-info {
		padding: 5px 0;
		text-align: center;
		font-weight: 600;
		font-size: 2em;
		color: #fff;
		background: #23232e;
		height: 50px;
		border-top-left-radius: 10px;
		-webkit-border-top-left-radius: 10px;
		-moz-border-top-left-radius: 10px;
		-o-border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		-webkit-border-top-right-radius: 10px;
		-moz-border-top-right-radius: 10px;
		-o-border-top-right-radius: 10p
	}

	label.lbl-1 {
		background: #6756ea;
		width: 20px;
		height: 20px;
		display: block;
		float: right;
		border-radius: 50%;
		margin: 16px 10px 0px 0px;
	}

	label.lbl-2 {
		background: #ea569a;
		width: 20px;
		height: 20px;
		display: block;
		float: right;
		border-radius: 50%;
		margin: 16px 10px 0px 0px;
	}

	label.lbl-3 {
		background: #f1c85f;
		width: 20px;
		height: 20px;
		display: block;
		float: right;
		border-radius: 50%;
		margin: 16px 10px 0px 0px;
	}

	.close {
		cursor: pointer;
		height: 20px;
		position: absolute;
		left: 20px;
		top: 20px;
		color: #FFFAF0;
	}

	input[type="submit"] {
		font-size: 30px;
		color: #fff;
		outline: none;
		border: none;
		background: #3ea751;
		width: 100%;
		padding: 18px 0;
		border-bottom-left-radius: 15px;
		-webkit-border-bottom-left-radius: 15px;
		-moz-border-bottom-left-radius: 15px;
		-o-border-bottom-left-radius: 15px;
		border-bottom-right-radius: 15px;
		-webkit-border-bottom-right-radius: 15px;
		-moz-border-bottom-right-radius: 15px;
		-o-border-bottom-right-radius: 15px;
		cursor: pointer;
	}

	input[type="submit"]:hover {
		background: #ff2775;
		border-bottom-left-radius: 15px;
		-webkit-border-bottom-left-radius: 15px;
		-moz-border-bottom-left-radius: 15px;
		-o-border-bottom-left-radius: 15px;
		border-bottom-right-radius: 15px;
		-webkit-border-bottom-right-radius: 15px;
		-moz-border-bottom-right-radius: 15px;
		-o-border-bottom-right-radius: 15px;
		transition: 1s all;
		-webkit-transition: 1s all;
		-moz-transition: 1s all;
		-o-transition: 1s all;
	}
</style>