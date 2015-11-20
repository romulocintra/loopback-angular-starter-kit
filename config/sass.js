'use strict';


module.exports = {
    options: {
        sourceMap: true,
        includePaths: ['<%=yeoman.app%>/bower_components/bootstrap-sass/assets/stylesheets']
    },
    server: {
        files: [{
            expand: true,
            cwd: '<%=yeoman.app%>/styles/sass',
            src: '*.{scss,sass}',
            dest: '<%=yeoman.app%>/styles/',
            ext: '.css'
        }]
    }
};
