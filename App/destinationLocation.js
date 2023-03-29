let queryString = window.location.search;
let params = new URLSearchParams(queryString);
let geoLatitude = params.get('geoLatitude')
let geoLongitude = params.get('geoLongitude')

let destinationLocation;
const CLG_PlACES = [
    {
      name: "LIBRARY",
      url: "./assets/arrow.gltf",
      location: {
        lat: 23.108156404203143, // add here latitude if using static data
        lng: 72.59498734978379, // add here longitude if using static data
      },
    },
    {
      name: "A-block",
      url: "./assets/arrow.gltf",
      location: {
        lat: 23.1064422997269, // add here latitude if using static data
        lng: 72.59575386356772, // add here longitude if using static data
      },
    },
    {
      name: "M-Block",
      url: "./assets/arrow.gltf",
      location: {
        lat: 23.10796558905296, // add here latitude if using static data
        lng: 72.59461530062512, // add here longitude if using static data
      },
    },
    {
      name: "GTU",
      url: "./assets/arrow.gltf",
      location: {
        lat: 23.105923398933385, // add here latitude if using static data
        lng: 72.59414710034639, // add here longitude if using static data
      },
    },
  ];
  
  const HOME_PlACES = [
    {
      name: "FireStation",
      url: "./assets/arrow.gltf",
      location: {
        lat: 23.0560196454931, // add here latitude if using static data
        lng: 72.66744606670677, // add here longitude if using static data
      },
    },
    {
      name: "Divit Hills",
      url: "./assets/arrow.gltf",
      location: {
        lat: 23.05760351001347, // add here latitude if using static data
        lng: 72.66268710592351, // add here longitude if using static data
      },
    },
    {
      name: "Shiv Residency",
      url: "./assets/arrow.gltf",
      location: {
        lat: 23.057774877427374, // add here latitude if using static data
        lng: 72.66073728561422, // add here longitude if using static data
      },
    },
];

function setDestination(place) {
    // destinationLocation = HOME_PlACES[place-1];x
    destinationLocation = CLG_PlACES[place-1];
    alert(destinationLocation.name);
    window.location.assign(
      `./navigator.html?latitude=${destinationLocation.location.lat}&longitude=${destinationLocation.location.lng}&geoLatitude=${geoLatitude}&geoLongitude=${geoLongitude}`
    );
}
  