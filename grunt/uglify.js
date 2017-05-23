module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'src/common/new/scripts',
            src: '**/*.js',
            dest: 'dist/common/new/scripts',
            ext: '.min.js'
        }]
    }
};