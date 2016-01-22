module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true
            },
            uses_defaults: ['src/*.js']
        },
        uglify: {
            options: {
                sourceMap: true,
                sourceMapIncludeSources: true,
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> <%= pkg.repository %> */\n'
            },
            build: {
                files: {
                    'dist/<%= pkg.name %>.min.js': [
                        'bower_components/switchery/dist/switchery.js',
                        'src/<%= pkg.name %>.js'
                    ]
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/<%= pkg.name %>.min.css': [
                        'bower_components/switchery/dist/switchery.css'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'uglify', 'cssmin']);

};