 const API_KEY = 'api_key=ac65e6dafe2c75dc3ef4952586bd6d3d';
 const BASE_URL ='https://api.themoviedb.org/3';
 const API_URL= BASE_URL+'/discover/movie?sort_by=popularity.desc&'+API_KEY;
 const IMG_URL ='https://image.tmdb.org/t/p/w500/';
 const container = document.getElementById('container');
 const form=document.getElementById('form');
 const search=document.getElementById('search');
 const searchURL= BASE_URL+'/search/movie?'+API_KEY;



getmovies(API_URL)
function getmovies(url){
fetch(url).then(res => res.json()).then(data =>{
   showMovies(data.results);
})
}


function showMovies(data){

    container.innerHTML= '';

data.forEach(movie => {

    const {title,vote_average,overview,poster_path} = movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add=('movie');
    movieEl.innerHTML=`
    <div class="movie">
    <img src="${IMG_URL+poster_path}" alt="${title}"/>
    <div class="movie-details">
        <h3>${title}</h3>
        <h4><span class="">Rating:${vote_average}</span></h4>
        
    </div>
        <div class="details">
        
            <h3>About:</h3>
            ${overview}
           </div>
        </div>
`
    container.appendChild(movieEl);
})
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm =search.value;
    if(searchTerm)
    {
        getmovies(searchURL+'&query='+searchTerm);
    }else{
        getmovies(API_URL);
    }
})
