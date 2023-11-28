// Selecting the HTML elements by their IDs
const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");

// API endpoint for fetching jokes
const url = "https://v2.jokeapi.dev/joke/Dark?type=single";

// Function to fetch and display a joke
// function displayJoke() {
    
//     jokeContainer.classList.remove("fade");

//     fetch(url)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {
//             jokeContainer.textContent = `${data.joke}`;
//             jokeContainer.classList.add("fade");
//         });
// }

// better code -->
let getJoke = function(){

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
//initial joke display when page is first opened
getJoke();