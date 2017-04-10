const RewriteImportPlugin = require("less-plugin-rewrite-import");

module.exports = {
  entry: require.resolve('./main.less'),
  output: {
    filename: 'bundle.js',
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true,
              plugins:[new RewriteImportPlugin({
								paths: {
									'./other.less': __dirname + './foo.less' }
							})]
            },
          },
        ],
      },
    ],
  },
  devServer: {
    inline: true,
  },
};
