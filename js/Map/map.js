mapboxgl.accessToken =
  "pk.eyJ1IjoiYWR2ZW50ZXIiLCJhIjoiY2t1eHJubjR5MmE4ZTJvcWp3dGJ3MG52ayJ9.xowR6COLlwDH5Lb7gNOx6Q";

function createPopupHTML(title, address, content, link, linkContent) {
  return `<h3><strong>${title}</strong></h3>
  <div>
  <p>Address: ${address}</p>  
  ${link ? `<a href=${link} target="_blank">${linkContent} </a>` : ""}
  <p>${content} </p>
  </div>`;
}

let isGeocoding = true;
const geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  //localGeocoder: coordinatesGeocoder,
  zoom: 15,
  placeholder: `Search of place in HCM`,
  bbox: [106.22435, 10.4, 106.98474, 11],
  proximity: {
    longitude: 106.6633,
    latitude: 10.762622,
  }, // Coordinates of HCM city
  mapboxgl: mapboxgl,

  // reverseGeocode: true,
  //types: Lọc kết quả để chỉ bao gồm một tập hợp con (một hoặc nhiều) loại tính năng có sẵn.
  //Các tùy chọn là country, region, postcode, district, place, locality, neighborhood, address, and poi. Nhiều tùy chọn có thể được phân tách bằng dấu phẩy
  countries: "VN",
  language: "vi",
  marker: {
    color: "orange",
  },
});
function htmlToElement(html) {
  var template = document.createElement("template");
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
}

function loadMapWithStaticData(map) {
  map.on("load", () => {
    map.addSource("places", {
      // This GeoJSON contains features that include an "icon" property. The value of the "icon" property corresponds
      // to an image in the Mapbox Streets style's sprite.
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {
              description: createPopupHTML(
                "Tan Son Nhat International Airport",
                "Trường Sơn, Phường 2, Tân Bình, Thành phố Hồ Chí Minh, Vietnam",
                "Vietnam's biggest airport serves Ho Chi Minh City & has flights to Asia, Europe & Australia.",
                "https://www.vietnamairport.vn/tansonnhatairport/",
                "vietnamairport.vn"
              ),
              icon: "airport-15",
              title: "Tan Son Nhat International Airport",
            },
            geometry: {
              type: "Point",
              coordinates: [106.66309268316434, 10.815449200584297],
            },
          },
          {
            type: "Feature",
            properties: {
              description: createPopupHTML(
                "Tan Son Nhat International Airport",
                "Trường Sơn, Phường 2, Tân Bình, Thành phố Hồ Chí Minh, Vietnam",
                "Vietnam's biggest airport serves Ho Chi Minh City & has flights to Asia, Europe & Australia.",
                "https://www.vietnamairport.vn/tansonnhatairport/",
                "vietnamairport.vn"
              ),
              icon: "airport-15",
              title: "Tan Son Nhat International Airport",
            },
            geometry: {
              type: "Point",
              coordinates: [106.65281783263572, 10.819027326634398],
            },
          },
          {
            type: "Feature",
            properties: {
              description: createPopupHTML(
                "Independence Palace",
                "Bến Thành, District 1, Ho Chi Minh City, Vietnam",
                `Publicly known as Reunification Convention Hall, built on the site of the former Norodom Palace,
                 is a landmark in Ho Chi Minh City (formerly known as Saigon), Vietnam`
              ),
              icon: "museum-15",
              title: "Independence Palace",
            },
            geometry: {
              type: "Point",
              coordinates: [106.69538718665444, 10.776873101354738],
            },
          },
          {
            type: "Feature",
            properties: {
              description: createPopupHTML(
                "Phu Tho Stadium",
                "Nhà Thi Đấu Phú Thọ, 1 Lữ Gia, Phường 15, Quận 11, Thành phố Hồ Chí Minh, Vietnam",
                `A multi-purpose indoor arena, located in District 11, Ho
                    Chi Minh City, Vietnam, within walking distance from the
                    1932-built Phú Thọ Horse Racing Ground.`
              ),
              icon: "stadium-15",
              title: "Phu Tho Stadium",
            },
            geometry: {
              type: "Point",
              coordinates: [106.65780158573511, 10.768956375419705],
            },
          },
          {
            type: "Feature",
            properties: {
              description: createPopupHTML(
                "HCM - University of Science",
                "227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5, Thành phố Hồ Chí Minh, Vietnam",

                `Formerly known as University of Sciences) has been serving as a pioneer in offering various 
                scientific degrees across Southern Vietnam since its original establishment as the Indochina College 
                of Science in 1941.`,
                "https://www.hcmus.edu.vn/",
                "Homepage"
              ),
              icon: "school-15",
              title: "HCM - University of Science",
            },
            geometry: {
              type: "Point",
              coordinates: [106.68166525411175, 10.762405378277762],
            },
          },
        ],
      },
    });
    // Add a layer showing the places.
    map.addLayer({
      id: "places",
      type: "symbol",
      source: "places",
      layout: {
        "icon-image": "{icon}",
        "icon-allow-overlap": true,
        "icon-size": 1.5,
        //add lable to marker
        "text-field": ["get", "title"],
        "text-variable-anchor": ["top", "bottom", "left", "right"],
        "text-radial-offset": 0.5,
        "text-size": 12,
        "text-justify": "auto",
      },
    });

    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on("click", "places", (e) => {
      // Copy coordinates array.
      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.description;

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on("mouseenter", "places", () => {
      map.getCanvas().style.cursor = "pointer";
    });

    // Change it back to a pointer when it leaves.
    map.on("mouseleave", "places", () => {
      map.getCanvas().style.cursor = "";
    });
  });

  // map.on("click", (e) => {
  //   console.log(e.lngLat.wrap());
  // });
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map", //ID of container block
    style: "mapbox://styles/mapbox/streets-v11", // style
    center: center, // starting position [longitule, latitude]
    zoom: 11, // starting zoom(At HCM City)
  });

  const defautLocation = new mapboxgl.Marker().setLngLat(center).addTo(map);
  // Add zoom and rotation controls to the map.
  map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
  loadMapWithStaticData(map);

  // Add the control to the map.

  // const mapboxDirection = new MapboxDirections({
  //   accessToken: mapboxgl.accessToken,
  //   //localGeocoder: coordinatesGeocoder,
  //   zoom: 15,
  //   //placeholder: `Search of place in HCM`,
  //   geocoder: geocoder,
  //   // bbox: [106.22435, 10.4, 106.98474, 11],
  //   // countries: "VN",
  //   language: "vi",
  //   // proximity: {
  //   //   longitude: 106.6633,
  //   //   latitude: 10.762622,
  //   // }, // Coordinates of HCM city
  //   mapboxgl: mapboxgl,
  // });

  //document.getElementById("geocoder").appendChild(geocoder.onAdd(map));
}
//control function for map

function switchMapControl() {
  const geocoderChild = document.getElementById("map-geocoding");
  const directionChild = document.getElementById("direction-control");
  if (isGeocoding) {
    directionChild.style.display = "none";
    geocoderChild.style.display = "block";
  } else {
    directionChild.style.display = "block";
    geocoderChild.style.display = "none";
  }
  isGeocoding = !isGeocoding;
  console.log(isGeocoding);
}

function debounceGetSuggestLocation(calback, timeOut = 400) {
  let timer;
  return function (...args) {
    //clearTimeOut to start new process
    clearTimeout(timer);
    //set time debounce
    timer = setTimeout(() => {
      calback.apply(this, args);
    }, timeOut);
  };
}

async function getSuggestLocation(e) {
  const searchString = e.target.value;
  const suggestionList = document.getElementById("geocoding-suggestion");
  const options = geocoder.options;
  const query = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchString}.json?country=${options.countries}&bbox=${options.bbox[0]},${options.bbox[1]},${options.bbox[2]},${options.bbox[3]}&proximity=${options.proximity.longitude},${options.proximity.latitude}&access_token=${options.accessToken}`
  );
  const json = await query.json();
  for (const feature of json.features) {
    console.log(feature);
    const suggestion = htmlToElement(`<li>
    <a>
      <div class="mapboxgl-ctrl-geocoder--suggestion">
        <div class="mapboxgl-ctrl-geocoder--suggestion-title">
          ${feature.text}
        </div>
        <div class="mapboxgl-ctrl-geocoder--suggestion-address">
        ${feature.place_name}
        </div>
      </div>
    </a>
    </li>`);
    suggestionList.appendChild(suggestion);
    suggestionList.style.display = "block";
  }

  //const data = json.routes[0];
  // const route = data.geometry.coordinates;
}

function successLocation(location) {
  setupMap([location.coords.longitude, location.coords.latitude]);
}

function errorLocation() {
  setupMap([106.6633, 10.762622]); //location of HCM city
}
//get current location or go to default location
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

const searchInput = document.getElementById("geocoding-search");
searchInput.addEventListener(
  "keyup",
  debounceGetSuggestLocation((e) => getSuggestLocation(e))
);

searchInput.addEventListener(
  "paste",
  debounceGetSuggestLocation((e) => getSuggestLocation(e))
);
