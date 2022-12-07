const path = require('path')

module.exports = {
    entry: './compilater/singleScript',
    output: {                                   // куда складывать
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 4200
    }
}