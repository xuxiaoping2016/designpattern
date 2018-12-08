

const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode:"development",
    entry : path.resolve(__dirname,'src/index.js'),
    output : {
        path: path.resolve(__dirname,'release'),
        filename : 'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude:/(node_modules)/,
                loader:"babel-loader"
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'./index.html')
        })
    ],
    devServer:{
        contentBase: path.resolve(__dirname,'./release'),
        // open:true,
        port:9000
    }
}