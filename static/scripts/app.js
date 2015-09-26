/**
 * Gender equality hack scripts
 * @author Nik, Jenny, Jack, Kabu
 */

$('#filter-time').change(function(){
    var that = $(this),
        val = that.val(),
        target = $('#filter-time-label');
    target.text(val);
});
$('#ihave-skill').click(function(){
    $('.filter-section--select-skill').addClass('state--active');
    $(this).attr('selected','selected');
    $('#ihave-goodwill').attr('selected',false);
});
$('#ihave-goodwill').click(function(){
    $('.filter-section--select-skill').removeClass('state--active');
    $(this).attr('selected','selected');
    $('#ihave-skill').attr('selected',false);
});
