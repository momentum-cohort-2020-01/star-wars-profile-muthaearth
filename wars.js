
  
let vehicles = ['Sand Crawler', 'T-16 skyhopper', 'Snowspeeder', 'AT-ST', 'Sail barge']
const selectVeh;
//fetch StarWars Vehicles API
fetch('https://swapi.co/api/vehicles')
.then((response) => {
return response.json();
}) 
.then(((myJson) => {
    let selectVeh = myJson.results.filter(allVeh => allVeh.name);
    let newVeh = vehicles.toString();
    // console.log(newVeh);
}));
console.log(response.json);
console.log(newVeh);

self.addEventListener('fetch', function(event) {
    console.log('Handling fetch event for', event.request.url);
  
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          console.log('Found response in cache:', response);
          return response;
        }
        console.log('No response found in cache. About to fetch from network...');
  
        return fetch(event.request).then(function(response) {
          console.log('Response from network is:', response);
          return response;
        }).catch(function(error) {
          console.error('Fetching failed:', error);
  
          throw error;
        });
      })
    );
  });

