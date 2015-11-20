'use strict';

module.exports = {


     includeSource: {
        files: ['<%= yeoman.app %>/index.tpl.html'],
        tasks: ['includeSource:server']
      },


    bower: {
        files: ['bower.json'],
        tasks: ['wiredep:server']
    },

    js: {
        files: [
            '!<%= yeoman.app %>/scripts/modules/**/tests/**',
            '<%= yeoman.app %>/scripts/**/{,*/}*.js'
        ],
        tasks: ['newer:jshint:all'],
        options: {
            livereload: '<%= connect.options.livereload %>'
        }
    },

    coffee: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.coffee'],
        tasks: ['coffee:dist']
    },

    coffeeTest: {
        files: ['test/spec/{,*/}*.coffee'],
        tasks: ['coffee:test']
    },

    styles: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
        tasks: ['copy:styles', 'autoprefixer']
    },

    livereload: {
        options: {
            livereload: '<%= connect.options.livereload %>'
        },
        files: [
            '<%= yeoman.app %>/{,*/}*.html',
            '<%= yeoman.app %>/**/{,*/}*.html',
            '.tmp/styles/{,*/}*.css',
            '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js(on)?',
            '<%= yeoman.app %>/../server/{,*/}*.js(on)?',
            '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
    }
};
