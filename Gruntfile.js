module.exports = function(grunt) {
    grunt.file.defaultEncoding = 'cp1251';
    require('time-grunt')(grunt);

    require('load-grunt-config')(grunt, {
        jitGrunt: true
    });
}; 