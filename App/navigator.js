let queryString = window.location.search;
let params = new URLSearchParams(queryString);
let latitude = params.get('latitude')
let longitude = params.get('longitude')

let geoLatitude = params.get('geoLatitude')
let geoLongitude = params.get('geoLongitude')
console.log(geoLatitude)
console.log(geoLongitude)
const entity = document.createElement('a-entity');
    // entity.setAttribute('gps-entity-place', `latitude: ${destinationLocation.location.lat}; longitude: ${destinationLocation.location.lng};`);
    document.addEventListener('DOMContentLoaded', function() {
        const scene = document.getElementById('scene')
        // Do something with myElement
        // entity.setAttribute('gps-entity-place', `latitude: ${latitude} ; longitude: ${longitude};`);
        entity.setAttribute('gps-entity-place', `latitude: ${geoLatitude + 0.001} ; longitude: ${geoLongitude};`);
        // entity.setAttribute("gps-entity-place", `latitude: 23.05760351001347; longitude: 72.66268710592351;`);
        entity.setAttribute('geometry', 'primitive: box; height: 1; width: 1;');
        entity.setAttribute('material', 'color: red');
        entity.setAttribute('scale', '20 20 20');
        // entity.setAttribute('animation-mixer', '');
        
        // window.location.assign("./navigator.html?currentCoords=currentLocation&destinationCoords=destinationLocation");
        console.log(entity)
        console.log(scene)
        scene.appendChild(entity);
        // alert(JSON.stringify('yash'))
    });
    
    