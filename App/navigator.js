let queryString = window.location.search;
let params = new URLSearchParams(queryString);
let latitude = params.get('latitude')
let longitude = params.get('longitude')

let geoLatitude = params.get('geoLatitude')
let geoLongitude = params.get('geoLongitude')
console.log(geoLatitude)
console.log(geoLongitude)

    // entity.setAttribute('gps-entity-place', `latitude: ${destinationLocation.location.lat}; longitude: ${destinationLocation.location.lng};`);
    document.addEventListener('DOMContentLoaded', function() {
        // console.log('here')
        let scene = document.getElementById('scene')
        // let entity = document.createElement('a-entity');
        let entity = document.getElementById('entity');

        
        // // Do something with myElement
        // // entity.setAttribute('gps-entity-place', `latitude: ${geoLatitude + 0.001} ; longitude: ${geoLongitude};`);
        // entity.setAttribute("gps-entity-place", `latitude: 23.057793; longitude: 72.663406;`); //M-block
        // entity.setAttribute('geometry', 'primitive: cone');
        // // entity.setAttribute('position', `0 0 1  `);
        entity.setAttribute('material', 'color: red');
        // entity.setAttribute('scale', '15 15 15');
        // // entity.setAttribute('animation-mixer', '');
        console.log(entity)
        // // window.location.assign("./navigator.html?currentCoords=currentLocation&destinationCoords=destinationLocation");
        // console.log(entity)
        // console.log(scene)

        // // let destinationEntity = document.createElement('a-entity');
        // // destinationEntity.setAttribute('gps-entity-place', `latitude: ${geoLatitude + 0.001} ; longitude: ${geoLongitude};`);
        // // // destinationEntity.setAttribute('geometry', 'primitive: sphere');
        // // destinationEntity.setAttribute('position', `${geoLatitude + 0.001} 0 ${geoLongitude }`);
        // // destinationEntity.setAttribute('material', 'color: green');
        // // destinationEntity.setAttribute('scale', '20 20 20');
        
        // // console.log(destinationEntity)
        // // scene.appendChild(destinationEntity);
        // scene.appendChild(entity);
        // // alert(JSON.stringify('yash'))
    });


    
    