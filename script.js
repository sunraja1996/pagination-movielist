const moviesPerPage = 3;
let currentPage = 1;
const movieData =  [
    { title: "The Prestige (2006)", 
    description: "Nolan's finest is The Prestige. Disjointed plots, deception, and magic merged masterfully. Tight, character-driven, ultimate showcase of his cinematic prowess.", 
    imageUrl: './img/prestige.png'},
    { title: "Dunkirk (2014)", 
    description: "Nolan's signature disjointed storytelling captures subjective time in Tenet, while Dunkirk perfects it, merging narratives for suspenseful artistry.", 
    imageUrl: "./img/DunKrik.png" },
    { title: "The Dark Knight (2008)", 
    description: "The Dark Knight, at 15, remains superhero cinema's pinnacle. Its unique impact, unmatched darkness, Ledger's iconic Joker, impeccable pacing, and lasting memories define its perfection.", 
    imageUrl: "./img/Dark Knight.png" },
    { title: "Inception (2010)", 
    description: "Nolan's Inception: DiCaprio's Cobb extracts secrets in dream espionage. Thrilling action, poignant romance, and depth in characters make it timeless.", 
    imageUrl: "./img/Inception.png" },
    { title: "Oppenheimer (2023)", 
    description: "Nolan's visually stunning portrayal of Oppenheimer, anchored by Murphy, features an exceptional ensemble cast, making it a potential biopic masterpiece.", 
    imageUrl: "./img/Oppenheimer.jpeg" },
    { title: "Interstellar (2014)", 
    description: "Interstellar, imperfect due to length and occasional corny themes, excels with stunning visuals, strong cast (McConaughey, Chastain), and emotional father-daughter narrative. Exceptional despite flaws.", 
    imageUrl: "./img/Interstellar.png" },
    { title: "Memento (2000)", 
    description: "Memento : Mind-bending thriller where an amnesiac hunts his wife's killer, using Polaroids and tattoos to navigate fading memories.", 
    imageUrl: "./img/Memento.png" },
    { title: "Batman Begins (2005)", 
    description: "Batman Begins(2005) explores Bruce Wayne's transformation into Batman, delving into his origin, fears, and journey to fight crime.", 
    imageUrl: "./img/Batman Begins.png" },
    { title: "The Dark Knight Rises (2012)", 
    description: "The Dark Knight Rises concludes Christopher Nolan's Batman trilogy, depicting Bruce Wayne's return, struggles against Bane, and ultimate redemption.", 
    imageUrl: "./img/The Dark Knight Rises.png" },
    { title: "Tenet (2020)", 
    description: "Mind-bending action thriller 'Tenet' (2020) explores time manipulation, espionage, and global stakes in a complex narrative directed by Christopher Nolan.", 
    imageUrl: "./img/Tenet.png" },
    { title: "Insomnia (2002)", 
    description: "Insomnia (2002) is a psychological thriller directed by Christopher Nolan, where a detective's guilt intensifies during a murder investigation in Alaska's perpetual daylight.", 
    imageUrl: "./img/Insomnia.png" },
    { title: "Following (1998)", 
    description: "Following(1998) is a psychological thriller by Christopher Nolan about a writer's obsession with following strangers, leading to unexpected consequences.", 
    imageUrl: "./img/Following.png" },
   
];

const movieList = document.getElementById("movieList");
const pagination = document.getElementById("pagination");

function displayMovies(page) {
  movieList.innerHTML = "";
  const startIndex = (page - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;

  for (let i = startIndex; i < endIndex && i < movieData.length; i++) {
    const movie = movieData[i];
    const movieCard = `
      <div class="col-md-4 mb-4">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${movie.imageUrl}" alt="Movie Image" style="width: 18rem; height: 22rem; object-fit: cover;">
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">${movie.description}</p>
          </div>
        </div>
      </div>
    `;
    movieList.insertAdjacentHTML("beforeend", movieCard);
  }
}

function updatePagination() {
    const totalPages = Math.ceil(movieData.length / moviesPerPage);
    pagination.innerHTML = `
      <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
        <a class="page-link" href="#" onclick="changePage(${currentPage - 1})">Previous</a>
      </li>
    `;
  
    for (let i = 1; i <= totalPages; i++) {
      pagination.innerHTML += `
        <li class="page-item ${currentPage === i ? 'active' : ''}">
          <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
        </li>
      `;
    }
  
    pagination.innerHTML += `
      <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
        <a class="page-link" href="#" onclick="changePage(${currentPage + 1})">Next</a>
      </li>
    `;
  }

function changePage(page) {
  if (page < 1 || page > Math.ceil(movieData.length / moviesPerPage)) {
    return;
  }
  currentPage = page;
  displayMovies(currentPage);
  updatePagination();
}

displayMovies(currentPage);
updatePagination();

console.log(movieData)
