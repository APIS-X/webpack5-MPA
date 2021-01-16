const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const settings = require('./settings');

module.exports = [
  {
    test: /\.(c|le)ss$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              [
                "postcss-preset-env",
                {
                  browsers: 'last 2 versions'
                }
              ],
            ],
          },
        }
      },
      {
        loader: 'less-loader'
      }
    ]    
  },
  {
    test: /\.(js)$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]    
  },
  {
    test: /\.html$/,
    use: [{
      loader: 'html-loader',
      options: {
        minimize: false,
        esModule: true
      }
    }]
  }, 
  {
    test: /\.ejs/,
    use: [{
      loader: 'ejs-loader',
      options: {
        esModule: false
      }
    }]
  },
  {
    test: /\.(png|jpe?g|gif)$/i,
    loader: 'file-loader',
    options: {
      name: '[path][name].[ext]',
      context: settings.context
    },
  }, 
];