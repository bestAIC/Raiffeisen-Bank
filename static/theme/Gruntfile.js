module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Конкатенация файлов
		concat: {
			options: {
				separator: ';'
			},
			main: {
				src: [//собираем все js, которые пишем сами для работы сайта

					// Common
					'js/components/Application.js',
					'js/components/*.js',

					// Views
					'js/BView/Default.js',
					'js/BView/*.js',
					'js/BView/subView/*.js',

					'js/Router.js',
					'js/script.js'
				],
				dest: 'js/script.min.js'
			},
			libs: {
				src: [//собираем все js библиотеки/сторонные скрипты
					'js/libs/underscore-min.js',
					'js/libs/backbone-min.js',
					'js/libs/modernizr-2.5.3.min.js',
				],
				dest: 'js/libs/libs.min.js'
			}
			/*deviceDetect: {
				src: [//собираем js, который необходим для определния устрайства пользователя
					'js/libs/Cookie.js',
					'js/libs/device.min.js',
					'js/libs/helperSiteTypeDetect.js'
				],
				dest: 'js/deviceDetect.min.js'
			}*/
		},

		//удаляем console.log
		removelogging: {
			main: {
				src: '<%= concat.main.dest %>',
				dest: 'js/script.min.js',
				options: {
				// see below for options. this is optional.
				}
			}
			/*deviceDetect: {
				src: '<%= concat.deviceDetect.dest %>',
				dest: 'js/deviceDetect.min.js',
				options: {}
			}*/
		},

		// Сжатие кода
		uglify: {
			main: {
				options: {
					banner: '"use strict";\n/*! Do not touch this file!\n<%= pkg.name %> v<%= pkg.version %> */\n'
				},
				files: {
					// Результат задачи concat
					'js/script.min.js': '<%= removelogging.main.dest %>'
				}
			}
			/*deviceDetect: {
				options: {
					banner: ''
				},
				files: {
					'<%= removelogging.deviceDetect.dest %>': '<%= removelogging.deviceDetect.dest %>'
				}
			}*/
		},

		less: {
			desctop: {
				files: {
					"template_styles.css": "template_styles.less"
				}
			}
		},

		postcss: {
			options: {
				map: false,
				processors: [
					require('autoprefixer-core')({
						browsers: ['last 2 versions']
					}),
					//require('postcss-opacity').postcss,
					//require('csswring').postcss
				]
			},
			dist: {
				src: '*.css'
			}
		},

		// SVG optimizer
		svgmin: {                       // Task
			options: {                  // Configuration that will be passed directly to SVGO
				plugins: [
					{removeViewBox: false},
					{removeUselessStrokeAndFill: false},
					{convertPathData: {straightCurves: false}} // advanced SVGO plugin option
				]
			},
			dist: {                     // Target
				files: [{               // Dictionary of files
				expand: true,       // Enable dynamic expansion.
				cwd: 'images-original',     // Src matches are relative to this path.
				src: ['**/*.svg'],  // Actual pattern(s) to match.
				dest: 'images',       // Destination path prefix.
				ext: '.svg'     // Dest filepaths will have this extension.
				}]
			}
		},

		watch: {
			concatJs: {
				files: '<%= concat.main.src %>',
				tasks: ['concat:main', 'removelogging:main', 'uglify:main']
			},
			concatLibJs: {
				files: '<%= concat.libs.src %>',
				tasks: ['concat:libs']
			},
			/*deviceDetect: {
				files: '<%= concat.deviceDetect.src %>',
				tasks: ['concat:deviceDetect', 'removelogging:deviceDetect', 'uglify:deviceDetect']
			},*/
			css: {
				files: [
					'template_styles.less',
					'less/*.less',
					'less/**/*.less'
				],
				tasks: ['less', 'postcss']
			},
			svg: {
				files: ['images-original/**/*.svg', 'images-original/*.svg'],
				tasks: ['svgmin']
			},
			options: {
				livereload: true
			}
		}

	});

	require('load-grunt-tasks')(grunt);

	// Default task(s).
	grunt.registerTask('default', [
		'less', 'postcss',
		'concat:libs',
		'watch'
	]);
	grunt.registerTask('release', ['concat', 'removelogging','uglify']);

};
