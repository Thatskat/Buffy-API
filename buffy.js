// Get variables from document
const season = document.getElementById("season");
const episode = document.getElementById("epnumber");
const btn = document.getElementById("submitbtn");
const eptitle = document.getElementById("title");
const seasonep = document.getElementById("season-ep");
const plot = document.getElementById("plot");
const airdate = document.getElementById("airdate");
const director = document.getElementById("director");
const writers = document.getElementById("writers");
const quote = document.getElementById("quote");
const eptriivia = document.getElementById("eptrivia");
const imdblink = document.getElementById("imdblink");

const episodeinformation = document.getElementById("episode-information");
const errorMessage = document.getElementById("error");

const apiURL = 'https://buffy-the-vampire-slayer-api.herokuapp.com/';
const apiEpisode = 'episode/';
const apiSeason = '/season/';
const IMDB = 'https://www.imdb.com/title/tt0118276/?';


episodeinformation.style.display = "none";
errorMessage.style.display = "none";

btn.addEventListener("click", EpisodeFacts);

async function EpisodeFacts () {
  const res = await fetch("")
}