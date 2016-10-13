function onDeviceReady() {
    var function_name1 = function(){
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    };
    var el = getElementById('findMe');

    el.addEventListener('click', function_name1, false);
};
document.addEventListener("deviceready", onDeviceReady, false);

    // onSuccess Callback 
        // This method accepts a Position object, which contains the 
        // current GPS coordinates 
        // 
        var onSuccess = function(position) {
            alert('Latitude: '          + position.coords.latitude          + '\n' +
                  'Longitude: '         + position.coords.longitude         + '\n' +
                  'Altitude: '          + position.coords.altitude          + '\n' +
                  'Accuracy: '          + position.coords.accuracy          + '\n' +
                  'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                  'Heading: '           + position.coords.heading           + '\n' +
                  'Speed: '             + position.coords.speed             + '\n' +
                  'Timestamp: '         + position.timestamp                + '\n');
        };
     
        // onError Callback receives a PositionError object 
        // 
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }     


