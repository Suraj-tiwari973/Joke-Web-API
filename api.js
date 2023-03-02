const jokeText = document.getElementById("joke-text");
const btn = document.getElementById("btn");
const apiUrl = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single"
let getJoke = () =>{
    jokeText.classList.remove("fade");  // js action on css..// no class in html, it comes from css through js.
    fetch(apiUrl)
    .then(data => data.json())    // fetch api in javascript..
    .then(item => {
        jokeText.textContent = `${item.joke}`;
        jokeText.classList.add("fade");
    });
}

btn.addEventListener('click',getJoke);


