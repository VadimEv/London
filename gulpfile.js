const {series, watch, src, dest, parallel} = require('gulp');
const pump = require('pump');

// gulp plugins and utils
var livereload = require('gulp-livereload');
var postcss = require('gulp-postcss');
var zip = require('gulp-zip');
var uglify = require('gulp-uglify-es').default;
var minify = require('gulp-minify');
var concat = require('gulp-concat')
var concatCss = require('gulp-concat-css')
var beeper = require('beeper');
var webp = require('gulp-webp');

// postcss plugins
var autoprefixer = require('autoprefixer');
var colorFunction = require('postcss-color-function');
var cssnano = require('cssnano');
var customProperties = require('postcss-custom-properties');
var purgecss = require('@fullhuman/postcss-purgecss')
var easyimport = require('postcss-easy-import');

function serve(done) {
    livereload.listen();
    done();
}

const handleError = (done) => {
    return function (err) {
        if (err) {
            beeper();
        }
        return done(err);
    };
};


function hbs(done) {
    pump([
        src(['*.hbs', 'partials/**/*.hbs', '!node_modules/**/*.hbs']),
        livereload()
    ], handleError(done));
}

function css(done) {
    var processors = [
        easyimport,
        customProperties({preserve: false}),
        colorFunction(),
        autoprefixer({browsers: ['last 2 versions']}),
        purgecss({
	      content: ['*.hbs', 'partials/**/*.hbs'],
	      css: ['assets/css/**'],
	      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [] }),
        cssnano()
    ];

    pump([
        src('assets/css/*.css', {sourcemaps: true}),
        postcss(processors),
	concatCss('one.css'),
        dest('assets/built/', {sourcemaps: '.'}),
        livereload()
    ], handleError(done));
}

function js (done) {
  pump([
    src([
    // pull in lib files first so our own code can depend on it
      'assets/js/lib/*.js',
      'assets/js/*.js'
    ], { sourcemaps: true }),
    concat('one.js'),
    uglify(),
    dest('assets/built/', { sourcemaps: '.' }),
    livereload()
  ], handleError(done))
}


function zipper(done) {
    var targetDir = 'dist/';
    var themeName = require('./package.json').name;
    var filename = themeName + '.zip';

    pump([
        src([
            '**',
            '!node_modules', '!node_modules/**',
            '!dist', '!dist/**'
        ]),
        zip(filename),
        dest(targetDir)
    ], handleError(done));
}

const cssWatcher = () => watch('assets/css/**', css);
const jsWatcher = () => watch('assets/js/**', js);
const hbsWatcher = () => watch(['*.hbs', 'partials/**/*.hbs', '!node_modules/**/*.hbs'], hbs);
const watcher = parallel(cssWatcher, jsWatcher, hbsWatcher); const build = series(css, js);
const dev = series(build, serve, watcher);

exports.build = build;
exports.zip = series(build, zipper);
exports.default = dev;
