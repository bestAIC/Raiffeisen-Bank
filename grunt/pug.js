module.exports = {
    compile: {
        options: {
            client: false,
            pretty: true
        },
        files: [ {
            cwd: "src",
            src: "**/[^_]*.pug",
            dest: "dist",
            expand: true,
            ext: ".html"
        } ]
    }
};
