const request = require('request');

var geoCodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        const add = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${add}&key=AIzaSyCuT0MT0X87gaffoWTEvAFD1YIAFJqN58Y`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('unable to connect to google server');
            } else if (body.status === "OK") {
                resolve({
                    Address: body.results[0].formatted_address,
                    Latitude: body.results[0].geometry.location.lat,
                    Longitude: body.results[0].geometry.location.lng
                })

            }
            else if (body.status === "ZERO_RESULTS") {
                reject('cant find this address');
            }

        }
        );
    });
}

geoCodeAddress('new york').then((res) => {
    console.log(JSON.stringify(res, undefined, 2));
}, (err) => {
    console.log(err);
});