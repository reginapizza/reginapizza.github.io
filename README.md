### Advanced Usage

After installation, run `npm install` and then run `npm start` which will open up a preview of the template in your default browser, watch for changes to core template files, and live reload the browser when changes are saved. You can view the `gulpfile.js` to see which tasks are included with the dev environment.

#### Gulp Tasks

- `gulp` the default task that builds everything
- `gulp watch` browserSync opens the project in your default browser and live reloads when changes are made
- `gulp css` compiles SCSS files into CSS and minifies the compiled CSS
- `gulp js` minifies the themes JS file
- `gulp vendor` copies dependencies from node_modules to the vendor directory

You must have npm and Gulp installed globally in order to use these features.
