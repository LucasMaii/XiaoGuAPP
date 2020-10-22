//创建vue实例，应用于js与Html之间交互渲染
var vm = new Vue({
	//绑定哪一个区域
	el : '#app',
	//该区域用到的函数
	methods : {
		//	去写信页面， 如果没有登录， 就去登录页面
			toWrite : function() {
				if(localStorage.objectId)
				{
					toPage("write")
				}
				else{
					toPage('login')
				}
			},

			//去我的信箱，如果没有登录， 就去登录页面
			toMyMail : function()
			{
				if(localStorage.objectId) {
					toPage("mymail")
				}
				else
				{
					toPage('login')
				}
			}

	}
})
