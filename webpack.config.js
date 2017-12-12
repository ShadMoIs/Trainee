module.exports = {
    entry: ['./app/js/main.js', './app/js/main2.js'],
    //alternativ einzeln in Kommandozeile eingben: 
    // npm install .node_modules/.bin/webpack ./app/js/main3.js ./bundle.js
    // npm install .node_modules/.bin/webpack ./app/js/main4.js ./bundle.js
    output: {
        filename: './bundle.js',
        path: path.join(__dirname, "dist")
        //where do we want the file be 
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
                //durch babel loader kann man  ES6/JSX in ES5 umwandeln
            //presets ist ein muss, da man spezifizieren muss, was man transpilen will
            },
            {
            test: /\.(png)$/,
            loader: 'url-loader?limit=2000'
            //loading images
            },
            {
                // test: /\.css$/,
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
                //wandelt scss in css um
            }

        ]
    }
}; 

//webpack.config.js automatisiert Aufgaben indem ich nur webpack in Kammondozeile eingeben muss