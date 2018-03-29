

const map = (function () {
    return {
        init: function () {

            window.initMap = function() {
                var uluru = {lat:53.916784, lng:27.627281}; 
                var me = {lat:53.916784, lng:27.597281}; 
               
                var styledMapType = new google.maps.StyledMapType( 
                    [
                        {
                          "elementType": "geometry",
                          "stylers": [
                            {
                              "color": "#f5f5f5"
                            }
                          ]
                        },
                        {
                          "elementType": "labels.icon",
                          "stylers": [
                            {
                              "visibility": "off"
                            }
                          ]
                        },
                        {
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#616161"
                            }
                          ]
                        },
                        {
                          "elementType": "labels.text.stroke",
                          "stylers": [
                            {
                              "color": "#f5f5f5"
                            }
                          ]
                        },
                        {
                          "featureType": "administrative.land_parcel",
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#bdbdbd"
                            }
                          ]
                        },
                        {
                          "featureType": "poi",
                          "elementType": "geometry",
                          "stylers": [
                            {
                              "color": "#eeeeee"
                            }
                          ]
                        },
                        {
                          "featureType": "poi",
                          "elementType": "labels.text",
                          "stylers": [
                            {
                              "visibility": "off"
                            }
                          ]
                        },
                        {
                          "featureType": "poi",
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#757575"
                            }
                          ]
                        },
                        {
                          "featureType": "poi.business",
                          "stylers": [
                            {
                              "visibility": "off"
                            }
                          ]
                        },
                        {
                          "featureType": "poi.park",
                          "elementType": "geometry",
                          "stylers": [
                            {
                              "color": "#e5e5e5"
                            }
                          ]
                        },
                        {
                          "featureType": "poi.park",
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#9e9e9e"
                            }
                          ]
                        },
                        {
                          "featureType": "road",
                          "elementType": "geometry",
                          "stylers": [
                            {
                              "color": "#ffffff"
                            }
                          ]
                        },
                        {
                          "featureType": "road",
                          "elementType": "labels.icon",
                          "stylers": [
                            {
                              "visibility": "off"
                            }
                          ]
                        },
                        {
                          "featureType": "road.arterial",
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#757575"
                            }
                          ]
                        },
                        {
                          "featureType": "road.highway",
                          "elementType": "geometry",
                          "stylers": [
                            {
                              "color": "#dadada"
                            }
                          ]
                        },
                        {
                          "featureType": "road.highway",
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#616161"
                            }
                          ]
                        },
                        {
                          "featureType": "road.local",
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#9e9e9e"
                            }
                          ]
                        },
                        {
                          "featureType": "transit",
                          "stylers": [
                            {
                              "visibility": "off"
                            }
                          ]
                        },
                        {
                          "featureType": "transit.line",
                          "elementType": "geometry",
                          "stylers": [
                            {
                              "color": "#e5e5e5"
                            }
                          ]
                        },
                        {
                          "featureType": "transit.station",
                          "elementType": "geometry",
                          "stylers": [
                            {
                              "color": "#eeeeee"
                            }
                          ]
                        },
                        {
                          "featureType": "water",
                          "stylers": [
                            {
                              "color": "#86a77a"
                            }
                          ]
                        },
                        {
                          "featureType": "water",
                          "elementType": "geometry",
                          "stylers": [
                            {
                              "color": "#c9c9c9"
                            }
                          ]
                        },
                        {
                          "featureType": "water",
                          "elementType": "geometry.fill",
                          "stylers": [
                            {
                              "color": "#86a77a"
                            }
                          ]
                        },
                        {
                          "featureType": "water",
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#9e9e9e"
                            }
                          ]
                        }
                      ],
                      {name: 'Green'});
            
                //var iconBase = '../../assets/images/content/map_marker.svg';   
                
                //var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
                /*var marker = new google.maps.Marker({
                  position: myLatLng,
                  map: map,
                 
                });*/


                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 14,
                    center: uluru,
                    mapTypeControlOptions: {
                        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'Green']
                      }
                });
                var marker = new google.maps.Marker({
                    position: me,
                    map: map,
                    //icon: iconBase + '../../assets/images/content/map_marker.svg'
                    icon: {
                        url: "../assets/images/content/map_marker.svg",
                        scaledSize: new google.maps.Size(64, 64)
                    }
                });
            
                map.mapTypes.set('Green', styledMapType);
                    map.setMapTypeId('Green');
            
            };
            /*
            ymaps.ready(init);
            var myMap;

            function init() {
                myMap = new ymaps.Map("map", {
                    center: [59.93763230383318, 30.39981405175899],
                    zoom: 11,
                    controls: {}
                });
                myMap.behaviors.disable("scrollZoom");

                var coords = [
                    [59.94554327989287, 30.38935262114668], [59.91142323563909, 30.50024587065841], [59.88693161784606, 30.319658102103713], [59.97033574821672, 30.315194906302924]
                ]/*,
                    myCollection = new ymaps.GeoObjectCollection({}, {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/map-marker.svg',
                        iconImageSize: [46, 57],
                        iconImageOffset: [-26, -52]
                    });
                for (var i = 0; i < coords.length; i++) {
                    myCollection.add(new ymaps.Placemark(coords[i]));
                }
                myMap.geoObjects.add(myCollection);*/
            /*}*/
        },
    };
}());
module.exports = map;