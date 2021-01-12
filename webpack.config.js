const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
      publicPath: '/',
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js',
   },
   module: {
      rules: [
         {
            test: /.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
               {
                  loader: 'babel-loader',
               },
            ],
         },
         {
            test: /.(css)$/,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /.html$/,
            use: {
               loader: 'html-loader',
            },
         },
         {
            test: /.(jpg|jpeg|png|gif|mp3|svg)$/,
            use: {
               loader: 'file-loader',
               options: {
                  name: '[name].[hash].[ext]',
                  outputPath: 'assets',
               },
            },
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         filename: 'index.html',
         template: path.join(__dirname, 'src', 'index.html'),
      }),
   ],
   resolve: {
      modules: [path.join(__dirname, 'src'), 'node_modules'],
      extensions: ['*', '.js', '.jsx'],
   },
   devServer: {
      contentBase: './',
      historyApiFallback: true,
      hot: true,
      port: 8080,
   },
};
