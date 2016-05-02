'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    shell: {
      options: {
        // Run in thesis/ dir and ignore STDERR
        stderr: false,
        execOptions: {
          cwd: 'thesis'
        }
      },

      compile: {
        command: 'make'
      },

      clean: {
        command: 'make clean'
      }

    },

    watch: {
      files: [
        'thesis/bachelor.tex',
        'thesis/partials/*.tex',
        'thesis/partials/*.bib',
      ],
      tasks: ['shell:compile', 'shell:clean'],
    },

  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

};
