module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'src/common',
            src: ['images/*.{png,jpg,gif}'],
            dest: 'dist/common'
        }]
    }
};