const DtsBundleWebpack = require('dts-bundle-webpack')

module.exports = {
  mode: 'development',
  entry: './src/queryBuilder.ts',
  output: {
    filename: 'index.js',
    libraryTarget: 'umd',
    clean: true
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader?configFile=tsconfig.webpack.json'
      },
    ]
  },
  plugins: [
    new DtsBundleWebpack({
      name: 'QueryBuilder',
      main:  'dist/**/*.d.ts',
      out: 'index.d.ts',
      removeSource: true,
      outputAsModuleFolder: true,
    })
  ],
  optimization: {
    minimize: true
  }
};