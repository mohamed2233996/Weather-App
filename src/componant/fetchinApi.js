

let API_KAY = "41f09b62ff9f4ac5886143227231309"
const cityName = document.getElementsByClassName("cityName")
const temp_c = document.getElementsByClassName("temp_c")
const time = document.getElementsByClassName("time")
const windfast = document.getElementsByClassName("windfast")
const humidity = document.getElementsByClassName("humidity")
const pressure = document.getElementsByClassName("pressure")
const natural = document.getElementsByClassName("natural")
const conditonImg = document.getElementsByClassName("conditonImg")
export const search = async () => {
    const ele = document.getElementsByClassName("form-control")
    if (ele[0].value === "") {
        return 0;
    }
    console.log(ele[0].value)
    let url = `http://api.weatherapi.com/v1/current.json?key=${API_KAY}&q=${ele[0].value}&aqi=no`

    const response = await fetch(url);
    const data = await response.json();



    //chng info



    cityName[0].innerHTML = data.location.country
    time[0].innerHTML = data.location.localtime
    temp_c[0].innerHTML = data.current.temp_c + "°C"
    windfast[0].innerHTML = data.current.wind_kph + "km/h"
    humidity[0].innerHTML = data.current.humidity + "%"
    pressure[0].innerHTML = data.current.pressure_in
    natural[0].innerHTML = data.current.condition.text


    function changeScr() {
        conditonImg[0].src = data.current.condition.icon
    }
    changeScr()

    console.log(data)


}


const forminput = document.querySelector(".search-input input");

if (forminput) {
    forminput.addEventListener("keypress", function (event) {
        if (event.keyCode == 13) {
            search();
        };
    });
};




// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementsByClassName("search-input");

//     console.log(form);


// //     if (form[0]) {
// //         form.addEventListener('submit',(e)=> {
// //             e.preventDefault();
// //             localStorage.setItem('city',form[0][0].value)
// //             input.reset()
// //             input.city.blur()
// //             forcast.updateCity(city).then(data => updateUI(data))
// //                 .catch(err => console.log(err))
// //         })
// //     }
// // })
// // if (localStorage.getItem('city')) {
// //     forcast.updateCity(localStorage.getItem('city'))
// //         .then(data => updateUI(data))
// //         .catch(err => console.log(err))
// // }

// // localStorage.setItem('medo', 22)
