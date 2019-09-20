// Every require gulp plugin

const gulp = require('gulp'),
      babel = require('gulp-babel'),
      autoprefixer = require('gulp-autoprefixer'),
      browserSync = require('browser-sync'),
      sass = require('gulp-sass'),
      cleanCSS = require('gulp-clean-css'),
      sourcemaps = require('gulp-sourcemaps'),
      concat = require('gulp-concat'),
      imageMin = require('gulp-imagemin'),
      change = require('gulp-changed'),
      uglify = require('gulp-uglify'),
      lineEndingCorrector = require('gulp-line-ending-corrector'),
      rename = require('gulp-rename');


// Paths

const srcIMG = './src/img/*',
      distIMG = './dist/img',
      srcJS = './src/js/*.js',
      distJS = './dist',
      srcSASS = './src/sass/main.scss',
      distCSS = './dist/css';
      
function Style(){
        return gulp.src(srcSASS)
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sass())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(sourcemaps.write())
        .pipe(lineEndingCorrector())
        .pipe(gulp.dest(distCSS))
    }

function MoveHTML(){
    return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'))
}    

function MoveIMG(){
    return gulp.src(srcIMG)
    .pipe(change(distIMG))
    .pipe(imageMin([
        imageMin.jpegtran({progressive: true}),
        imageMin.optipng({optimizationLevel: 5})
    ]))
    .pipe(gulp.dest(distIMG))
}  

function CompleteStyle(){
    return gulp.src('./src/sass/main.scss')
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(lineEndingCorrector())
    .pipe(gulp.dest('./dist'))
    
}

function javascript() {
    return gulp.src(srcJS)
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src'))
}

function javascriptREADY() {
    return gulp.src('./src/main.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(lineEndingCorrector())
    .pipe(gulp.dest(distJS))
}


function build() {
    CompleteStyle();
    MoveHTML();
    MoveIMG();
    javascriptREADY();
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './src'
        },
        port: 8080,
        online: true,
        tunnel: false,
        logLevel: "debug"
    })
   
   gulp.watch('./src/sass/*.scss', Style)
   gulp.watch('./src/index.html').on('change', browserSync.reload)
   gulp.watch('./src/css/*.css').on('change', browserSync.reload)
}

exports.javascriptREADY= javascriptREADY;
exports.javascript = javascript;
exports.style = Style;
exports.completeStyle = CompleteStyle;
exports.watch = watch;
exports.movehtml = MoveHTML;
exports.moveIMG = MoveIMG;
exports.build = build;