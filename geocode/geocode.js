const request = require('request');

geoCodeAddress = (address, callback) => {
    const add = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${add}&key=AIzaSyCuT0MT0X87gaffoWTEvAFD1YIAFJqN58Y`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('unable to connect to google server');
        } else if (body.status === "OK") {
            callback(undefined, {
                Address: body.results[0].formatted_address,
                Latitude: body.results[0].geometry.location.lat,
                Longitude: body.results[0].geometry.location.lng
            })

        }
        else if(body.status === "ZERO_RESULTS"){
            callback('cant find this address');
        }

    }
    );

}

module.exports.geoCodeAddress = geoCodeAddress;