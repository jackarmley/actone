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

$('.map .kindness-meter-limit').each(function(){

});

if($('body').hasClass('map')){
    var int = $('.kindness-meter-int');
    var val = 500;
    var ceil = 800;
    var i = 0;
    var intID = setInterval(function(){
        int.text(val + i);
        i=i+10;
        if(i >= ceil){
            window.clearInterval(intID);
        }
    },500);
}

// This example creates circles on the map, representing populations in North
// America.

var colours = {
    'blueberry': '#0072bc',
    'plum': '#c41d4a',
    'butter': '#ffc72a',
    'mint': '#50C546'
}

// First, create an object containing LatLng and population for each city.
var citymap = {
  damascus: {
    center: {lat: 33.5131, lng: 36.2919},
    population: 9000000,
    color: colours.plum
  },
  bogota: {
    center: {lat: 4.5981, lng: -74.0758},
    population: 5000000,
    color: colours.plum
  },
  bogota2: {
    center: {lat: 4.5981, lng: -74.0758},
    population: 3000000,
    color: colours.blueberry
  },

  bristol: {
    center: {lat: 51.4500, lng: -2.5833},
    population: 2000000,
    color: colours.plum
  },
  bristol2: {
    center: {lat: 51.4500, lng: -2.5833},
    population: 1000000,
    color: colours.blueberry
  },
  abuja: {
    center: {lat: 9.0667, lng: 7.4833},
    population: 8000000,
    color: colours.plum
  },
  abuja2: {
    center: {lat: 9.0667, lng: 7.4833},
    population: 2000000,
    color: colours.blueberry
  },
 beirut: {
    center: {lat: 33.8869, lng: 35.5131},
    population: 4000000,
    color: colours.blueberry
  }
};

function initMap() {
  // Create the map.
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: {lat: 33.8869, lng: 35.5131},
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var styles = [
  {
    "featureType": "landscape",
    "stylers": [
          {
            "hue": "#c41d4a",
            "visibility": "off"
        }
    ]
  },{
    "featureType": "water",
    "stylers": [
      {
        "hue": "#458DC4",
        "lightness" : -50
        }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      { "visibility": "off" }
    ]
  }
];
    map.setOptions({styles: styles});
  // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the population.
  for (var city in citymap) {
    // Add the circle for this city to the map.
    var cityCircle = new google.maps.Circle({
      strokeColor: citymap[city].color,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: citymap[city].color,
      fillOpacity: 0.35,
      map: map,
      center: citymap[city].center,
      radius: Math.sqrt(citymap[city].population) * 100,
      label : 'heyyy'
    });
  }
}

var path = document.location.pathname.replace('/','./');
$('.site-nav a').each(function(){
    var href = $(this).attr('href');
    if(path === href){
        $(this).addClass('state--current');
    }

});


