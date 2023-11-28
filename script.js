// Selecting the HTML elements by their IDs
const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");

// API endpoint for fetching jokes
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

// Function to fetch and display a joke
let getJoke = () => {

    // Remove the "fade" class to make the text appear
    jokeContainer.classList.remove("fade");

     // Fetching data from the specified API
    fetch(url)
    .then(data => data.json()) //the response as JSON
    .then(item =>{

        // Updating the text content of the joke container with the fetched joke
        jokeContainer.textContent = `${item.joke}`;

        // Adding the "fade" class to apply a fade-in effect
        jokeContainer.classList.add("fade");
    });
}
btn.addEventListener("click",getJoke);
getJoke();