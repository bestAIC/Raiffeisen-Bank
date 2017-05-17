module.exports = {

    options: {
        spawn: false,
        livereload: false
    },

    scripts: {
        files: [
            'src/common/scripts/*.js'
        ],
        tasks: [
            'jshint',
            'uglify'
        ]
    },

    styles: {
        files: [
            'src/common/styles/*.sass',
            'src/common/styles/components/*.sass'
        ],
        tasks: [
            'sass:dev',
            'postcss'
        ]
    },

    html: {
        files: [
            'src/**/*.pug'
        ],
        tasks: [
            'pug'
        ]
    },

    svg: {
        files: [
            'src/common/icons/**.**'
        ],
        tasks: [
            'svgstore'
        ]
    }

};