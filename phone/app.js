//初始化后端交互组件(后端接口需要验证你有无权限进行访问)
Bmob.initialize("977ba12485421623c749260e04095a6b",
	"1496f607163d7f21c7c34ca7a99ef2a3");

//获取当前登录用户信息，如果未登录为null
var current = Bmob.User.current();

//传入要跳转到哪一页：*html
function toPage(targetPage) 
{
	open(targetPage)
}

//利用location打开对应页面
function open(targetPage)
{
	location.href='../'+ targetPage + '/' + targetPage + '.html'
}

//返回上一页
function ret() {
	history.go(-1)
}

//刷新当前页面
function refresh()
{
	location.reload()
}

//关闭当前窗口
function close(){
	window.close()
}