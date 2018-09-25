const yargs = require('yargs').argv;
const axios = require('axios');

const add = encodeURIComponent(yargs.address);
const geoCodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${add}&key=AIzaSyCuT0MT0X87gaffoWTEvAFD1YIAFJqN58Y`

axios.get(geoCodeURL).then((response) => {

    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address');
    }

    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;

    var weatherURL = `https://api.darksky.net/forecast/8a8f201d8b0f6fae8aeb0c6bda851844/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    
    return axios.get(weatherURL);

}).then((response) => {
   
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    
    console.log(`its currently ${temperature}, It feels like its ${apparentTemperature}`);

}).catch((err) => {
   
    if (err.code === 'ENOTFOUND') {
        console.log('url not responding');
    }
    else {
        console.log(err.message);
    }
});




//https://maps.googleapis.com/maps/api/geocode/json?address=691%20saraswati%20vihar&key=AIzaSyCuT0MT0X87gaffoWTEvAFD1YIAFJqN58Y