'use strict';

module.exports = function(grunt) {

    grunt.registerTask('build', [
        'clean:dist',
        'includeSource:dist',
        'wiredep:dist',
        'ngtemplates:app',
        'useminPrepare',
        'autoprefixer',
        'concat',
        'ngAnnotate',
        'copy:dist',
        //'cdnify',
        'cssmin',
        'uglify:dist',
        'rev',
        'usemin',
        'connect:dist',
        'watch'
    ]);

};


