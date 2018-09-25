const yargs = require('yargs').argv;

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

geocode.geoCodeAddress(yargs.address, (err, res)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(JSON.stringify(res,undefined,2));
        weather.getweather(res.Latitude,res.Longitude,(err, result)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(JSON.stringify(result, undefined,2));
            }
        })
    }
});





//https://maps.googleapis.com/maps/api/geocode/json?address=691%20saraswati%20vihar&key=AIzaSyCuT0MT0X87gaffoWTEvAFD1YIAFJqN58Y