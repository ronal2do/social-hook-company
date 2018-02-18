const path = require('path');
const webpack = require('webpack');

process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: 3000
  },
  devtool: 'source-map',
  entry: {
    main: path.join(__dirname, '../index.js')
  },
  module: {
    rules: [{
      oneOf: [{
        test: /\.(js)$/,
        exclude: /node_modules(?!\/(react-native-vector-icons|react-native-tab-view|react-router-native|react-native-swiper|react-native-search-box))/,
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true,
          presets: ['react-app']
        }
      }, {
        test: /\.ttf$/,
        loader: require.resolve('file-loader'),
        include: path.resolve(__dirname, 'node_modules/react-native-vector-icons')
      }, {
        exclude: [/\.js$/, /\.html$/, /\.json$/],
        loader: require.resolve('file-loader')
      }]
    }]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        BABEL_ENV: JSON.stringify(process.env.BABEL_ENV)
      }
    })
  ],
  resolve: {
    extensions: ['.web.js', '.js', '.json'],
    modules: [path.join(__dirname, '..', 'node_modules')],
    alias: {
      'react-native': 'react-native-web',
      'reactotron-react-native': 'reactotron-react-js',
      'react-navigation': 'react-navigation/lib/react-navigation.js'
    }
  }
};
