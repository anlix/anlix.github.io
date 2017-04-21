
var data={
    home:$('#view-me-home'),
    work:$('#view-me-work'),
    sum:$('#view-me-sum')
};
var local=data.home;
var arr=[data.home,data.work,data.sum];
local.fadeIn("slow");

$('#span-back-home').bind('click',function(){
    if(local==data.home)return;
    else{
        local.addClass("none");
        local.removeClass("come");
        remove(local,"none");
        local=data.home;
        local.addClass('come');
    }
});

$('#span-next').bind('click',function(){
    var index=arr.indexOf(local);
    index=(index==arr.length-1)?-1:index;
    if(index==-1){
        return;
    }
    local.addClass("none");
    local.removeClass("come");
    remove(local,"none");
    local=arr[index+1];
    local.addClass('come');
});

function remove(item,type){
    setTimeout(function(item ,type){
        item.removeClass(type);
    },1000,item,type);
}




//var isFirefox=navigator.userAgent.indexOf('Firefox')!=-1;
// var mousewheel=isFirefox?DOMMouseScroll
