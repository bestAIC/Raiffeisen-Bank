module.exports = {
    // Настройки для разработки
    dev: {
        options: {
            outputStyle: 'nested',
            sourceMap: true
        },
        files: [{
            expand: true,
            cwd: 'src/common/new/styles',
            src: ['*.sass'],
            dest: 'dist/common/new/styles',
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
            cwd: 'src/common/new/styles',
            src: ['*.sass'],
            dest: 'dist/common/new/styles',
            ext: '.css'
        }]
    }
};