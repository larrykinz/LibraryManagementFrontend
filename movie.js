const API_KEY = "api_key=717ccf6765dcaa577801cadcc372f394";
const BASE_URL = "https://aoi.themoviedb.org/3/";
const MOVIE_URL = ${BASE_URL}movie/popular?${API_KEY} ;
const SEARCHMOVIE_URL = ${BASE_URL}search/movie?${API_KEY} ;
const IMAGE_URL = "https://image.tmdb.org/t/p/w500/"

const fetchMovies = (url) =>{
     fetch(url)
     .then((Response)=> Response.json())
     .then((data) =>{
        console.log(data)
     })
};

fetchMovies(MOVIE_URL) async (url)=>{

    
}