var AWS = require('aws-sdk');
var del = require('del');
var fs = require('fs');
var gutil = require('gulp-util');
var jenkins = require('gulp-jenkins');
require('dotenv').config()

var config = {
    accessKeyId: process.env.aws_access_key_id,
    secretAccessKey: process.env.aws_secret_access_key
}

//var config = { useIAM: true};
//var config = JSON.parse(fs.readFileSync('~/.aws/credentials'));

let options = {
    profile: 'default',
    region: 'us-west-2'
};

var gulp = require('gulp')
//runSequence = require('run-sequence').use(gulp);
var zip = require('gulp-zip');
var install = require('gulp-install');
var runSequence = require('run-sequence').use(gulp);

var s3 = require('gulp-s3-upload')(config);
//const lambda = require('gulp-lambda-deploy');

gulp.task('setawsprofile', function () {
    awsIdentity()
});

jenkins.init({username:'admin', password: 'Deepsp@ce9', url: '34.211.169.164:8080'})
//Clean the build folder and delete the lambda code zip.
gulp.task('clean', function () {
    return del('./build', del('./guestbook.zip'));
});
//package javascript
gulp.task('js', function () {
    return gulp.src('app/functions/*.js')
        .pipe(gulp.dest('build'));
});

gulp.task('npm', function () {
    return gulp.src('./package.json')
        .pipe(gulp.dest('./build'))
        .pipe(install({ production: true }));
});

// Next copy over environment variables managed outside of source control.
gulp.task('env', function () {
    gulp.src('./config.env.production')
        .pipe(rename('.env'))
        .pipe(gulp.dest('./build'))
});

// Now the dist directory is ready to go. Zip it.
gulp.task('zip', function () {
    return gulp.src(['build/**/*', '!build/package.json', 'build/.*'])
        .pipe(zip('guestbook.zip'))
        .pipe(gulp.dest('./'));
});

gulp.task('uploadweb', function () {
    console.log(AWS_PROFILE);
    return gulp.src("./app/web/**")
        .pipe(s3({
            Bucket: 'www.cidemo.com', //  Required 
            ACL: 'public-read'       //  Needs to be user-defined 
        }, {
                // S3 Constructor Options, ie: 
                maxRetries: 5
            }));
});

// The key to deploying as a single command is to manage the sequence of events.
/* gulp.task('default', function (callback) {
    return runSequence(
        'setawsprofile',
        'clean',
        'js',
        'npm',
        'zip',
        callback
    );
});*/

