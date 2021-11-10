
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

function validateEmbededSrc(url, id) {
    var attrList = [
        /^href=/i,
        /^src=/i
    ];
    var url = url;
    var sourceCode = $('#'+ id).val();
    var container = $('#'+ id).closest(".embeded-code-module");
    var controlHint = $(container).find(".form-hint");
    var controlError = $(container).find(".form-hint-error");
    var previewBtn = $(container).find(".i-action-load-embeded-code-preview");
    
    // filter only href and src attributes
    var checkList = sourceCode.split(" ").filter(function (text) {
        return attrList.some(function (regex) {
             return regex.test(text);
        });
    });
    
    for (var i = 0; i < checkList.length; i++) {
        var string = checkList[i].replace(new RegExp(/^href=\"|^src=\"/g), '');
        // check against the given url
        if (string.lastIndexOf(url, 0) === 0) {
            // console.log('url is ok');
            $(controlError).hide();
            $(controlHint).show();
        } else {
            // console.log('wrong url');
            $(controlHint).hide();
            $(controlError).show();
            break;
        }
    }
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
    }).on('change', '.quote-justification-radio input', function(e) {
        var alignment = $(this).val();
        $(this).closest('.pina-quote-flex-wrapper').find('.pina-quote-wrapper').attr('class', 'pina-quote-wrapper').addClass('pina-quote-wrapper-' + alignment);
    }).on('click', '.pina-toggle-flex-settings', function(e) {
        var expand_label = $(this).data('expand-label');
        var collapsed_label = $(this).data('collapsed-label');
        
        var settings = $(this).next('.pina-flex-settings');
        if($(settings).is(":visible")) {
            $(this).removeClass('expanded').addClass('collapsed');
            if (expand_label) 
                $(this).text(expand_label);
            $(settings).hide();
        } else {
            $(this).removeClass('collapsed').addClass('expanded');
            if (collapsed_label) 
                $(this).text(collapsed_label);
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
    }).on('click', '.i-action-load-embeded-code-preview', function() {
        var container = $(this).closest('.embeded-code-module');
        var val = $(container).find('.embeded-code-control').val();
        var preview = $(container).find('.embeded-preview');
        if (val) {
            $(preview).addClass('embeded-preview-map').html(val);
        } else {
            $(preview).removeClass('embeded-preview-map').html(' ');
        }
    }).on('change', '.iwe-headings-select', function(e) {
        var input = $(this).closest('.pina-headings-modul').find('.heading_control');
        $(input).attr('class', 'form-control heading_control').addClass('heading_'+$(this).val());
    });

});    


