module.exports = {
    entry: './app/js/main.js',
    output: {
        filename: './bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query:  {
                    presets: ['es2015']
                }

            }

        ]
    }
};