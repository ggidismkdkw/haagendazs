$(window).on("scroll",function(){
		
		var tops = $("html,body").scrollTop();

		// console.log(tops);
		var anyTop = $("#brand_02").offset().top;

		if(tops>=anyTop-900){
			$(".animation").addClass("animation01");
		$("#start").trigger("cilck");
			var ele =document.getElementById('start'); // 변수에 엘리먼트 저장

			ele.click();
			
		}
		else{
			$(".animation").removeClass("animation01");
		$("#reset").trigger("cilck");
			var eled =document.getElementById('reset'); // 변수에 엘리먼트 저장

			eled.click();
		}
		

});


$(function(){


	/*
		각 탭메뉴를 클릭하면 ,

		1. li의 data-tab 값을 불러오기
		2. 기존 li의 클래스가 제거 + 기존 콘텐츠 클래스 제거
		3. 선택된 li에 basic 클래스가 추가+ 선택된 콘텐츠 클래스 추가
	*/

	$("#tabMenu>li").on('click',function(){
		var activeTab=$(this).attr('data-tab'); /*li의 data-tab 값을 불러오기*/
		$("#tabMenu>li").removeClass('basic'); //기존 li의 클래스가 제거
		$(".Contents").removeClass('basic'); //기존 콘텐츠 클래스 제거
		$("#brandImgBox>li").removeClass('basic');

		$(this).addClass('basic'); //선택된 li에 basic 클래스가 추가
		$('.'+activeTab).addClass('basic'); //선택된 콘텐츠 클래스 추가
		$(''+activeTab).addClass('basic');
	}); //click






}); //JQB


	var options = {
		useEasing : false, 
		useGrouping : false, 
		separator : ',', 
		decimal : '.', 
		prefix : '', 
		suffix : '' 
	};

	/**
	 [0] 카운트를 보여줄 ID
	 [1] 시작 카운트
	 [2] 종료 카운트
	 [3] 소수점
	 [4] 시작 ~ 종료 까지 실행 시간
	 [5] 옵션
	 */
	var demo = new CountUp("myTargetElement", 1961, 2020, 0, 6.3, options);
	
	// 시작
	function onStart() {
		demo.start();
	}

	// 일시정지 / 재시작
	function onPauseResume() {
		demo.pauseResume();	
	}

	// 초기화
	function onReset() {
		demo.reset();
	}
