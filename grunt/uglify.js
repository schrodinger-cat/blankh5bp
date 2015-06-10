module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'src/scripts',
            src: '**/*.js',
            dest: 'out/scripts',
            ext: '.min.js'
        }]
    }
};
