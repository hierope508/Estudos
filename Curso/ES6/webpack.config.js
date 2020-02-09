// module.exports = {
//     entry: ['@babel/polyfill', './src/main.js']
//     ,output: {
//         path: __dirname + '/public'
//         ,filename: 'bundle.js'
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader'
//                 },
//             },
//         ],
//     },

// };


//Para exercicios
module.exports = {
    entry: ['@babel/polyfill', './EX/Modulo 3/main.js']
    ,output: {
        path: __dirname
        ,filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
        ],
    },

};