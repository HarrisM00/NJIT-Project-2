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
              // App Title and Owner
              appTitle: "My Movie Gallery",
              owner: "YourGitHubUsername",
  
              // Movies Array
              movies: []
          };
      },
      methods: {
          like(movie) {
              movie.likes++;
          },
          dislike(movie) {
              movie.dislikes++;
          },
          nextPoster(movie) {
              movie.posterindex = (movie.posterindex + 1) % movie.posters.length;
          },
          // Step 6: Reset likes and dislikes
          resetFeedback(movie) {
              movie.likes = 0;
              movie.dislikes = 0;
          },
          // Step 7: Sort movies by likes
          sortByLikes() {
              this.movies.sort((a, b) => b.likes - a.likes);
          },
          // Step 8: Search movies by title
          searchMovies(query) {
              return this.movies.filter(movie =>
                  movie.title.toLowerCase().includes(query.toLowerCase())
              );
          },
          // Step 9: Display total runtime
          totalRuntime() {
              return this.movies.reduce((sum, movie) => sum + movie.runtime, 0);
          },
          // Step 10: Display movie with the highest score
          highestScore() {
              return this.movies.reduce((max, movie) =>
                  movie.iscore > max.iscore ? movie : max, this.movies[0]);
          }
      }
  });
  
  vue_app.mount("#vue_app");
  