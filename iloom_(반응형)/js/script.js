//스와이퍼
var Swiper = new Swiper(".mySwiper", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
		},
	});
	  
//메뉴 버튼
$('.tablet-btn').on({click:function(){
	$('.tablet-nav').slideToggle(1000);
	$('.tablet-btn>span').to
}});


  // 공지사항 롤링
  const newBanner=$('.notice-wrap > .notice-box');
  let current = 0;
  let setIntervalId=null;


  newsBanner();
  function newsBanner(){
	  setIntervalId=setInterval(function(){
		  let prev=newBanner.eq(current);
		  move(prev, 0, '-100%');
		  current++;
		  if(current==newBanner.size()) current=0;

		  let next=newBanner.eq(current);
		  move(next,'100%', 0);
	  },2000);


  };
  function move(tg, start, end){
	  tg.css("top", start).stop().animate({top:end},500)
  }

  $('.news-wrap').hover(function(){
	  clearInterval(setIntervalId)
  },function(){
	  newsBanner();
  });



