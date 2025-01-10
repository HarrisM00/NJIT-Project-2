/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = Vue.createApp({
      created() {
          fetch('movies.json').then(response => response.json()).then(json => {
              this.movies = json;
          });
      },
      data() {
          return {
              // Step 1: Add appTitle and owner
              appTitle: "My Movie Gallery",
              owner: "Your GitHub Username",
  
              // Step 2: Add movies array
              movies: []
          };
      },
      methods: {
          // Step 3, 4, 5: Add methods for liking, disliking, and toggling posters
          like(movie) {
              movie.likes++;
          },
          dislike(movie) {
              movie.dislikes++;
          },
          nextPoster(movie) {
              movie.posterindex = (movie.posterindex + 1) % movie.posters.length;
          }
      }
  });
  
  vue_app.mount("#vue_app");
  