const baseURL = "https://api.tvmaze.com/shows";


const  endpoints = {
    shows: "shows"
};

const xhr = new XMLHttpRequest();


xhr.open('GET', `https://api.tvmaze.com/shows"`);

xhr.onload = (response) => {
    const movies = document.querySelector(".shows");
    const data = JSON.parse(response.target.response)

    data.forEach(show => {
             movies.innerHTML += `
             <div class='show_block'>
                <div class="image">
                    <img src="${show.image.medium}"alt="">
                </div>
            <h3>${show.name}</h3>
            <p>Язык:${show.language}</p>
            <p>${show.runtime}</p>
            <p>${show.rating.average}</p>
            <p>${show.genres}</p>
            <button>
            <a href="${show.url}" target="_blank" rel="noreferrer">
            More</a>
            </button>
            </div>
        `;
        })}

