var path = require('path');
var fs = require('fs');

module.exports = {
  webpack: (config, { dev }) => {
    var searchRegex = /\.js(\?[^?]*)?$/;
    // console.log(config.resolve, config.resolveLoader, path.resolve(__dirname, 'node_modules'));
    // config.resolve.fallback = [path.resolve(__dirname, 'node_modules')];
    // config.resolveLoader.fallback = [path.resolve(__dirname, 'node_modules')];
    // config.resolve.fallback = ['/Users/mac/Documents/work/hirest/next/packages/app/node_modules'];
    // config.resolveLoader.fallback = ['/Users/mac/Documents/work/hirest/next/packages/app/node_modules'];
    // Perform customizations to config
    for (var i = 0; i < config.module.rules.length; i++) {
      if (config.module.rules[i].test &&
          config.module.rules[i].test.toString() === searchRegex.toString() &&
          config.module.rules[i].loader && config.module.rules[i].loader === 'babel-loader'
        ) {
        var savedExclude = config.module.rules[i].exclude;
        config.module.rules[i].include.push(fs.realpathSync('./node_modules/@tr8'));
        // config.module.rules[i].include.push('/Users/mac/Documents/work/hirest/next/packages/app/node_modules/@tr8');

        config.module.rules[i].exclude = function (str) {
          // for (const pattern of config.transpileModules || []) {
          var pattern = /@tr8/;

           if (pattern.test(str)) {
             console.log(str);
             return false;
           }

           return savedExclude(str);
          // }
        }
      }
    }
    // Important: return the modified config
    return config
  }
}
