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
$(window).on("scroll",function(){
		
		var tops = $("html,body").scrollTop();

		// console.log(tops);
		var anyTop = $("#online_store").offset().top;

		if(tops>=anyTop-450){
			$("#online_store>#mini").addClass("mini");
			$("#online_store>#pint").addClass("pint");
			$("#online_store>#quart").addClass("quart");
			$("#online_store>#stick_bar").addClass("stick_bar");
			$("#online_store>#crispy").addClass("crispy");
			$("#online_store>#cone").addClass("cone");
			$("#online_store>#cake").addClass("cake");
			
		}
		else{
			$("#online_store>#mini").removeClass("mini");
			$("#online_store>#pint").removeClass("pint");
			$("#online_store>#quart").removeClass("quart");
			$("#online_store>#stick_bar").removeClass("stick_bar");
			$("#online_store>#crispy").removeClass("crispy");
			$("#online_store>#cone").removeClass("cone");
			$("#online_store>#cake").removeClass("cake");
		}
		

});




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



		
	// $(".btn_right").on("mouseenter",function(){
	// 	clearInterval(autocall);
	// 	autocall=setInterval();
	// });
	// $(".btn_left").on("mouseenter",function(){
	// 	clearInterval(autocall);
	// 	autocall=setInterval();
	// });
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