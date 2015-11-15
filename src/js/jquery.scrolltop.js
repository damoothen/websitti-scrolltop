(function($){

    $.fn.scrolltop = function(params){

        var defaults = {};

        params = $.extend({}, defaults, params);

        return this.each(function(){

            var $element = $(this);
            var $link = $('<a></a>')
            .attr('href', '#')
            .addClass('scrolltop')
            .html('^')
            .click(function(e){
                e.preventDefault();
                $('body', 'html').animate({
                    scrollTop: 0
                }, 1000);
            })
            .appendTo($element);

        });

    };

})(jQuery);
