# SimplyContactManager
simple backbone contact manager
<br><br>

#####Technology stack
- backbonejs
- nodejs for npm - handles gulp plugin dependencies
- bower - handles all front end dependencies
- gulp - task runner 
<br><br>

#####Prerequisites to install before running the application
- nodejs with npm
- bower
<br><br>

#####To run locally
Run<br>
1. `npm install`<br>
2. `bower install`<br>
3. `gulp` (local server with livereload will begin at http://localhost:8080)<br>
<br><br>

#####Gulp Tasks
- browserify -> require- like modules and concatanate all js files in bundle.js
- bower -> inject bower front end dependencies directly into html
- watch -> watch all js, css, html, templates, bower.json files for changes 
- templates -> concatanate all templates into template.js
- webserver -> start a local server with livereload
<br><br>




