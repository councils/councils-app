// dependencies
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

// postcss plugins
// var precss = require('precss');
var autoprefixer = require('autoprefixer');
var postcssImport = require('postcss-import');
var postcssImport = require('postcss-import');
var reporter = require('postcss-reporter');
var cssnano = require('cssnano');
var messages = require('postcss-browser-reporter');

// for the commonChunksPlugin, items get added to this array based on conigs
var ON_TEST = process.env.NODE_ENV === 'test';

var config = {
  cache: true,
  debug: true,
  context: __dirname + '/src',

  // the entry point of your library
  entry: {
    index: './index.js',
  },

  // where 3rd-party modules can reside
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components']
  },

  output: {
    // where to put standalone build file
    path: path.join(__dirname, '/www'),
    publicPath: '',
    filename: '[name].js',
    sourceMapFilename: '[file].map',
    libraryTarget: 'umd'
  },

  // dependencies listed here will NOT be bunlded into the app, even if you `require` them.
  externals: [
    {
      'angular': {
        root: 'angular',
        commonjs: 'angular',
        commonjs2: 'angular',
        amd: 'angular'
      }
    },
    {
      'lodash': {
        root: '_',
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash'
      }
    },
    {
      'jquery': {
        root: '$',
        commonjs: 'jquery',
        commonjs2: 'jquery',
        amd: 'jquery'
      }
    },
    {
      moment: 'moment'
    },
    {
      firebase: 'firebase'
    },
    {
      ionic: 'ionic'
    }
  ],

  // optimization plugins
  // we add more items to this array based on configs set at top of file.
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    ),
    new webpack.optimize.DedupePlugin(),
    new ngAnnotatePlugin({
      add: true,
      remove: false
    }),
    new HtmlWebpackPlugin({
      pkg: require('./package.json'),
      template: 'src/dev.html', // process.env.NODE_ENV === 'production' ? 'src/prod.html' : 'src/dev.html',
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      ON_DEV: process.env.NODE_ENV === 'development' || !process.env.NODE_ENV,
      ON_TEST: ON_TEST,
      ON_PROD: process.env.NODE_ENV === 'production'
    })
  ],

  // what loaders to use based on file type.
  module: {
    preLoaders: [
      // {
      //   test: /\.js$/,
      //   loader: 'eslint-loader',
      //   exclude: /(node_modules|bower_components)/,
      // }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015-loose', 'stage-1'],
          plugins: ['transform-runtime']
        }
      },
      // {
      //   test:   /\.css$/,
      //   loader: 'style!css!postcss',
      //   exclude: /(node_modules|bower_components)/
      // },
      {
        test   : /\.scss$/,
        loader : 'style!css!postcss!sass?outputStyle=expanded'
      },
      {
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.(woff|otf|ttf|eot|svg).*$/,
        loader: 'file?name=[name].[ext]?[hash]'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },

  // postcss plugins settings
  postcss: function (_webpack) {
    var postcssPlugins = [
      postcssImport({
        addDependencyTo: _webpack,
        onImport: function (files) {
          files.forEach(this.addDependency);
        }.bind(this)
      }),
      // precss({browsers: 'last 2 versions'}),
      autoprefixer({ browsers: ['last 2 version'] }),
      reporter()
    ];
    // only minify when on production
    if (process.env.NODE_ENV === 'production') {
      postcssPlugins.push(cssnano({
        mergeRules: false,
        zindex: false,
        reduceIdents: false,
        mergeIdents: false
      }));
    } else {
      // use the message reported when on development
      postcssPlugins.push(messages());
    }

    return postcssPlugins;
  },

  eslint: {
    formatter: require('eslint-friendly-formatter'),
  },

  devtool: 'source-map',

  devServer: {
    contentBase: 'dist/',
    noInfo: false,
    hot: true,
    inline: true
  }
};

/**
 * If on production then minify code else (on dev) and turn on hot module replacement.
 */
if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}));
} else {
  // config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
