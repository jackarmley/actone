/**
 * Gender equality hack scripts
 * @author Nik, Jenny, Jack, Kabu
 */

$('#filter-time').change(function(){
    var that = $(this),
        val = that.val(),
        unit = 'minutes',
        target = $('#filter-time-label');
    if(val > 60){
        val = parseFloat((val / 60)).toFixed(1);
        unit = 'hours';
    }
    target.find('.int').text(val);
    target.find('.unit').text(unit);
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
