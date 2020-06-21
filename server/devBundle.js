import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig_development from './../webpack.config.client';
import webpackConfig_production from './../webpack.config.client.production';

export default {
    compile: app => {
        if(process.env.NODE_ENV === 'development'){
            const compiler = webpack(webpackConfig_development);
            const middleware = webpackMiddleware(compiler, {
                publicPath: webpackConfig_development.output.publicPath
            });
            app.use(middleware);
            app.use(webpackHotMiddleware(compiler));
        } else if(process.env.NODE_ENV === 'production'){
            const compiler = webpack(webpackConfig_production);
            const middleware = webpackMiddleware(compiler, {
                publicPath: webpackConfig_production.output.publicPath
            });
            app.use(middleware);
        }
    }
};