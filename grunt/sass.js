module.exports = {
    // Настройки для разработки
    dev: {
        options: {
            outputStyle: 'nested',
            sourceMap: true
        },
        files: [{
            expand: true,
            cwd: 'src/common/styles',
            src: ['*.sass'],
            dest: 'dist/common/styles',
            ext: '.css'
        }]
    },
    // Настройки для продакшна
    prod: {
        options: {
            outputStyle: 'compressed',
            sourceMap: false
        },
        files: [{
            expand: true,
            cwd: 'src/common/styles',
            src: ['*.sass'],
            dest: 'dist/common/styles',
            ext: '.css'
        }]
    }
};