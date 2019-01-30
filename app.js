var app = angular.module('rezzSite', []);

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

  $scope.firstShow = $scope.shows[0].city; //'Orlando';
}]);
