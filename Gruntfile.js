/**
 * Created by stevegibbings on 10/08/2014.
 */
module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        shell: {
            build: {
              command: 'bundle exec jekyll build'
            },
            serve: {
                command: 'bundle exec jekyll serve --watch'
                // ps aux | grep jekyll
            }
        }
    });

};