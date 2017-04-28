module.exports = {
    options:{
        processors: [
            require('pixrem')(), // add fallbacks for rem units
            require('autoprefixer')({browsers: 'last 20 versions'}),// add vendor prefixes
            require('cssnano')()
        ]
    },
    dist: {
        src: './dist/common/styles/*.css'
    }
};