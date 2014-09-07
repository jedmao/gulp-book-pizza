var browserify       = require('connect-browserify');
var compass          = require('gulp-compass');
var connect          = require('gulp-connect');
var resourcePipeline = require('connect-resource-pipeline');

function serve() {
  connect.server({
    root: 'public',
    livereload: true,
    middleware: function(connect) {
      return [
        connect().use(resourcePipeline({ root: 'public' }, [
          { url: '/index.html', files: ['../templates/index.html'] },
          {
            url: '/styles.css', files: ['../styles/**/*.scss'], pipeline: function(files) {
              return files.pipe(compass({
                config_file: './config.rb',
                css: '.tmp',
                sass: 'styles'
              }));
            }
          }
        ])),
        connect().use('/scripts.js', browserify({
          entry: './scripts/main.js',
          debug: true
        }))
      ];
    }
  });
}

module.exports = serve;
