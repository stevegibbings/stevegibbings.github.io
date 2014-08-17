/**
 * Created by stevegibbings on 10/08/2014.
 */
module.exports = function(grunt) {
    grunt.initConfig({
        wiredep: {

            target: {

                // Point to the files that should be updated when
                // you run `grunt wiredep`
                src: [
                    'app/views/**/*.html',   // .html support...
                    'app/views/**/*.jade',   // .jade support...
                    'app/styles/main.scss',  // .scss & .sass support...
                    'app/config.yml'         // and .yml & .yaml support out of the box!
                ],

                // Optional:
                // ---------
                cwd: '',
                dependencies: true,
                devDependencies: false,
                exclude: [],
                fileTypes: {},
                ignorePath: '',
                overrides: {}
            }
        }
    });
}