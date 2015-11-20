'use strict';

module.exports = function(grunt) {
    //Load all .js tasks definitions at tasks folder
    grunt.loadTasks('./grunt-tasks');
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);


    var options = {
        appName: require('./package.json').name,
        yeoman: {
            // configurable paths
            app: require('./bower.json').appPath || 'app',
            dist: 'client',
            api: {
                development: 'http://localhost:3000/api/',
                production: '/api/'
            },
            site: {
                development: 'http://0.0.0.0:3000',
                production: ''
            },

        },
    };

    // Load grunt configurations automatically at config folder
    var configs = require('load-grunt-configs')(grunt, options);

    // Define the configuration for all the tasks
    grunt.initConfig(configs);

    grunt.registerTask('default', [
        'jshint',
        'loopback',
        'test',
        'build'
    ]);

};
