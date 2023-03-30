const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const arrayIndex = urlParams.get('v1');

// getting places from APIs
function loadPlaces(position) {
    const method = 'static';
    // const method = 'api';
    if(method === 'static') {
        const CLG_PlACES = [
            {
                name: "LIBRARY",
                url:"./assets/arrow.gltf",
                location: {
                    lat: 23.108156404203143, // add here latitude if using static data
                    lng: 72.59498734978379, // add here longitude if using static data
                }
            },
            {
                name: "A-block",
                url:"./assets/arrow.gltf",
                location: {
                    lat: 23.1064422997269,  // add here latitude if using static data
                    lng: 72.59575386356772, // add here longitude if using static data
                }
            },
            {
                name: "M-Block",
                url:"./assets/arrow.gltf",
                location: {
                    lat: 23.10796558905296, // add here latitude if using static data
                    lng:  72.59461530062512, // add here longitude if using static data
                }
            },
            {
                name: "GTU",
                url:"./assets/arrow.gltf",
                location: {
                    lat: 23.105923398933385,  // add here latitude if using static data
                    lng: 72.59414710034639, // add here longitude if using static data
                }
            },
        ]; 

        const HOME_PlACES = [
            [{
                 name: "FireStation",
                 url:"./assets/arrow.gltf",
                 location: {
                     lat: 23.0560196454931,  // add here latitude if using static data
                     lng: 72.66744606670677, // add here longitude if using static data
                 }
             }],
            [{
                 name: "Home",
                 url:"./assets/arrow.gltf",
                 location: {
                     lat: 23.056784314414482,  // add here latitude if using static data
                     lng: 72.66345756966565, // add here longitude if using static data
                 }
             }],
            [{
                 name: "Divit Hills",
                 url:"./assets/arrow.gltf",
                 location: {
                     lat: 23.05760351001347,   // add here latitude if using static data
                     lng: 72.66268710592351, // add here longitude if using static data
                 }
             }],
            [{
                 name: "Shiv Residency",
                 url:"./assets/arrow.gltf",
                 location: {
                     lat: 23.057774877427374,  // add here latitude if using static data
                     lng: 72.66073728561422, // add here longitude if using static data
                 }
             }],
         ];
         
         return Promise.resolve(HOME_PlACES[arrayIndex]);
    }
    else if(method === 'api') {
        const params = {
            radius: 300,    // search places not farther than this value (in meters)
            clientId: '<your-client-id>',
            clientSecret: '<your-client-secret>',
            version: '20300101',    // foursquare versioning, required but unuseful for this demo
        };
    
        // CORS Proxy to avoid CORS problems
        const corsProxy = 'https://cors-anywhere.herokuapp.com/';
    
        // Foursquare API (limit param: number of maximum places to fetch)
        const endpoint = `${corsProxy}https://api.foursquare.com/v2/venues/search?intent=checkin
            &ll=${position.latitude},${position.longitude}
            &radius=${params.radius}
            &client_id=${params.clientId}
            &client_secret=${params.clientSecret}
            &limit=30 
            &v=${params.version}`;
        return fetch(endpoint)
            .then((res) => {
                return res.json()
                    .then((resp) => {
                        return resp.response.venues;
                    })
            })
            .catch((err) => {
                console.error('Error with places API', err);
            })
    }
};


window.onload = () => {
    const scene = document.querySelector('a-scene');

    // first get current user location
    return navigator.geolocation.getCurrentPosition(function (position) {

        // function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {

        //     console.log(lat1, lon1, lat2, lon2)
        //     const R = 6371; // Radius of the earth in km
        //     const dLat = deg2rad(lat2-lat1); // deg2rad below
        //     const dLon = deg2rad(lon2-lon1); 
        //     const a = 
        //       Math.sin(dLat/2) * Math.sin(dLat/2) +
        //       Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        //       Math.sin(dLon/2) * Math.sin(dLon/2)
        //       ; 
        //     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        //     const d = R * c; // Distance in km
        //     return Math.round(d*1000); //converting to  meters
        //   }
          
        //   function deg2rad(deg) {
        //     return deg * (Math.PI/180)
        //   }

        // than use it to load from remote APIs some places nearby
        loadPlaces(position.coords)
            .then((places) => {
                places.forEach((place) => {
                    
                    // alert(`You are ${getDistanceFromLatLonInKm(position.coords.latitude, position.coords.longitude, 23.0560196454931, 72.66744606670677)} meters away from your destination ${place.name}. Keep your phone upright and scan around you to find your destination.`);   
                    let desLatitude = place.location.lat;
                    let desLongitude = place.location.lng;   

                    // add place name
                    let destinationEntity = document.createElement('a-link');
                    destinationEntity.setAttribute('gps-entity-place', `latitude: ${desLatitude}; longitude: ${desLongitude};`);
                    destinationEntity.setAttribute('title', place.name);
                    destinationEntity.setAttribute('scale', '15 15 15');
                    
                    destinationEntity.addEventListener('loaded', () => {
                        window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
                        scene.appendChild(destinationEntity);
                    });
                    console.log(destinationEntity)
                    
                });
            })
    },
        (err) => console.error('Error in retrieving position', err),
        {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 27000,
        }
    );
};