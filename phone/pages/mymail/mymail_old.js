var vm=new Vue({
	el :'#app',
	data:{
		list:[]
	},
	methods:{
		refresh:function(){
			refresh()
		},
		more:function(){
//			refresh()
var array=res.push()
query.skip(10);
		},
		enter:function(contain){
			localStorage.contain=JSON.stringify(contain);
			toPage('read');
		}
	},
	
	created:function(){
		var _this=this;
		var query=Bmob.Query("letter"); // 页面刚加载完，就只加载三个信息, 点击一次加三个, 直到服务器端没有信息了为止
		var queryS=Bmob.Query("_User");
		var id=localStorage.objectId ||"2961a0ac55";
		queryS.get(id).then(function(data){
//			query.equalTo("senderMobile","==",data.phone);
			query.limit(3);
//			query.equalTo("res.length","==",3);

			query.find().then(function(res){
				console.log(res);
//				for(var i=0;i<res.length;i++){
					for(var i=0;i<3;i++){
					res[i].contain=JSON.stringify(res[i]);
					res[i].day=res[i].createdAt.substring(8,10);
					res[i].year=res[i].createdAt.substring(0,7);
					_this.list.push(res[i]);
				}
			});
		})
	}
})
