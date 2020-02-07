$(function(){
    $("#accordian .lnb_list a").click(function(){ //저걸 클릭하면
        //var detph1font = "this"; //클릭 시 폰트 색상 변경 위한 변수

        //$(this).addClass('lnb_selc');

        $(this).next().slideUp(); //이거를 열어라
        if(!$(this).next().is(":visible")) // 만약 visible(보이는 상태)이 아니면
        {
            $(this).next().slideDown(); //닫아라
        }
        else{
            //$(this).removeClass('lnb_selc')

        }
    });
});