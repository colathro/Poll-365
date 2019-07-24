var webpack = require('webpack');

module.exports = {
    entry: {
        app: './app.tsx',
        asset: './asset-modules.js',
    },
    output: {
        filename: '../Backend/wwwroot/[name].js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.ts', '.tsx', '.css', '.less', '.ttf']
    },
    plugins: [
       new webpack.optimize.UglifyJsPlugin()
   ],
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts' },
            { test: /\.tsx$/, loader: 'ts' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?name=bundle/[name].[ext]&limit=10000&mimetype=application/font-woff'},
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?name=bundle/[name].[ext]&limit=10000&mimetype=application/octet-stream'},
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=bundle/[name].[ext]'},
            { test: /\.(jpg|png|ico|gif)$/, loader: 'file?name=bundle/[name].[ext]' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?name=bundle/[name].[ext]&limit=10000&mimetype=image/svg+xml'}
        ]
    }
}