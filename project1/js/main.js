$(function(){
	var n=0;
	var total=4;
	$(".slider_group li").eq(n).addClass("current");
	$(".pagination li").eq(n).addClass("current");

	$(".left").click(function(e){
		e.preventDefault();

		if(n > 0){
			n=n-1;
			$(".slider_group li").removeClass("current");
			$(".slider_group li").eq(n).addClass("current");
			$(".pagination li").removeClass("current");
			$(".pagination li").eq(n).addClass("current");
		}
	});
	$(".right").click(function(e){
		e.preventDefault();

		if(n < 3){
			n=n+1;
			$(".slider_group li").removeClass("current");
			$(".slider_group li").eq(n).addClass("current");
			$(".pagination li").removeClass("current");
			$(".pagination li").eq(n).addClass("current");
		}
	});
	$(".pagination li").click(function(e){
		e.preventDefault();
		n=$(this).index();
		$(".pagination li").removeClass("current");
		$(this).addClass("current");
		$(".slider_group li").removeClass("current");
		$(".slider_group li").eq(n).addClass("current");
	});
});