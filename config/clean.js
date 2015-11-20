'use strict';


module.exports = {

    dist: {
        files: [{
            dot: true,
            src: [
                '.tmp',
                '<%= yeoman.dist %>/*',
                '!<%= yeoman.dist %>/.git*'
            ]
        }]
    },
     server: {
        files: [{
            dot: true,
            src: [
                '.tmp',
                '<%= yeoman.app %>/styles/**/*.{css,map}',
            ]
        }]
    },
};
