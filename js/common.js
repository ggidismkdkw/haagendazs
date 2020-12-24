$(function(){
	"use strict";

	$("#gnb>#gnbBox>li>a").on("mouseenter",function(){
		
		$("#gnbBg").css({"padding":"6.5% 0","transition":"all 0.4s"});
		$("#gnbBox>li>ul>li>a").css({"margin-top":"0","opacity":"1","transition":"all 0.4s"});
	
	});
	$("#gnb>#gnbBox").on("mouseleave",function(){
		
		$("#gnbBox>li>ul>li>a").css({"margin-top":"-30%","opacity":"0","transition":"all 0.4s"});

		$("#gnbBg").css({"padding":"0 0","transition":"all 0.2s"});
	
	});
	$(function(){
		"use strict";

		// 햄버거 버튼 : 닫혀있던 메뉴가 햄버거 버튼을 클릭하면 오른쪽에서 왼쪽으로 등장 
		// X 버튼 : 클릭하면 왼쪽에서 오른족으로 사라지게
		var opa = 0;
		 // 닫혀있는 상태 명시
		$(".ti").on("click",function(){
			
			if(opa===0){//닫혀있다면
				$("#gnb").animate({'left':"0"},500)
			$("#top>aside>#navi").animate({'left':"0"},500)
				opa = 1;
				$("#findBox").animate({'left':"-100%"},500)
				sliedti = 0;
			}
			else if(opa===1){
				$("#gnb").animate({'left':"-100%"},500)
				$("#top>aside>#navi").animate({'left':"-100%"},500)
				opa = 0;
			}


		});
		var sliedti  = 0;
	$("#find").on("click",function(){
			if(sliedti===0){//닫혀있다면
				$("#findBox").animate({'left':"0"},500)
				sliedti = 1;
				$("#gnb").animate({'left':"-100%"},500)
				$("#top>aside>#navi").animate({'left':"-100%"},500)
				opa = 0;
			}
			else if(sliedti===1){
				$("#findBox").animate({'left':"-100%"},500)

				sliedti = 0;
			}
		});
	});

$("#online_store>dl>.more").on("click",function(){
	var seq = $(this).parent().index();
	switch(seq){
		case 0 : window.open().location.href="https://ggidismkdkw.github.io/haagendazs/store.html"; break; 
		case 1 : window.open().location.href="https://ggidismkdkw.github.io/haagendazs/store.html"; break;
		case 2 : window.open().location.href="https://ggidismkdkw.github.io/haagendazs/store.html"; break;
		case 3 : window.open().location.href="https://ggidismkdkw.github.io/haagendazs/store.html"; break;
		case 4 : window.open().location.href="https://ggidismkdkw.github.io/haagendazs/store.html"; break;
		case 5 : window.open().location.href="https://ggidismkdkw.github.io/haagendazs/store.html"; break;
		case 6 : window.open().location.href="https://ggidismkdkw.github.io/haagendazs/store.html"; break;
		case 7 : window.open().location.href="https://ggidismkdkw.github.io/haagendazs/store.html"; break;

	}
});


});
