$(function(){
	"use strict"
	$(".btn01").on("click",function(){
		
		$("#bestMenu_list>li").eq(2).css({"transform":"scale(1.2)","transition":"all 0.5s","z-index":"999"}).siblings().css({"transform":"scale(1)","transition":"all 0.5s","z-index":"1"});

		$("#bestMenu_list").animate({"margin-left":"0%"}, 500, function(){$(this).prepend($("#bestMenu_list>li").last());
		$("#bestMenu_list").css("margin-left","-20%");
		});

	});
	$(".btn02").on("click",function(){
		
		$("#bestMenu_list>li").eq(4).css({"transform":"scale(1.2)","transition":"all 0.5s","z-index":"999"}).siblings().css({"transform":"scale(1)","transition":"all 0.5s","z-index":"1"});

		$("#bestMenu_list").animate({"margin-left":"-40%"}, 500, function(){$(this).append($("#bestMenu_list>li").first());
		$("#bestMenu_list").css("margin-left","-20%");
		});
	});
});