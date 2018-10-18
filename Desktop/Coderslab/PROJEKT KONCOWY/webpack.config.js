var path = require("path");

var Html = require('html-webpack-plugin');

module.exports = {
    entry: [
        "whatwg-fetch", // polyfill dla fetch
        "./js/app.jsx", // główny plik aplikacji
    ],
    output: {
        filename: "js/out.js", // ścieżka pliku wyjscia
        path: path.resolve(__dirname, "dist") //zapisuj wszystko w ./dist
    },
    mode: "development",
    //devtool: "source-map",
    watch: true,
    module: {
        rules: [

            // jsx!
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ['env', // transpiluj szystko zgodnie z poniższymi ustawieniami
                                {
                                    targets: {
                                        browsers: [
                                            'Chrome 55', // jakie przeglądarki wspierać
                                        ] // https://github.com/browserslist/browserslist
                                    }
                                }
                            ],
                            'stage-2',
                            'react', // jsx -> js
                        ]
                    }
                }
            },

            // scss
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // dopisz do strony css za pomocą <style/>
                    'css-loader', // odczytaj css
                    'sass-loader', // zamien scss -> css
                ]
            },

            // obrazy
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]', // definiuje jak mają się nazywać pliki w ./dist
                        publicPath: 'images', // dodaj do ścieżki w kodzie
                        outputPath: 'images', // ścieżka kopiowania obrazów
                    }
                }
            },

            //fonty
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',  // definiuje jak mają się nazywać pliki w ./dist
                        publicPath: 'fonts', // dodaj do ścieżki w kodzie
                        outputPath: 'fonts', // ścieżka kopiowania obrazów
                    }
                }
            },
        ]
    },

    plugins: [
        new Html({
            filename: 'index.html', // nazwa pliku w katalogu ./dist
            template: './index.html', // szablon na podstawie, którego ma być utworzony plik
        })
    ]
}