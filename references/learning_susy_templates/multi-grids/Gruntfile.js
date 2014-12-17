


module.exports = function(grunt) {
// Load Grunt tasks declared in the package.json file
require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

// Configure Grunt
grunt.initConfig({

// configure compass
compass: {
  dist: {
    options: {
      config: 'config.rb'
    }
  }
},


// Grunt express - our webserver
// https://github.com/blai/grunt-express
express: {
    all: {
        options: {
            bases: ['/home/james/dev/git/susy/references/learning_susy_templates/multi-grids'],
            port: 8080,
            hostname: "localhost",
            livereload: true
        }
    }
},

// grunt-watch will monitor the projects files
// https://github.com/gruntjs/grunt-contrib-watch
watch: {
    html: {
            files: '**/*.html',
            options: {
                livereload: true
        }
    },
    scss: {
      files: ['scss/**/*.scss'],
      tasks: ['compass']
    }
},

// grunt-open will open your browser at the project's URL
// https://www.npmjs.org/package/grunt-open
open: {
    all: {
        path: 'http://localhost:8080/index.html',
        app: 'google-chrome'
      }
    }
});

// Creates the `server` task
grunt.registerTask('server', [
    'express',
    'open',
    'watch'
    ]);
};

/*
 *grunt.initConfig({
 *    reload: {
 *        port: 6001,
 *        proxy: {
 *            host: 'localhost',
 *        }
 *    },
 *    watch:{
 *        files:['index.html', 'css/styles.css'],
 *        tasks:'default reload'
 *    }
 *});
 *
 * grunt reloadServer watch
 * grunt.loadNpmTasks('grunt-reload');
 */
