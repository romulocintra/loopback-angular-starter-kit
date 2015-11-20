'use strict';

module.exports = function(grunt) {

    grunt.registerTask('server', function(target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'jsbeautifier:default',
            'includeSource:server',
            'wiredep:server',
            'concurrent:server',
            'autoprefixer',
            'connect:livereload',
            'watch',
            'newer:includeSource:server'
        ]);
    });


};
