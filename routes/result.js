
var resp = require('./lib/resp.js');
var utils = require('./lib/utils.js');

var query = utils.getQuery();

cache.set("type", query.type);
cache.set("content", '%' + query.content + '%');

resp.render('./views/result.ejs', { page: 'result', content: query.content });
