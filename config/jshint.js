'use strict';

module.exports = {
         options: {
        jshintrc: '.jshintrc',
        ignores :['<%= yeoman.app %>/scripts/templates.js' , '<%= yeoman.app %>/scripts/services/Loopback.js' , 'Gruntfile.js']
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/scripts/{,*/}*.js'
      ]
};
