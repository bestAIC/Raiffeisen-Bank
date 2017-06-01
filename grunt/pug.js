module.exports = {
    compile: {
        options: {
            client: false,
            pretty: true
        },
        files: [ {
            cwd: "src",
            src: ["**/[^_]*.pug", "!common/new/blocks/**/*.pug", "!common/new/elements/**/*.pug"],
            dest: "dist",
            expand: true,
            ext: ".html"
        } ]
    }
};
