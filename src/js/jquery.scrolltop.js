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
            .appendTo($element);

        });

    };

})(jQuery);
