
function showClearIcon() {
    var internalInputs = $(".pina-internal-link-wrapper .i-ac-anchor-instance");
    $(internalInputs).each(function(){
        if($(this).val()) {
            $(this).closest('.pina-internal-link-wrapper').addClass('show-clear-icon');
        } else {
            $(this).closest('.pina-internal-link-wrapper').removeClass('show-clear-icon');
        }
    })
}
showClearIcon();

I.$(function($) {
    $(document).on('change', '.pina-internal-link-wrapper .i-ac-anchor-instance', function(e) {
        var currentLink = $(this).val();
        var parent =  $(this).closest('.pina-internal-link-wrapper');
        console.log('changed', currentLink);
        if (currentLink) {
            $(parent).addClass('show-clear-icon');
        } else {
            $(parent).removeClass('show-clear-icon');
        }
    }).on('click', '.pina-internal-link-wrapper .pina-clear-icon', function() {
        var parent =  $(this).closest('.pina-internal-link-wrapper');
        $(parent).find('.pina-internal-link').val('');
        $(parent).find('.i-ac-anchor-instance').val('').trigger('change');
    }).on('change', '.image-justification-radio input', function(e) {
        var alignment = $(this).val();
        $(this).closest('.pina-image-flex-wrapper').find('.pina-image-wrapper').attr('class', 'pina-image-wrapper').addClass('pina-image-wrapper-' + alignment);
    }).on('click', '.pina-toggle-flex-settings', function(e) {
        var settings = $(this).next('.pina-flex-settings');
        if($(settings).is(":visible")) {
            $(this).removeClass('expanded').addClass('collapsed');
            $(settings).hide();
        } else {
            $(this).removeClass('collapsed').addClass('expanded');
            $(settings).show();
        }
    }).on('click', '.pina-update-tweet', function(e) {
        var flexWrapper = $(this).closest(".pina-tweet-flex");
        var blockquote = $(flexWrapper).find('.twitter-tweet-rendered');
        var tweetWrapper = $(flexWrapper).find('.twitter-tweet-preview');
        var sample = $(flexWrapper).find('.twitter-tweet-sample');
        var html = $(flexWrapper).find('input.form-control').val();

        if (!html)  {
            $(sample).show();
            $(tweetWrapper).html('');
        }
        if (html) {
            if (blockquote.length) {
                // Tweet inserted
                $(tweetWrapper).html('').append(html); 
                setTimeout(function() { 
                    twttr.widgets.load(tweetWrapper);
                }, 100);
            } else {
                // Sample visible
                $(tweetWrapper).html(html);
                $(sample).hide();
                setTimeout(function() { 
                    twttr.widgets.load(tweetWrapper);
                }, 100);
            }
        }
    });

});    


