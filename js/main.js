$(function(){
    $("#accordian .lnb_list a").click(function(){ //저걸 클릭하면
        $(this).next("ul").slideUp(); //이거를 열어라
        if(!$(this).next().is(":visible")) // 만약 visible(보이는 상태)이 아니면
        {
            $(this).next().slideDown(); //닫아라
        }
    });
});