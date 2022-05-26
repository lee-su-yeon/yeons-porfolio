$(function(){
	//video
	var video=document.getElementById("my_video");
	var videoList=["video/portfolio0.mp4", "video/portfolio1.mp4"];
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

		// console.log("list : "+videoList[n]);
		$("#my_video").attr({src:videoList[n]});
		video.play();
	});
	//menu
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
	//page4 (sub_slider)
	var sub_swiper=new Swiper("#sub_slider .swiper-container", {
			slidesPerView: 1.5,
			spaceBetween: 10,
			pagination: {
				el: "#sub_slider .swiper-pagination",
				type: "progressbar"
			},
			breakpoints: {
				640: {
					slidesPerView: 3.5,
					spaceBetween: 10
				},
				920: {
					slidesPerView: 5,
					spaceBetween: 10
				}
			}
		});
});