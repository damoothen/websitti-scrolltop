(function($){

    $.fn.scrolltop = function(params){

        var defaults = {
            template: '^',
            duration: 1000
        };

        params = $.extend({}, defaults, params);

        return this.each(function(){

            var $element = $(this);
            var $window = $(window);
            var $link = $('<a></a>')
            .attr('href', '#')
            .addClass('scrolltop')
            .html(params.template)
            .click(function(e){
                e.preventDefault();
                $('body', 'html').animate({
                    scrollTop: $element.offset().top
                }, params.duration);
            })
            .appendTo($element);

            $window.scroll(function(e){
                var scrollTop = $(this).scrollTop();
                if (scrollTop > $(this).height() / 2) {
                    $link.addClass('active');
                }
                else {
                    $link.removeClass('active');
                }
            });

        });

    };

})(jQuery);
