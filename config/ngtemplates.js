  'use strict';

  module.exports = {
      app: {

          src: '<%= yeoman.app %>/scripts/**/{,*/}*.html',
          dest: '<%= yeoman.app %>/scripts/templates.js',
          options: {

              htmlmin: {
                  collapseWhitespace: true,
                  collapseBooleanAttributes: true,
                  removeEmptyAttributes: true,
                  removeRedundantAttributes: true,
                  removeScriptTypeAttributes: true,
                  removeStyleLinkTypeAttributes: true


              },

                  url: function(url) { return url.replace('app/', ''); },

              standalone: true
          }
      }

  };
