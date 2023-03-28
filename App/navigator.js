const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const latitude = params.get('latitude')
const longitude = params.get('longitude')
console.log(latitude)
console.log(longitude)
const entity = document.createElement('a-entity');
    // entity.setAttribute('gps-entity-place', `latitude: ${destinationLocation.location.lat}; longitude: ${destinationLocation.location.lng};`);
    document.addEventListener('DOMContentLoaded', function() {
        const scene = document.getElementById('scene')
        // Do something with myElement
        // entity.setAttribute('gps-entity-place', `latitude: ${latitude} ; longitude: ${longitude};`);
        entity.setAttribute("gps-new-entity-place", `latitude: 23.05760351001347; longitude: 72.66268710592351;`);
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
    
    