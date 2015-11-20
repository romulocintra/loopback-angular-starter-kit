'use strict';


module.exports = {
   dist: {
        options: {

          collapseWhitespace: true,
          collapseBooleanAttributes: true,

        },
        files: [ {
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: [ '*.html', 'scripts/modules/**/*.html' ],
          dest: '<%= yeoman.dist %>'
        } ]
      }
};
