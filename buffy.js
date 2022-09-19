// Get variables from document
const season = document.getElementById("season");
const episode = document.getElementById("epnumber");
const btn = document.getElementById("submitbtn");
const eptitle = document.getElementById("title");
const seasonep = document.getElementById("season-ep");
const plot = document.getElementById("plot");
const airdate = document.getElementById("airdate");
const director = document.getElementById("director");
const quote = document.getElementById("quote");
const eptrivia = document.getElementById("eptrivia");
const imdblink = document.getElementById("imdblink");

const episodeinformation = document.getElementById("episode-information");
const errorMessage = document.getElementById("error");

const apiURL = 'https://buffy-the-vampire-slayer-api.herokuapp.com/';
const apiEpisode = 'episode/';
const apiSeason = '/season/';

episodeinformation.style.display = "none";
errorMessage.style.display = "none";

btn.addEventListener("click", Search);

function Search() {
 const seasonQuery = season.value;
 const episodeQuery = episode.value;
 findData(seasonQuery, episodeQuery);
 season.value = "";
 episode.value = "";
}

async function findData(seasonQuery, episodeQuery) {
  try {
    const res = await fetch(`${apiURL}${apiEpisode}${episodeQuery}${apiSeason}${seasonQuery}`);
    const json = await res.json();
    errorMessage.style.display = "none";
    displayEpisode(json);
  } catch (error) {
    errorMessage.style.display = "block";
    episodeinformation.style.display = "none";
  }
}

function displayEpisode (data) {
  console.log(data.Error);
  if(data.Error) {
    errorMessage.style.display = "block";
    episodeinformation.style.display = "none";
    errorMessage.innerHTML = "This Episode of BTVS could not be found 😒 Try Again!";
    return;
  }
  episodeinformation.style.display="block";
  eptitle.innerHTML = data[0].title;
  seasonep.innerHTML = "Season " + data[0].season + " Episode " + data[0].episode_number;
  plot.innerHTML = '<i>"' + data[0].plot + '"</i>';
  airdate.innerHTML = "Original Broadcast Date: " + data[0].air_date;
  director.innerHTML = "Directed by " + data[0].director;
  quote.innerHTML = data[0].quote;
  eptrivia.innerHTML = "Episode Trivia: " + data[0].trivia;
  imdblink.href = data[0].imdb_url;
}