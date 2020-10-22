//创建Vue实例，用于Js和HTML之间的交互渲染
var vm = new Vue({
    el :'#app',
    data: {
        receiverMobile : null,
        senderMobile : current.phone,
        letterTitle : null,
        letterPics : '../../images/logo.fw.png'
    },

    methods : {
        ret : function (){
            ret()
        },

        refresh : function() {
            refresh()
        },

        lookPic : function() {
            var _this = this;
            var reader = new FileReader();
            var file = document.getElementById('sss').files;
            reader.readAsDataURL(file[0]);
            reader.onload=function (){
                file = Bmob.File(file[0]);
                file.save().then(res =>{
                    _this.letterPics = res[0].url;
                })
            }
        },

        send : function() {
            const query = Bmob.Query('letter');
            query.set("receiverMobile",this.receiverMobile)
            query.set("letterTitle",this.receiverMobile)
            query.set("letterPic",JSON.stringify(this.letterPics))
            console.log(JSON.stringify(this.letterPics));
            query.set("senderMobile",this.senderMobile)
            qyery.set("letterStatus",1)
            query.set("isRead", 0)
            query.save().then(function(res){
                console.log(res);
                toPage('mymail');

            }).catch(function(err)
            {
                window.alert('发送失败');
            })

        }


    }
})