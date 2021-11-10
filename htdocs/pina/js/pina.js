// Check if string is empty or only whitespaces

function isEmptyString(_string1) {
    return (_string1.length === 0 || !_string1.trim());
};


$(function() {
    // Generate TOC
    var headings = $('.pina-toc-marker').find('h1,h2,h3,h4,h5');
    var elements = [];
    var newAnker;

    $(headings).each(function(i) {
        var text = $(headings[i])[0].innerText;
        if (!isEmptyString(text)) {
            $(headings[i]).before($('<a/>').attr('id','toc_id_'+i));
            newAnker = $('<a/>').text(headings[i].innerText).attr('href','#toc_id_'+i).addClass('toc_level_'+ headings[i].nodeName);
            elements.push(newAnker);
        }
    });
    $('.pina-toc-output').append(elements);
});

