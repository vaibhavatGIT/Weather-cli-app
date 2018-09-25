const request = require('request');

var getweather = (lat,long, callback) => {
    request({
        url: `https://api.darksky.net/forecast/8a8f201d8b0f6fae8aeb0c6bda851844/${lat},${long}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('unable to connec to server');
        } else if (response.statusCode === 400) {
            callback('unable to fetch weather')
        } else if (response.statusCode === 200) {
            callback(undefined,{
                temperature : body.currently.temperature,
                apparentTemperature : body.currently.apparentTemperature,
            });
        }
    });
}

module.exports.getweather = getweather;