window.onresize = function() {
	getRem(750, 100)
};
document.addEventListener('readystatechange', function() {
	if(document.readyState == 'interactive') {
		/*750表示设计稿宽度。100代表1rem等于设计稿下的100像素*/
		getRem(750, 100)
	}
});
//IE8~10需要在onload触发，不需要的话直接注释
//window.onload=function(){
//	getRem(750, 100)
//}

function getRem(pwidth, prem) {
	var html = document.getElementsByTagName("html")[0];
	var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
	
	html.style.fontSize = oWidth / pwidth * prem + "px";
	 
	
}