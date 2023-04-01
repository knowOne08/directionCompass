const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const arrayIndex = urlParams.get('v1');
// getting places from APIs
function loadPlaces(position) {
    const method = 'static';
    // const method = 'api';
    if(method === 'static') {
        const CLG_PlACES = [
            [{
                name: "LIBRARY",
                location: {
                    lat: 23.108156404203143, // add here latitude if using static data
                    lng: 72.59498734978379, // add here longitude if using static data
                }
            }],
            [{
                name: "A-block",
                location: {
                    lat: 23.1064422997269,  // add here latitude if using static data
                    lng: 72.59575386356772, // add here longitude if using static data
                }
            }],
            [{
                name: 'B-Block',
                location: {
                    lat: 23.106314138973083, 
                    lng: 72.59517487210594,
                }
            }],
            [{
                name: 'C-Block',
                location: {
                    lat: 23.106647330209956, 
                    lng: 72.59487520799807
                }
            }],
            [{
                name:   'D-Block',
                location: {
                    lat: 23.106368217189168, 
                    lng: 72.59453571516117
                }
            }],
            [{
                name:   'E-Block',
                location: {
                    lat: 23.106800842128155, 
                    lng: 72.59430053574133
                }
            }],
            [{
                name:  'F-Block',
                location: {
                    lat:  23.10699970957776,
                    lng:  72.59461347609685
                }
            }],
            [{
                name:       'G-Block',
                location: {
                    lat: 23.107336963042442, 
                    lng: 72.59433642087484
                }
            }],
            [{
                name:'H-Block',
                location: {
                    lat: 23.107582096861673,    
                    lng: 72.59463105154079
                }
            }],
            [{
                name:'I-Block',
                location: {
                    lat: 23.107204160054682,  
                    lng: 72.59495535183923  
                }
            }],
            [{
                name:'J-Block',
                location: {
                    lat: 23.107495662977698,    
                    lng: 72.59528333736667   
                }
            }],
            [{
                name: 'K-Block',
                location: {
                    lat:  23.107221107915564,  
                    lng: 72.59556894273088 
                }
            }],
            [{
                name: 'L-Block',
                location: {
                    lat: 23.106906042864658, 
                    lng: 72.59525294174829
                }
            }],
            [{
                name: "M-Block",
                location: {
                    lat: 23.10796558905296, // add here latitude if using static data
                    lng:  72.59461530062512, // add here longitude if using static data
                }
            }],
            [{
                name: "N-Block",
                location: {
                    lat: 23.10809028417978, 
                    lng: 72.59402622994922
                }
            }],
            [{
                name: "GTU",
                location: {
                    lat: 23.105923398933385,  // add here latitude if using static data
                    lng: 72.59414710034639, // add here longitude if using static data
                }
            }],
        ]; 
         
        return Promise.resolve(CLG_PlACES[arrayIndex]);
    }
    else if(method === 'api') {
        //under construction
    }
};


window.onload = () => {
    const scene = document.querySelector('a-scene');
    let destinationCoords = null;
    let flag = true;

    // first get current user location
    return navigator.geolocation.getCurrentPosition(function (position) {


        function calculateRotation(userCoords, destinationCoords, alpha) {
            const dLon = destinationCoords.longitude - userCoords.longitude;
            const y = Math.sin(dLon) * Math.cos(destinationCoords.latitude);
            const x = Math.cos(userCoords.latitude) * Math.sin(destinationCoords.latitude) - Math.sin(userCoords.latitude) * Math.cos(destinationCoords.latitude) * Math.cos(dLon);
            let brng = Math.atan2(y, x);
            brng = (brng * 180) / Math.PI;
            brng = (brng + 360) % 360;
            const rotation = (-alpha * 180) / Math.PI;
            return brng - rotation;
        }

        function getDistance(lat1, lng1, lat2, lng2) { 
            const R = 6371; // Radius of the earth in km
            const dLat = deg2rad(lat2-lat1);  // deg2rad below
            const dLng = deg2rad(lng2-lng1);
            const a = 
              Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
              Math.sin(dLng/2) * Math.sin(dLng/2)
              ; 
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
            const d = R * c; // Distance in km
            return Math.round(d*1000);
          }
          
          function deg2rad(deg) {
            return deg * (Math.PI/180)
          }

        // than use it to load from remote APIs some places nearby
        loadPlaces(position.coords)
            .then((places) => {
                places.forEach((place) => {
                    
                    const desLatitude = place.location.lat;
                    const desLongitude = place.location.lng;   
                    destinationCoords = {latitude: desLatitude, longitude: desLongitude};

                    alert(`You are ${getDistance(position.coords.latitude, position.coords.longitude, desLatitude, desLongitude)} meters away from your destination ${place.name}. Keep your phone upright and scan around you to find your destination.`);   

                    // console.log(desLatitude, desLongitude)
                    // add place name
                    const destinationEntity = document.createElement('a-link');
                    destinationEntity.setAttribute('gps-entity-place', `latitude: ${desLatitude}; longitude: ${desLongitude};`);
                    destinationEntity.setAttribute('title', place.name);
                    // destinationEntity.setAttribute('style','color: blue');
                    // destinationEntity.setAttribute('title-color', 'blue');
                    destinationEntity.setAttribute('scale', '15 15 15');
                    destinationEntity.addEventListener('loaded', () => {
                        window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
                    });
                    console.log(destinationEntity)
                    scene.appendChild(destinationEntity);
                    
                    // Attempt of making arrow through cone                    
                    const arrowEntity = document.createElement('a-entity');
                    // arrowEntity.setAttribute('geometry', 'primitive: cone;');
                    // arrowEntity.setAttribute('material', 'color: red;');
                    arrowEntity.setAttribute('gltf-model','./assets/arrow.gltf')
                    arrowEntity.setAttribute('scale', '2 2 2');
                    arrowEntity.setAttribute('position', '0 -0.9 -10');
                    arrowEntity.setAttribute('look-at', '[gps-camera]');
                    arrowEntity.setAttribute('fixed', 'true')
                    arrowEntity.addEventListener('loaded', () => {
                        window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
                    });
                    scene.appendChild(arrowEntity);
                    console.log(arrowEntity)

                    setInterval(() => {
                        window.addEventListener('deviceorientation', (event) => {
                            if (destinationCoords !== null) {
                                const alpha = event.alpha;
                                if (alpha !== null) {
                                    const rotateDegrees = calculateRotation(position.coords, destinationCoords, alpha);
                                    arrowEntity.setAttribute('rotation', `0 ${rotateDegrees} 0`);
                                }
                            }
                        });
                    }, 8000);                    
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
