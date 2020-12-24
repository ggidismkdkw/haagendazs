var slide; //setInterval 에서 불러올 전역변수
var autocall; 
var num = 1; //초기값

function slide(){
	"use strict";
	if(num<=3){
		$("#banner").animate({"margin-left":"-100%"},1000, function(){
			$(this).append($(">li",this).first()).css("margin-left","0");
		});
	num = 1;

	};

};
function slideE(){
	"use strict";
	if(num<=3){
		 $("#banner").prepend($("#banner>li").last()).css("margin-left","-100%");
		$("#banner").animate({"margin-left":"0"},1000);
	num = 1;

	};

};


$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
$(function(){
	"use strict";
		 // 닫혀있는 상태 명시
		 $(".btn_right").on("click",function(){
		$("#banner").animate({"margin-left":"-100%"},1000, function(){
			$(this).append($("#banner>li").first()).css("margin-left","0");
	});
			});

$(".btn_left").on("click",function(){
	 
	 $("#banner").prepend($("#banner>li").last()).css("margin-left","-100%");

	 $("#banner").animate({"margin-left":"0"},1000);

	 });



		
	$(".btn_right").on("mouseenter",function(){
		clearInterval(autocall);
		autocall=setInterval();
	});
	$(".btn_left").on("mouseenter",function(){
		clearInterval(autocall);
		autocall=setInterval();
	});
	$("#banner").on("mouseenter",function(){
		clearInterval(autocall);
		autocall=setInterval(slideE,7000);
	});

	$("#banner").on("mouseleave",function(){
		clearInterval(autocall);
		autocall=setInterval(slide,7000);
	});

	
	

	autocall = setInterval(slide,7000);	 
	});