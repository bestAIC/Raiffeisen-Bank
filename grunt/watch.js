module.exports = {

    options: {
        spawn: false,
        livereload: false
    },

    scripts: {
        files: [
            'src/common/new/scripts/*.js'
        ],
        tasks: [
            'jshint',
            'uglify'
        ]
    },

    styles: {
        files: [
            'src/common/new/styles/*.sass',
            'src/common/new/styles/components/*.sass',
            'src/common/new/blocks/**/*.sass',
            'src/common/new/elements/**/*.sass'
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
            'src/common/new/icons/**.**'
        ],
        tasks: [
            'svgstore'
        ]
    }

};