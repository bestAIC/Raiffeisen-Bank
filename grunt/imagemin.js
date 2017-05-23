module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'src/common/new',
            src: ['images/*.{png,jpg,gif}'],
            dest: 'dist/common/new'
        }]
    }
};