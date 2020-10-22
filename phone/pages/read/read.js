var contain = JSON.parse(localStorage.contain);
var vm = new Vue({
    el : '#app',
    data:{
        day : contain.day,
        year : contain.year,
        senderMobile : contain.senderMobile,
        pic : contain.letterPic,
        title : contain.letterTitle

    },

    methods : {
        ret : function()
        {
            ret()
        }
    },
        created : function() {

            var str = this.pic.slice(1);
            var res = str.slice(0, -1);
            this.pic = res;
        }
    
})