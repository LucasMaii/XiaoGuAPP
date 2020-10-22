//创建Vue实例， 用于JS与HTML之间的交互渲染
var vm = new Vue({
    //绑定哪一个区域
    el : '#app',
    data:{
        name : null,
        userPic : '../../images/userlogo.fw.png',
        phone : null
    },

    created: function() {
        //判断有没有头像，没有的话就用默认头像
        current.userPic ? (this.userPic = current.userPic)
            : '../../images/userlogo.fw.png';
        //用户名
        this.name = current.nickName;
        //用户手机号码
        this.phone = current.phone
    }


})