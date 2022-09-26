//퍼센트 바
$('.progress-bar').each(function(){
    let progressWrap=$(this),
    progressBar=progressWrap.find('.bar'),
    progressText=progressWrap.find('.num'),
    progressNum=progressText.attr('data-num');
    console.log(progressNum)


    progressBar.animate({width:progressNum + '%'},2000);
   

    setInterval(textAni, 1000/10)
    function textAni(){
        let currentWidtht=progressBar.width() / progressWrap.width() * 100;   

        progressText.text(Math.ceil(currentWidtht) + '%') 

    } 
});

//헤더고정
let $window=$(window);
let header=$('.page-header');
let headerOffsetTop=header.offset().top;

$(window).scroll(function(){
    if($(this).scrollTop() >= headerOffsetTop){
        header.addClass('sticky')
    }else{
        header.removeClass('sticky')
    }
});


