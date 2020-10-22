var vm = new Vue({
	el : '#app',
	data: {
		usernameInput : null,
		passwordInput : null
	},
	methods : {
		ret : function()
		{
			ret()
		},

		refresh : function()
		{
			refresh()
		},

		reg:function(){
			toPage('reg')
			},

			login:function(){
				// var check = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]7[0135678]|9[89])\d{8}$/;
				// if(!check.test(this.usernameInput))
				// {
				// 	window.alert('username is wrong');
				// 	return;
				// }	

				if(parseInt(this.passwordInput.length) < 6){
					window.alert('password is wrong');
					return;
				}

				Bmob.User.login(this.usernameInput, this.passwordInput)
				.then(function(res){
					localStorage.objectId = res.objectId;
					toPage('person')
				}).catch(function(err){
					window.alert('登录失败');
				});
			}
		}
	
})