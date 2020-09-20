let c = 0;

let fToC = (f) => {
    c = (f - 32) * 5 / 9;
    console.log("When it's " + f + " degrees Fahrenheit, it is " + c + " degrees Celcius.");
};

fToC(32);