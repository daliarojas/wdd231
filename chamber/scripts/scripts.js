const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
const hamburgerBtn = document.getElementById("hamburger-btn");
        const navList = document.getElementById("nav-list");

        hamburgerBtn.addEventListener("click", () => {
            navList.classList.toggle("open");
        });



        const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your actual API key
        const latitude = 40.5613; // Latitude for Sandy, Utah
        const longitude = -111.8516; // Longitude for Sandy, Utah

        const weatherInfo = document.getElementById('weather-info');
        const forecastInfo = document.getElementById('forecast-info');
        const spotlightsSection = document.getElementById('spotlights');

        // Get Current Weather
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`)
            .then(response => response.json())
            .then(data => {
                const temperature = data.main.temp;
                const description = data.weather[0].description;

                weatherInfo.innerHTML = `<p><strong>Current Temperature:</strong> ${temperature}°F</p>
                                         <p><strong>Description:</strong> ${description}</p>`;
            })
            .catch(error => {
                console.error('Error fetching current weather:', error);
                weatherInfo.innerHTML = '<p>Failed to load current weather.</p>';
            });

        // Get 3-Day Forecast
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial&cnt=3`) // Use cnt=3 for 3 days
            .then(response => response.json())
            .then(data => {
                let forecastHTML = '';
                data.list.forEach(item => {
                    const date = new Date(item.dt * 1000).toLocaleDateString();
                    const temp = item.main.temp;
                    const description = item.weather[0].description;

                    forecastHTML += `<div>
                                       <p><strong>Date:</strong> ${date}</p>
                                       <p><strong>Temp:</strong> ${temp}°F</p>
                                       <p>${description}</p>
                                     </div>`;
                });
                forecastInfo.innerHTML = forecastHTML;
            })
            .catch(error => {
                console.error('Error fetching weather forecast:', error);
                forecastInfo.innerHTML = '<p>Failed to load weather forecast.</p>';
            });

        // Fetch and Display Spotlights
        fetch('data/members.json') // Path to your members.json file
            .then(response => response.json())
            .then(data => {
                const goldSilverMembers = data.members.filter(member => member.membership === 'Gold' || member.membership === 'Silver');
                if (goldSilverMembers.length > 0) {
                    const spotlightMembers = [];
                    while (spotlightMembers.length < 3 && goldSilverMembers.length > 0) {
                        const randomIndex = Math.floor(Math.random() * goldSilverMembers.length);
                        spotlightMembers.push(goldSilverMembers.splice(randomIndex, 1)[0]);
                    }

                    let spotlightsHTML = '';
                    spotlightMembers.forEach(member => {
                        spotlightsHTML += `<div class="spotlight-card">
                                           <img src="${member.logo}" alt="${member.name} Logo">
                                           <h3>${member.name}</h3>
                                           <p>${member.address}</p>
                                           <p>Phone: ${member.phone}</p>
                                           <p><a href="${member.website}" target="_blank" rel="noopener noreferrer">${member.website}</a></p>
                                           <p>Membership Level: ${member.membership}</p>
                                         </div>`;
                    });
                    spotlightsSection.innerHTML += spotlightsHTML;
                } else {
                    spotlightsSection.innerHTML += '<p>No Gold or Silver members to display.</p>';
                }
            })
            .catch(error => {
                console.error('Error fetching members data:', error);
                spotlightsSection.innerHTML = '<p>Failed to load member spotlights.</p>';
            });