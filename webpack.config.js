const path = require('path'); // Import the path module to work with file paths
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // Set the mode to 'development' or 'production' or 'none'
    entry: './src/index.js', // Define the entry point of the application
    output: {
        filename: 'bundle.js', // Name of the output file
        path: path.resolve(__dirname, 'build'), // Output directory (absolute path to 'build')
    },
    plugins : [
        new HtmlWebpackPlugin({
template:path.join(__dirname,'public',"index.html")
        })
    ],
    devServer:{
        static:{
            directory:path.join(__dirname,"build")
        },
        port: 3000,
    },
    module: {
        rules:[
            {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader"]  //for transpile the js
            }
        ]
    },
    resolve:{
        extensions:["*",".js",".jsx"],
    }
};
