$(function(){
	//menu fixed
	$(window).scroll(function(){
		if($(window).scrollTop() > 500){
			$(".menu").addClass("fixed");
		}
		else{
			$(".menu").removeClass("fixed");
		 }
	});
	//page4
	var galleryN=0;
	var galleryList=$("#page4 .background_list li");
	galleryList.eq(galleryN).addClass("active");

	$("#page4 .box_cont div").mouseover(function(e){
		galleryN=$(this).index();
		galleryList.removeClass("active");
		galleryList.eq(galleryN).addClass("active");
	});
	//video
	var video=document.getElementById("my_video");
	var videoList=["video/main.mp4"];
	var total=videoList.length-1;
	var n=0;

	video.muted=true;
	video.play();

	video.addEventListener("ended", function(){
		if(n < total){
			n=n+1;
		}
		else{
			n=0;
		}

		$("#my_video").attr({src:videoList[n]});
		video.play();
	});
	//mobile menu
	var w;

	$(".tab").click(function(e){
		e.preventDefault();
		$("#mobile").addClass("active");
		$(".dim").addClass("active");
	});
	$(".dim").click(function(){
		$("#mobile").removeClass("active");
		$(".dim").removeClass("active");

		if($("#mobile > ul > li").hasClass("active")){
			$("#mobile > ul > li").removeClass("active");
			$("#mobile ul ul").hide();
		}
	});
	$("#mobile > ul > li").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active") == false){
			$("#mobile > ul > li").removeClass("active");
			$(this).addClass("active");
			$("#mobile ul ul").slideUp(300);
			$(this).children("ul").slideDown(300);
		}
		else{
			$(this).removeClass("active");
			$(this).children("ul").slideUp(300);
		}
	});
	$(window).resize(function(){
		w=$(window).width();

		if(w > 600){
			if($("#mobile").hasClass("active")){
				$(".dim").trigger("click");
			}
		}
	});
	///page2
	var swiper=new Swiper("#page2_slider .swiper", {
		navigation: {
			nextEl: "#page2_slider .swiper-button-next",
			prevEl: "#page2_slider .swiper-button-prev"
		},
		pagination: {
			el: "#page2_slider .swiper-pagination"
		}
	});
	var swiper=new Swiper("#header .swiper-container", {
		pagination: {
			el: "#header .swiper-pagination",
			type: "fraction"
		},
		on: {
			init: function(){
				setTimeout(function(){
					$(".keytext").addClass("active");
				}, 1000);
			}
		}
	});
	//mousewheel
	var n=0;
	var h;
	var pos=0;
	var timer=0;

	function init(){
		$("#header").addClass("active");
		$(".controller li").eq(n).addClass("on");
	}
	init();

	$(window).resize(function(){
		clearTimeout(timer);
		timer=setTimeout(function(){
			h=$(window).height();
			pos=n*h;
			$("html").stop().animate({scrollTop:pos}, 800);
		}, 300);
	});

	$(window).trigger("resize");

	$(".container").mousewheel(function(e, delta){
		if($("html").is(":animated")) return;

		if(delta > 0){
			if(n > 0){
				n=n-1;
			}
		}
		else{
			if(n < 6){
				n=n+1;
			}
		}
		pos=n*h;

		$("html").stop().animate({scrollTop:pos}, 800, function(){
			$(".container > *").removeClass("active");
			$(".container > *").eq(n).addClass("active");
			$(".controller li").removeClass("on");
			$(".controller li").eq(n).addClass("on");
		});
	});
	$(".controller li").click(function(e){
		if($("html").is(":animated")) return;

		e.preventDefault();
		n=$(this).index();
		pos=n*h;

		$("html").animate({scrollTop:pos}, 800, function(){
			$(".container > *").removeClass("active");
			$(".container > *").eq(n).addClass("active");
			$(".controller li").removeClass("on");
			$(".controller li").eq(n).addClass("on");
		});
	});
});