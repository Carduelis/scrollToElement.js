$.fn.extend({
	scrollTo : function( target, options, callback ){
		if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
		var settings = $.extend({
			scrollTarget  : target,
			offsetTop     : 50,
			duration      : 500,
			easing        : 'swing'
		}, options);
		return this.each(function(){
			$(settings.scrollTarget).removeClass('animated').removeClass('pulse');
			var scrollPane = $(this);
			var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
			var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
			$(settings.scrollTarget).addClass('animated').addClass('pulse');
			scrollPane.animate(
				{scrollTop : scrollY }, 
				parseInt(settings.duration), 
				settings.easing, 
				function(){
					if (typeof callback == 'function') { 
						callback.call(this); 
					}
				}
			);
		})
	},
	scrolling: function() {
		return this.each(function() {
			if ($(this).data('scrollto')) {
				$(this).on('click', function() {
					var target = $(this).data('scrollto');
					
	
					if (!$(target)[0]) {
						console.error('Error: target element is not presented. See the instruction paragraph #1')
					}
					$('body').scrollTo(targetSelector);

				})
			}
		});
	},
});