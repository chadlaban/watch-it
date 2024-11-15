# Watch It App

This is a project based learning, the app allows user to look into movie or shows, this contains reviews and other information about a film. A feature of this app allows a user to trigger a randomizer if a user just wants to know what movie or show to watch for the day.

### Tech Stack:

Front-End: React.js and TailWind CSS<br />
Back-End: Express.js and RESTful APIs (https://developer.themoviedb.org/docs/getting-started)

### To run project, please ensure you Node within your system. Execute these commands within each respective folder:

watch-it-backend = node server.js<br />
watch-it-frontend = npm start

### Important env for watch-it-frontend (update 'port' based on your setup):

REACT_APP_API_URL=http://localhost:${port}/api/
REACT_APP_API_SEARCH_URL=http://localhost:${port}/api/search/
REACT_APP_API_MOV_DETAILS_URL=http://localhost:${port}/movie/
REACT_APP_API_SER_DETAILS_URL=http://localhost:${port}/series/
REACT_APP_API_PRSN_DETAILS_URL=http://localhost:${port}/person/
REACT_APP_API_IMG_URL=https://image.tmdb.org/t/p/w500
