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
			Logic.initTop();
			Logic.events();
		},

		initTop: function(){
			var scrollTop = $(window).scrollTop();
			if(scrollTop > 100){
				if(backTop.css('display') != 'none'){
					return;
				}
				backTop.show();
			}else{
				if(backTop.css('display') == 'none'){
					return;
				}
				backTop.hide();
			}
		},

		events: function(){
			window.onscroll = function(){
				Logic.initTop();
			};

			backTop.click(function(){
				window.scrollTo(0, 0);
			});
		}
	};

	Logic.start();
})();