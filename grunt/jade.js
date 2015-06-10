module.exports = {
    dist: {
        options: {
            pretty: true,
            debug: false,
            timestamp: '<%= new Date().getTime() %>'
        },
        files: [{
            expand: true,
            cwd: 'src/',
            src: '**/*.jade',
            dest: 'out/',
            ext: '.html'
        }]
    }
};