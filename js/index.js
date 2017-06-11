$(document).ready(function (){
	$('#marquee').bxSlider({
	      mode:'horizontal', //默认的是水平
	      displaySlideQty:1,//显示li的个数
	      moveSlideQty: 1,//移动li的个数  
	      captions: true,//自动控制
	      auto: true,
	      controls: false//隐藏左右按钮
	});
})