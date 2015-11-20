'use strict';

module.exports = {

    default: {
        src: [
         '<%= yeoman.app %>/scripts/**/{,*/}*.js',
          '<%= yeoman.app %>//scripts/**/*.js',
         'server/**/*.js'
        ],
       options: {
          config: '.jsbeautifyrc'
        }
      }
};
