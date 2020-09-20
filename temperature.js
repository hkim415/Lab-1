
// A function that converts fahrenheit to celcius.
const fToC = (f) => {
    //formula for fahrenheit to celcius
    let c = (f - 32) * 5 / 9;

    //conditional display depending on the value of f(farenheit)
    if(!f) {
        console.log("Please enter the temperature.");
    } else if(c.toFixed(1)-Math.floor(c) === 0){
        console.log("When it's " + f + " degrees Fahrenheit, it is " + Math.floor(c) + " degrees Celcius.");
    } else {
        console.log("When it's " + f + " degrees Fahrenheit, it is " + c.toFixed(1) + " degrees Celcius.");
    }
};

const toF = (c, k) => {
    //formula for celcius to fahrenheit
    let cf = (c * 9/5) + 32;
    //formula for kelvin to fahrenheit
    let kf = (k - 273.15) * 9/5 + 32;

    console.log("When it's " + c + " degrees Celcius, it is " + cf.toFixed(1) + " degrees Fahrenheit.");
    console.log("When it's " + k + " degrees Kelvin, it is " + kf.toFixed(1) + " degrees Fahrenheit.");
}

fToC(68);
toF(0, 0);