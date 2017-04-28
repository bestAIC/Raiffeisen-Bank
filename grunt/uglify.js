module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'src/common/scripts',
            src: '**/*.js',
            dest: 'dist/common/scripts',
            ext: '.min.js'
        }]
    }
};