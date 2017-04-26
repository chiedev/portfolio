$(document).ready(function(){
    $('.switch').each(function(){
        $('span[data-value]',this).append('<nav></nav>')
        $('span[data-value]',this).on('click',function(){
            (!$(this).parent().attr('checked'))?$(this).parent().attr('checked','checked'):$(this).parent().removeAttr('checked')
        })
    })
});