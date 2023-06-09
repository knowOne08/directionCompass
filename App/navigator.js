let queryString = window.location.search;
let params = new URLSearchParams(queryString);
let latitude = params.get('latitude')
let longitude = params.get('longitude')

let geoLatitude = params.get('geoLatitude')
let geoLongitude = params.get('geoLongitude')
console.log(geoLatitude)
console.log(geoLongitude)

function loadplaces(postion){
    const method = 'static';
    // const method = 'api';
    if (method === 'static') {
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
            [ {
                 name: "FireStation",
                 url:"./assets/arrow.gltf",
                 location: {
                     lat: 23.0560196454931,  // add here latitude if using static data
                     lng: 72.66744606670677, // add here longitude if using static data
                 }
             }],
            [ {
                 name: "Home",
                 url:"./assets/arrow.gltf",
                 location: {
                     lat: 23.056784314414482,  // add here latitude if using static data
                     lng: 72.66345756966565, // add here longitude if using static data
                 }
             }],
            [ {
                 name: "Divit Hills",
                 url:"./assets/arrow.gltf",
                 location: {
                     lat: 23.05760351001347,   // add here latitude if using static data
                     lng: 72.66268710592351, // add here longitude if using static data
                 }
             }],
            [ {
                 name: "Shiv Residency",
                 url:"./assets/arrow.gltf",
                 location: {
                     lat: 23.057774877427374,  // add here latitude if using static data
                     lng: 72.66073728561422, // add here longitude if using static data
                 }
             }],
         ];
         
         return Promise.resolve(HOME_PlACES);
    }

}



    
    