var vm = new Vue({
    el : '#app',

    data: {
        list:[]
    },

    methods : {
        refresh: function() {
            refresh()
        },
        enter: function (contain){
            localStorage.contain = JSON.stringify(contain);
            toPage('read');
        }
    },
    created : function() {
        console.log('start');
        var _this = this;
        var query = Bmob.Query("letter");
        var queryS = Bmob.Query("_User");
        console.log(this.phone);
        var id = localStorage.objectId || "2961a0ac55";
        queryS.get(id).then(function (data) {
            console.log(data, 'data')
            query.equalTo("senderMobile", "==" , data.phone);
            query.find().then(function(res){
                console.log(res);
                for(var i= 0; i< res.length; i++){
                    res[i].contain = JSON.stringify(res[i]);
                    res[i].day = res[i].createAt.substring(8,10);   
                    res[i].year = res[i].createAt.substring(0,7);

                }
                _this.list = res;

            });
            query.equalTo("receiverMobile", "==", data.phone);
            query.find().then(function(res){
                for(var i= 0; i< res.length; i++){
                    res[i].contain = JSON.stringify(res[i]);
                    res[i].day = res[i].createdAt.substring(8,10);
                    res[i].year = res[i].createdAt.substring(0,7);
                    _this.list.push(res[i]);
                }
            });
        })
    }

})