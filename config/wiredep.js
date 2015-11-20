'use strict';


module.exports = {
    server: {
        src: ['<%= yeoman.app %>/index.html'],
        exclude: [
           'bower_components/bootstrap/dist/js/bootstrap.js'
           ],
        ignorePath: /\.\.\//
      },
      dist: {
        src: ['<%= yeoman.dist %>/index.html'],
        ignorePath: '../client/app/'
      }
};
