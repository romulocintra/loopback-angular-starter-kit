'use strict';


module.exports = {
    server: [
        'sass',
        'coffee:dist',
        'copy:styles'
    ],
    test: [
        'coffee',
        'copy:styles'
    ],
    dist: [
        'coffee',
        'copy:styles',
        'imagemin',
        'svgmin',
        'htmlmin'
    ]
};
