$(function(){
	var count=1;
	$(".visual_wrap .nav").addClass("active");

	setInterval(function(){
		count++;
		$(".visual_wrap .nav .num").text(count);
		$(".visual_wrap .nav").addClass("active");
	}, 9000);

	$(".visual_wrap svg circle").on("animationend", function(){
		$(".visual_wrap .nav").removeClass("active");
	});
});
$(function(){
	var bannerN=0;
	var xoffset=1250;
	var xtarget=0;
	var total=3;

	$(".controls .left").click(function(e){
		e.preventDefault();

		if(bannerN > 0){
			bannerN=bannerN-1;
		}
		else{
			return;
		}

		xtarget=xoffset*bannerN*(-1);
		$(".slider").css({left:xtarget});
	});
	$(".controls .right").click(function(e){
		e.preventDefault();

		if(bannerN < (total-1)){
			bannerN=bannerN+1;
		}
		else{
			return;
		}

		xtarget=xoffset*bannerN*(-1);
		$(".slider").css({left:xtarget});
	});
});