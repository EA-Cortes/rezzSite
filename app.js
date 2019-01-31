var app = angular.module('rezzSite', []);
var lat, lng;
// var city = "yeetTown";

app.controller('MainCtrl', [
'$scope',
function($scope){
  
  $scope.shows = [
  // {title: 'show', venue: 'venue', date: "2012-04-20T18:25:43.511Z" },
  {title: 'Rezz Orlando', venue: 'The Orlando Amphitheater', date: "2019-02-02T18:25:43.511Z", city: 'Orlando', state: 'FL', tickets: 'https://www.axs.com/events/366208/rezz-tickets'},
  {title: 'Eagles Ballroom', venue: 'Eagles Club', date: "2019-02-22T18:25:43.511Z", city: 'Milwaukee', state: 'WI', tickets: 'https://www.etix.com/ticket/p/3835878/rezz-milwaukee-the-rave-eagles-club'},
  {title: 'EDC Mexcio', venue: 'Autódromo Hermanos Rodríguez', date: "2019-02-23T18:25:43.511Z", city: 'Mexico City', state: 'Mexico', tickets: 'https://www.ticketmaster.com.mx/artist/1329224'},
  {title: 'Deja Voom', venue: 'Barceló Resort + Riviera Maya', date: "2019-02-27T18:25:43.511Z", city: 'Puerto Aventuras', state: 'Mexico', tickets: 'https://dejavoom.com/'},
  {title: 'Relentless Beats', venue: 'Rawhide Event Center', date: "2019-03-08T18:25:43.511Z", city: 'Chandler', state: 'AZ', tickets: 'https://www.seetickets.us/event/Rezz/379054?awc=7816_1548474706_37fb5c8f80ff6fae8d8e8f0993bbc603&AFF=aw'},
  {title: 'Get Lucky', venue: 'The Great Saltair', date: "2019-03-09T18:25:43.511Z", city: 'Salt Lake City', state: 'UT', tickets: 'https://www.ticketfly.com/purchase/event/1809189'},
  {title: 'Beyond Wonderland', venue: 'NOS Event Center', date: "2019-03-22T18:25:43.511Z", city: 'San Bernandino', state: 'CA', tickets: 'https://beyondsocal.frontgatetickets.com/?_ga=2.114732231.1922121408.1548475992-1402889413.1548475992'}, // missing 2nd potential date 2019-03-23T18:25:43.511Z, needs custom date filter
  {title: 'Ultra Music Festival', venue: 'Virginia Key Beach Park & Miami Marine Stadium', date: "2019-03-29T18:25:43.511Z", city: 'Miami', state: 'FL', tickets: 'https://ultramusicfestival.com/tickets/miami/'}, // missing 3 potential dates, end date april 1st
  {title: 'Touch Bass Auckland', venue: 'Spark Arena', date: "2019-04-18T18:25:43.511Z", city: 'Auckland', state: 'Australia', tickets:'https://www.touchbass.com.au/auckland/'},
  {title: 'Touch Bass Adelaide', venue: 'Adelaide Entertainment Centre', date: "2019-04-19T18:25:43.511Z", city: 'Adelaide', state: 'Australia', tickets:'https://www.touchbass.com.au/adelaide/'},
  {title: 'Touch Bass Perth', venue: 'Beivoir Amphitheatre', date: "2019-04-20T18:25:43.511Z", city: 'Perth', state: 'Australia', tickets:'https://www.touchbass.com.au/perth/'},
  {title: 'Touch Bass Brisbane', venue: 'Eatons Hill Hotel', date: "2019-04-21T18:25:43.511Z", city: 'Perth', state: 'Australia', tickets:'https://www.touchbass.com.au/brisbane/'},
  {title: 'Touch Bass Sydney', venue: 'Hordern Pavilion', date: "2019-04-21T18:26:43.511Z", city: 'Perth', state: 'Australia', tickets:'https://www.touchbass.com.au/sydney/'},
  {title: 'Backwoods', venue: 'Mulberry Mountain', date: "2019-05-31T18:26:43.511Z", city: 'Ozark', state: 'AR', tickets:'https://link.seated.com/c93bb36c-ffb7-4af7-b775-55f4dc897f84'}, // missing 2 potential dates, end june 2nd. Needs custom date filter
  
  // template for future shows
  // {title: '', venue: '', date: "", city: '', state: '', tickets:''}, 
  ];

  
  $scope.curTime =  Date.now();

  // window.alert($scope.shows[0].title);

  // ------------ playing with date/string formats to implement the nextShow() function ------------
  var rn = new Date("2019-02-23 T17:25:43.511Z")
  var m = (rn.getMonth() + 1).toString();
  var d = rn.getDate().toString();
  var y = rn.getFullYear().toString();
  var fDate = m + "/" + d + "/" + y;
  var city;

  
  // Function that finds the next show by comparing now's time to the next show
  function nextShow()
  {
    var i = 0;
    var nextShowDate = new Date($scope.shows[0].date);
    while(rn > nextShowDate){
      i++;
      nextShowDate = new Date($scope.shows[i].date);
    }
    
    // Set upcoming values according to next show
    $scope.upcomingState = $scope.shows[i].state;
    $scope.upcomingShow = $scope.shows[i].title;
    $scope.upcomingTime = $scope.shows[i].date;
    city = $scope.shows[i].city;  
    
  }

  nextShow();
  
}]);


function initMap()
{
  var city = {lat: 28.555096, lng: -81.437580}; // coordinates for Orlando show
  var map = new google.maps.Map(document.getElementById('map'), {zoom: 1, center: city});
  var marker = new google.maps.Marker({position: city, map: map, icon: 'spaceship.png'});
  smoothZoom(map, 17, map.getZoom());
  
function smoothZoom (map, max, cnt) {
    if (cnt >= max) {
        return;
    }
    else {
        z = google.maps.event.addListener(map, 'zoom_changed', function(event){
            google.maps.event.removeListener(z);
            smoothZoom(map, max, cnt + 1);
        });
        setTimeout(function(){map.setZoom(cnt)}, 160)
    }
}  
  
}

// window.alert(city);

// ------------ 'Encrypeted' GCP key ----------
var myKey = 'https://maps.googleapis.com/maps/api/js?key=' + keys.GCP_KEY + '&callback=initMap'; // Hides my GCP API Key