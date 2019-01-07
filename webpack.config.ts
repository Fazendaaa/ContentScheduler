import { join } from 'path';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

//const nonRelative = (path: string): string => join(__dirname, `./src/lib/${path}`);

module.exports = {
    target: 'node',
    mode: 'development',
    entry: join(__dirname, 'src/main.ts'),
    node: {
        __dirname: false
    },
    output: {
        filename: 'main.js',
        path: join(__dirname, 'dist')
    },
    optimization: {
        minimize: true,
        minimizer: [
            new UglifyJsPlugin(
                {
                    include: /\.min\.js$/
                }
            )
        ]
    },
    resolve: {
        alias: {
            main: join(__dirname, './src/main.ts')
        },
        extensions: [
            '.js',
            '.ts',
            '.tsx'
        ]
    },
    module: {
        rules: [
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: 'javascript/auto'
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: [
                    /node_modules/,
                    /ci/
                ]
            }
        ]
    }
};
