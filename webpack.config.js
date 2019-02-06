const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const Visualizer = require('webpack-visualizer-plugin');


module.exports = {
  // mode: 'development',
  mode: 'production',
  entry: {
    app: ['./public/index.html', './src/index.js', './src/main.js'],
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.js",
      vuex$: "vuex/dist/vuex.esm.js"
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/wm/',
  },
  module: {
    rules: [
      {
        test: /\.html/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]?[hash]',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new Visualizer({ filename: './statistics.html' })
  ],
  optimization: {
    usedExports: true,
    sideEffects: false,
    // splitChunks: {
    //   chunks: 'all'
    //   // cacheGroups: {
    //   //   vendor: {
    //   //     test: /node_modules/,
    //   //     chunks: 'initial',
    //   //     name: 'vendor',
    //   //     enforce: true,
    //   //     priority: 5,
    //   //   },
    //   //   rollup_vue: {
    //   //     test: /rollup_vue/,
    //   //     chunks: 'initial',
    //   //     name: 'rollup_vue',
    //   //     priority: 10,
    //   //   },
    //   // }
    // }
  }
};
