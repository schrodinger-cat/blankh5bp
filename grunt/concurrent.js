module.exports = {

    // Task options
    options: {
        limit: 4
    },

    // Dev tasks
    devFirst: [
        'clean',
        'jshint'
    ],
    devSecond: [
        'sass:dev',
        'uglify'
    ],

    // Production tasks
    prodFirst: [
        'clean',
        'jshint'
    ],
    prodSecond: [
        'sass:prod',
        'uglify',
        'jade'
    ],

    // Image tasks
    imgFirst: [
        'imagemin'
    ]

};
