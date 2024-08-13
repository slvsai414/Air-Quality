// const form = document.getElementById("weather-form");
// const cityInput = document.getElementById("city");
// const lon = document.getElementById("lon");
// const lat = document.getElementById("lat");

// form.addEventListener("submit", async (event) => {
//     event.preventDefault(); // Prevent the form from submitting the traditional way

//     const city = cityInput.value.trim();
//     if (!city) {
//         alert('Please enter a city.');
//         return;
//     }

//     // URL to fetch weather data from RapidAPI
//     const url = `https://open-weather13.p.rapidapi.com/city/${encodeURIComponent(city)}`;
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'b9a63f3976mshf2c87080df22f49p143a12jsn1e230225e8c8',
//             'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
//         }
//     };
//     fetch(url, options)
//     .then(response => response.json())
//     .then(result => {
//         let result_data = result.data;
//         console
//     })
// });



// fetch(url,options)
// .then(response => response.json())
// .then(result => {
//     let result_data = result.data;
//     console.log(result_data);
//     lon.textContent = result_data.lon;
//     lat.textContent = result_data.lat;

// })


const form = document.getElementById("weather-form");
const cityInput = document.getElementById("city");
const lonElement = document.getElementById("lon");
const latElement = document.getElementById("lat");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const city = cityInput.value.trim();
    if (!city) {
        alert('Please enter a city.');
        return;
    }

    const url = `https://open-weather13.p.rapidapi.com/city/${encodeURIComponent(city)}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b9a63f3976mshf2c87080df22f49p143a12jsn1e230225e8c8',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        const resultData = result.data;

        if (resultData) {
            lonElement.textContent = resultData.lon || 'N/A';
            latElement.textContent = resultData.lat || 'N/A';
        } else {
            alert('No data available for the entered city.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Failed to fetch weather data. Please try again.');
    }
});
console.log('City:', city);
console.log('Response:', response);
console.log('Result:', result);
console.log('Result Data:', resultData);

