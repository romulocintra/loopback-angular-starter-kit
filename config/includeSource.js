'use strict';

module.exports = {
 options: {
        basePath: '<%= yeoman.app %>/',
        baseUrl: '/',
        templates: {
          html: {
            js: '<script src="{filePath}"></script>',
            css: '<link rel="stylesheet" href="{filePath}" />'
          }
        }
      },
      server: {
        files: {
          '<%= yeoman.app %>/index.html': '<%= yeoman.app %>/index.tpl.html'
        }
      },
      dist: {
        files: {
          '<%= yeoman.dist %>/index.html': '<%= yeoman.app %>/index.tpl.html'
        }
      }

};
