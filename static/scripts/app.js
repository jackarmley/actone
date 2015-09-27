/**
 * Gender equality hack scripts
 * @author Nik, Jenny, Jack, Kabu
 */

var challengesAccepted = 0;
var countAppended = false;
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

$('.challengecard-cta').click(function(e){
    var count = '<span class="challengecount" />'
    var flag = '<span class="accepted icon-heart" />';
    var accepted = $(this).parent().hasClass('state--accepted');
    if(!accepted){
        challengesAccepted++;
        if(!countAppended){
            $('.navitem-challenges').append(count);
            countAppended = true;
        }
        $('.challengecount').text(challengesAccepted);
        $(this).find('span').text('Challenge Accepted!');
        $(this).parent().addClass('state--accepted').append(flag);
    }
    e.preventDefault();
});
