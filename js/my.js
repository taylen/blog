/**
 * my.js
 * @authors taylenxu (1457936882@qq.com)
 * @date    2014-02-24 18:34:34
 * @version 0.1
 */

;(function(){
	var backTop = $("#backTop");

	var Logic = {
		start: function(){

		},

		events: function(){
			window.onscroll = function(){
				var scrollTop = window.scrollTop;
			};
		}
	};

	Logic.start();
})();