mapboxgl.accessToken =
  "pk.eyJ1IjoiYWR2ZW50ZXIiLCJhIjoiY2t1eHJubjR5MmE4ZTJvcWp3dGJ3MG52ayJ9.xowR6COLlwDH5Lb7gNOx6Q";

function addPopupInfoWhenClick(map) {
  map.on("load", () => {
    map.addSource("places", {
      // This GeoJSON contains features that include an "icon"
      // property. The value of the "icon" property corresponds
      // to an image in the Mapbox Streets style's sprite.
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {
              description: `<h3><strong>Tan Son Nhat International Airport</strong></h3>
              <div>
              <p> Trường Sơn, Phường 2, Tân Bình, Thành phố Hồ Chí Minh, Vietnam</p>  
              <a href="https://www.vietnamairport.vn/tansonnhatairport/" target="_blank" alt="Go to airport website">vietnamairport.vn</a>
              <p>Vietnam's biggest airport serves Ho Chi Minh City & has flights to Asia, Europe & Australia.</p> <br>
              </div>
                `,
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
              description: `<h3.<strong>Tan Son Nhat International Airport</strong></h3>
              <div>
              <p> Trường Sơn, Phường 2, Tân Bình, Thành phố Hồ Chí Minh, Vietnam</p>  
              <a href="https://www.vietnamairport.vn/tansonnhatairport/" target="_blank" alt="Go to airport website">vietnamairport.vn</a>
              <p>Vietnam's biggest airport serves Ho Chi Minh City & has flights to Asia, Europe & Australia.</p> <br>
              </div>`,
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
              description: `<h3><strong>Independence Palace</strong></h3>
              <div>
                <p> Bến Thành, District 1, Ho Chi Minh City, Vietnam</p>
                <p> also publicly known as Reunification Convention Hall, built on the site of the former Norodom Palace,
                 is a landmark in Ho Chi Minh City (formerly known as Saigon), Vietnam.</p>
              </div>`,
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
              description: `<h3><strong>Phu Tho Stadium</strong></h3>
              <div>
              <p>Nhà Thi Đấu Phú Thọ, 1 Lữ Gia, Phường 15, Quận 11, Thành phố Hồ Chí Minh, Vietnam </p>
                <p> is a multi-purpose indoor arena, located in District 11, Ho Chi Minh City, Vietnam,
                 within walking distance from the 1932-built Phú Thọ Horse Racing Ground. </p>
              </div>`,
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
              description: `<h3><strong>HCM - University of Science</strong><p></h3>
              <div>
              <p>227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5, Thành phố Hồ Chí Minh, Vietnam </p>
              <a href="https://www.hcmus.edu.vn/" target="_blank" title="Opens in a new window">Homepage</a> <br>
                Formerly known as University of Sciences) has been serving as a pioneer in offering various 
                scientific degrees across Southern Vietnam since its original establishment as the Indochina College 
                of Science in 1941.</p>
              </div>`,
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
}

const coordinatesGeocoder = function (query) {
  // Match anything which looks like
  // decimal degrees coordinate pair.
  const matches = query.match(
    /^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i
  );
  if (!matches) {
    return null;
  }

  function coordinateFeature(lng, lat) {
    return {
      center: [lng, lat],
      geometry: {
        type: "Point",
        coordinates: [lng, lat],
      },
      place_name: "Lat: " + lat + " Lng: " + lng,
      place_type: ["coordinate"],
      properties: {},
      type: "Feature",
    };
  }

  const coord1 = Number(matches[1]);
  const coord2 = Number(matches[2]);
  const geocodes = [];

  if (coord1 < -90 || coord1 > 90) {
    // must be lng, lat
    geocodes.push(coordinateFeature(coord1, coord2));
  }

  if (coord2 < -90 || coord2 > 90) {
    // must be lat, lng
    geocodes.push(coordinateFeature(coord2, coord1));
  }

  if (geocodes.length === 0) {
    // else could be either lng, lat or lat, lng
    geocodes.push(coordinateFeature(coord1, coord2));
    geocodes.push(coordinateFeature(coord2, coord1));
  }

  return geocodes;
};

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map", //ID of container block
    style: "mapbox://styles/mapbox/streets-v11", // style
    center: center, // starting position [longitule, latitude]
    zoom: 9, // starting zoom(At HCM City, zoom scale: 152.874 - 143.655 meters/pixel)
  });

  const defautLocation = new mapboxgl.Marker().setLngLat(center).addTo(map);
  // Add zoom and rotation controls to the map.
  map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
  addPopupInfoWhenClick(map);

  // Add the control to the map.
  map.addControl(
    new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      localGeocoder: coordinatesGeocoder,
      zoom: 4,
      placeholder: `Try: ${center}`,
      mapboxgl: mapboxgl,
      reverseGeocode: true,
      marker: {
        color: "orange",
      },
    }),
    "top-left"
  );
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
