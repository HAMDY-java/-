var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

function updateScale() {
	var winWidth = $win.width();
	var winHeight = $win.height();
	var targetWidth = 1100;
	var targetHeight = 680;

	var scaleX = winWidth / targetWidth;
	var scaleY = winHeight / targetHeight;
	// Use the smaller scale factor to fit the screen
	window.currentScale = Math.min(scaleX, scaleY, 1);

	// Apply scale to the wrapper
	$("#wrap").css("transform", "scale(" + window.currentScale + ")");
}

$(window).resize(updateScale);
$(document).ready(updateScale);

(function ($) {
	$.fn.typewriter = function () {
		this.each(function () {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function () {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date) {
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "<span class=\"digit\">" + days + "</span> يوم <span class=\"digit\">" + hours + "</span> ساعة <span class=\"digit\">" + minutes + "</span> دقيقة <span class=\"digit\">" + seconds + "</span> ثانية";
	$("#clock").html(result);
}
