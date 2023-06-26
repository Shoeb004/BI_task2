
let temp = document.querySelector('#temp');
let display = document.querySelector('.span');
const fToC = (temperature) => {
    value = (temperature - 32) * (5 / 9);
    value = value.toFixed(2);
    display.innerHTML = `Result ${value} &deg;C`;
}
const fToK = (temperature) => {
    value = (temperature - 32) * (5 / 9) + 273.15;
    value = value.toFixed(2);
    display.innerHTML = `Result ${value} &#176;K`;
}
const cToK = (temperature) => {
    // alert('C to K');

    value = (temperature + 273.15);
    value = value.toFixed(2);
    display.innerHTML = `Result ${value} &deg;K`;
}
const cToF = (temperature) => {
    // alert('C to F');
    value = (temperature * 9 / 5) + 32;
    value = value.toFixed(2);
    display.innerHTML = `Result ${value} &deg;F`;
}
const kToC = (temperature) => {
    value = (temperature - 273.15);
    value = value.toFixed(2);
    display.innerHTML = `Result ${value} &deg;C`;
}
const kToF = (temperature) => {
    value = (temperature - 273.15) * (9 / 5) + (32);
    value = value.toFixed(2);
    display.innerHTML = `Result ${value} &deg;F`;
}

function func() {

    let temperature = temp.value;
    temperature = parseInt(temperature);
    let dropdown = document.querySelector('#dropdown').value;
    let id = document.querySelector('#id').value;
    if (!temperature) {
        alert('Please Enter Correct Value');
        temp.value = '';
        return;
    }

    if (id === 'kelvin' && dropdown === 'fahrenheit') {
        // alert("kevin and Fahrenite");
        kToF(temperature);
        temp.value = '';
    }
    else if (id === 'kelvin' && dropdown === 'celcius') {
        // alert("K and Celcius");
        kToC(temperature);
        temp.value = '';
    }
    if (id === 'celcius' && dropdown === 'fahrenheit') {
        // alert("C and F");
        cToF(temperature);
        temp.value = '';

    }
    else if (id === 'celcius' && dropdown === 'kelvin') {
        // alert("C and K");
        cToK(temperature);
        temp.value = '';
    }
    if (id === 'fahrenheit' && dropdown === 'celcius') {
        // alert("F and C");
        fToC(temperature);
        temp.value = '';
    }
    else if (id === 'fahrenheit' && dropdown === 'kelvin') {
        // alert("F and C");
        fToK(temperature);
        temp.value = '';
    }

}

