// Karma configuration
// Generated on Wed Mar 29 2017 10:43:57 GMT+0200 (CEST)

module.exports = function(config) {
  var configuration = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs','es6-shim'],

    // list of files / patterns to load in the browser
    files: [
      'spec/test-main.js', // Configuration of require.js
      {pattern: 'spec/helpers/**/*.js'},
      {pattern: 'build/src/**/*.js', included: false},
      {pattern: 'build/app/**/*.js', included: false},
      {pattern: 'build/spec/**/*Spec.js', included: false},
      {pattern: 'mock/json/**/*.json', included: false}
    ],
    proxies: {
      '/mock/': '/base/mock/'
    },

    plugins: [
      'karma-es6-shim',
      'karma-jasmine',
      'karma-requirejs',
      'karma-chrome-launcher'
    ],

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    customLaunchers: {
        Chrome_travis_ci: {
            base: 'Chrome',
            flags: ['--no-sandbox']
        }
    }
  };

  if (process.env.TRAVIS) {
    configuration.browsers = ['Chrome_travis_ci'];
    configuration.singleRun = true;
  }

  config.set(configuration);
}
